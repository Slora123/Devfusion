import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../lib/api';

type Tx = { id: number; type: string; amount: number; note?: string };

export default function Home() {
	const { data: transactions } = useQuery({
		queryKey: ['transactions'],
		queryFn: () => apiGet<Tx[]>('/transactions')
	});

	const balance = (transactions || []).reduce((acc, t) => acc + (t.type === 'income' ? t.amount : -t.amount), 0);

	return (
		<div className="space-y-4 pt-4">
			<section className="grid grid-cols-2 gap-3">
				<Card>
					<p className="text-xs text-gray-500">Balance</p>
					<p className="text-2xl font-semibold text-gray-900">₹{balance.toFixed(0)}</p>
				</Card>
				<Card>
					<p className="text-xs text-gray-500">This month</p>
					<p className="text-2xl font-semibold text-gray-900">+₹0 / -₹0</p>
				</Card>
			</section>
			<Card>
				<div className="flex items-center mb-2">
					<h3 className="font-medium">Recent entries</h3>
					<Link to="/add" className="ml-auto text-brand text-sm">Add</Link>
				</div>
				<ul className="divide-y divide-gray-100">
					<li className="py-2 flex items-center">
						<span>🟢</span>
						<span className="ml-2">Income example</span>
						<span className="ml-auto font-medium">+₹200</span>
					</li>
					<li className="py-2 flex items-center">
						<span>🔴</span>
						<span className="ml-2">Expense example</span>
						<span className="ml-auto font-medium">-₹50</span>
					</li>
				</ul>
			</Card>
		</div>
	);
}