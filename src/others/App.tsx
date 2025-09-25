// App.tsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { supabase } from './supabaseClient';
import LoginPage from './components/LoginPage';
import LanguageSelection from './components/LanguageSelection';
import Dashboard from './components/Dashboard';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';

function App() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setLoading(false);

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-lg font-medium text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <Router>
        <div className="App bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
          <Routes>
            <Route path="/" element={session ? <Dashboard session={session} /> : <LoginPage />} />
            <Route path="/language" element={<LanguageSelection />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;