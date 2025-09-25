export default function VoiceButton() {
	return (
		<button type="button" className="btn inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand text-white shadow active:scale-95" aria-label="Voice input">
			<span className="text-base" aria-hidden>🎤</span>
		</button>
	);
}