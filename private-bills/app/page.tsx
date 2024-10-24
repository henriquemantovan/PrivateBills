"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    console.log('Autenticando:', { email, password });
    router.push('/dashboard');
  };

  const goToTarefas = () => {
    router.push('/pages/tarefas');
  };

  return (
    <>
      <div className="container">
        <h2 className="title">Página de Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>

      <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 1000 }}>
        <button className="button" onClick={goToTarefas}       
            style={{ padding: '30px 80px',fontSize: '30px',borderRadius: '5px' }}>
          Ir para Tarefas (só de testes)
        </button>
      </div>
    </>
  );
};

export default LoginPage;
