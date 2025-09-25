import { NavLink } from 'react-router-dom';

const tabs = [
	{ to: '/home', label: 'Home', icon: '🏠' },
	{ to: '/add', label: 'Add', icon: '➕' },
	{ to: '/loans', label: 'Loans', icon: '💳' },
	{ to: '/insights', label: 'Insights', icon: '📈' },
	{ to: '/learn', label: 'Learn', icon: '🎓' }
];

export default function BottomNav() {
	return (
		<nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-sm bg-white border-t border-gray-200">
			<ul className="grid grid-cols-5 text-xs">
				{tabs.map(item => (
					<li key={item.to} className="">
						<NavLink to={item.to} className={({ isActive }) => `flex flex-col items-center py-2 ${isActive ? 'text-brand' : 'text-gray-600'}`}>
							<span className="text-lg" aria-hidden>{item.icon}</span>
							<span className="leading-tight">{item.label}</span>
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}