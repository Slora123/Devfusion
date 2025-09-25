from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import SQLModel, Field, Session, create_engine, select
from typing import Optional, List
import os

DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./cashwise.db")
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {})

class Transaction(SQLModel, table=True):
	id: Optional[int] = Field(default=None, primary_key=True)
	type: str
	amount: float
	note: Optional[str] = None
	ts: Optional[str] = None

class Loan(SQLModel, table=True):
	id: Optional[int] = Field(default=None, primary_key=True)
	party: str
	amount: float
	kind: str  # borrowed or lent
	weekly_payment: Optional[float] = None
	status: str = "ongoing"

app = FastAPI(title="Cashwise API")

origins = [origin.strip() for origin in os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")]
app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

@app.on_event("startup")
def on_startup():
	SQLModel.metadata.create_all(engine)

@app.get("/health")
def health():
	return {"status": "ok"}

# Transactions CRUD
@app.get("/transactions", response_model=List[Transaction])
def list_transactions():
	with Session(engine) as session:
		items = session.exec(select(Transaction).order_by(Transaction.id.desc())).all()
		return items

@app.post("/transactions", response_model=Transaction)
def create_transaction(tx: Transaction):
	with Session(engine) as session:
		session.add(tx)
		session.commit()
		session.refresh(tx)
		return tx

@app.delete("/transactions/{tx_id}")
def delete_transaction(tx_id: int):
	with Session(engine) as session:
		obj = session.get(Transaction, tx_id)
		if not obj:
			raise HTTPException(status_code=404, detail="Not found")
		session.delete(obj)
		session.commit()
		return {"ok": True}

# Loans CRUD
@app.get("/loans", response_model=List[Loan])
def list_loans():
	with Session(engine) as session:
		items = session.exec(select(Loan).order_by(Loan.id.desc())).all()
		return items

@app.post("/loans", response_model=Loan)
def create_loan(loan: Loan):
	with Session(engine) as session:
		session.add(loan)
		session.commit()
		session.refresh(loan)
		return loan

@app.patch("/loans/{loan_id}", response_model=Loan)
def update_loan_status(loan_id: int, status: str):
	with Session(engine) as session:
		obj = session.get(Loan, loan_id)
		if not obj:
			raise HTTPException(status_code=404, detail="Not found")
		obj.status = status
		session.add(obj)
		session.commit()
		session.refresh(obj)
		return obj