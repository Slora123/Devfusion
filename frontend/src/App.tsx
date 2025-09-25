import { Outlet, useLocation, Link } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import TopBar from './components/TopBar';

export default function App() {
	const location = useLocation();
	return (
		<div className="mx-auto max-w-sm min-h-screen bg-white shadow-sm">
			<TopBar title={location.pathname === '/' ? 'Welcome' : ''} />
			<main className="pb-16 px-3">
				<Outlet />
			</main>
			<BottomNav />
		</div>
	);
}