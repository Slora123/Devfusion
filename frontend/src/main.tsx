import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Onboarding from './pages/Onboarding';
import Auth from './pages/Auth';
import Home from './pages/Home';
import AddEntry from './pages/AddEntry';
import Loans from './pages/Loans';
import Insights from './pages/Insights';
import Learn from './pages/Learn';

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{ path: '/', element: <App />, children: [
		{ index: true, element: <Onboarding /> },
		{ path: 'auth', element: <Auth /> },
		{ path: 'home', element: <Home /> },
		{ path: 'add', element: <AddEntry /> },
		{ path: 'loans', element: <Loans /> },
		{ path: 'insights', element: <Insights /> },
		{ path: 'learn', element: <Learn /> }
	] }
]);

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);