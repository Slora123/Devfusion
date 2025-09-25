import Card from '../components/Card';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiGet, apiPost } from '../lib/api';

type Loan = { id: number; party: string; amount: number; kind: string; weekly_payment?: number; status: string };

export default function Loans() {
	const queryClient = useQueryClient();
	const { data: loans } = useQuery({ queryKey: ['loans'], queryFn: () => apiGet<Loan[]>('/loans') });
	const addLoan = useMutation({
		mutationFn: () => apiPost('/loans', { party: 'Ramesh', amount: 1000, kind: 'borrowed', weekly_payment: 200 }),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['loans'] })
	});

	return (
		<div className="space-y-4 pt-4">
			<Card>
				<div className="flex items-center">
					<h3 className="font-medium">Your loans</h3>
					<button onClick={() => addLoan.mutate()} className="ml-auto text-sm text-brand">Add loan</button>
				</div>
				<ul className="mt-2 space-y-2">
					{(loans || []).map(l => (
						<li key={l.id} className="flex items-center justify-between">
							<span>{l.kind === 'borrowed' ? 'Borrowed from' : 'Lent to'} {l.party}</span>
							<span className="font-medium">₹{l.amount}</span>
						</li>
					))}
				</ul>
			</Card>
			<Card>
				<p className="text-sm text-gray-600">Tip: Pay ₹200 weekly to close your ₹1,000 loan in ~5 weeks.</p>
			</Card>
		</div>
	);
}