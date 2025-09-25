import VoiceButton from './VoiceButton';

export default function TopBar({ title = 'Cashwise' }: { title?: string }) {
	return (
		<header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-gray-100">
			<div className="mx-auto max-w-sm px-3 py-3 flex items-center gap-2">
				<h1 className="text-lg font-semibold text-gray-900">{title}</h1>
				<div className="ml-auto">
					<VoiceButton />
				</div>
			</div>
		</header>
	);
}