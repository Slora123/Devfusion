import { useState } from 'react';
import Card from '../components/Card';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiPost } from '../lib/api';

export default function AddEntry() {
	const [type, setType] = useState<'income' | 'expense'>('income');
	const [amount, setAmount] = useState('');
	const [note, setNote] = useState('');
	const queryClient = useQueryClient();

	const addMutation = useMutation({
		mutationFn: () => apiPost('/transactions', { type, amount: Number(amount), note }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['transactions'] });
			setAmount('');
			setNote('');
		}
	});

	return (
		<div className="space-y-4 pt-4">
			<div className="grid grid-cols-2 gap-2">
				<button className={`py-3 rounded-lg border ${type==='income' ? 'bg-green-50 border-green-300' : 'bg-white border-gray-200'}`} onClick={() => setType('income')}>Income</button>
				<button className={`py-3 rounded-lg border ${type==='expense' ? 'bg-red-50 border-red-300' : 'bg-white border-gray-200'}`} onClick={() => setType('expense')}>Expense</button>
			</div>
			<Card>
				<label className="block text-sm text-gray-600">Amount (₹)</label>
				<input inputMode="numeric" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="0" className="mt-1 w-full border rounded-lg px-3 py-3 text-lg" />
				<label className="block text-sm text-gray-600 mt-3">Note</label>
				<input value={note} onChange={e=>setNote(e.target.value)} placeholder="e.g., tea stall" className="mt-1 w-full border rounded-lg px-3 py-2" />
				<button onClick={() => addMutation.mutate()} className="mt-4 w-full bg-brand text-white py-3 rounded-lg">Save</button>
			</Card>
		</div>
	);
}