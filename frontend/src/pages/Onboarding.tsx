import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function Onboarding() {
	return (
		<div className="space-y-4 pt-4">
			<Card>
				<h2 className="text-xl font-semibold">Welcome to Cashwise</h2>
				<p className="text-sm text-gray-600 mt-1">Track cash income, expenses, loans and learn money tips. Voice-first and simple.</p>
			</Card>
			<div className="space-y-3">
				<Link to="/home" className="block w-full text-center bg-brand text-white py-3 rounded-lg font-medium">Start now</Link>
				<p className="text-center text-xs text-gray-500">No signup needed to explore. You can add account later.</p>
			</div>
		</div>
	);
}