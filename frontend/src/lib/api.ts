export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export async function apiGet<T>(path: string): Promise<T> {
	const res = await fetch(`${API_BASE_URL}${path}`);
	if (!res.ok) throw new Error(`GET ${path} failed`);
	return res.json();
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
	const res = await fetch(`${API_BASE_URL}${path}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});
	if (!res.ok) throw new Error(`POST ${path} failed`);
	return res.json();
}

export async function apiDelete<T>(path: string): Promise<T> {
	const res = await fetch(`${API_BASE_URL}${path}`, { method: 'DELETE' });
	if (!res.ok) throw new Error(`DELETE ${path} failed`);
	return res.json();
}