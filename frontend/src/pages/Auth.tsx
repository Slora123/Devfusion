import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Auth() {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState<string | null>(null);

	async function handleSendLink(e: React.FormEvent) {
		e.preventDefault();
		setStatus('Sending magic link...');
		const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: window.location.origin + '/home' } });
		if (error) setStatus(error.message);
		else setStatus('Check your email for the login link.');
	}

	return (
		<form onSubmit={handleSendLink} className="space-y-3 pt-4">
			<label className="block text-sm text-gray-600">Email</label>
			<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" className="w-full border rounded-lg px-3 py-3" />
			<button className="w-full bg-brand text-white py-3 rounded-lg">Send login link</button>
			{status && <p className="text-center text-sm text-gray-600">{status}</p>}
		</form>
	);
}