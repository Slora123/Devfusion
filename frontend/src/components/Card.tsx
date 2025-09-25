import { PropsWithChildren } from 'react';

export default function Card({ children }: PropsWithChildren) {
	return (
		<div className="rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
			{children}
		</div>
	);
}