import Card from '../components/Card';

export default function Insights() {
	return (
		<div className="space-y-4 pt-4">
			<section className="grid grid-cols-2 gap-3">
				<Card>
					<p className="text-xs text-gray-500">Profit / Loss</p>
					<p className="text-2xl font-semibold">₹0</p>
				</Card>
				<Card>
					<p className="text-xs text-gray-500">Savings</p>
					<p className="text-2xl font-semibold">₹0</p>
				</Card>
			</section>
			<Card>
				<p className="text-sm text-gray-600">Top categories: tea/snacks, travel</p>
			</Card>
		</div>
	);
}