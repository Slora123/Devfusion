import Card from '../components/Card';

export default function Learn() {
	return (
		<div className="space-y-4 pt-4">
			<Card>
				<h3 className="font-medium">Learn money basics</h3>
				<ul className="mt-2 space-y-2 text-brand">
					<li><a href="#">How to open a bank account</a></li>
					<li><a href="#">Save ₹50 daily challenge</a></li>
					<li><a href="#">What is FD/RD?</a></li>
				</ul>
			</Card>
		</div>
	);
}