'use client';
import { useRouter } from 'next/navigation';
import React from 'react';


const Home = () => {
  const router = useRouter();
 
  const handleLogin = () => {
   
    router.push('?teste=1');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Bem-vindo ao MeguChat</h1>

        <div className="mb-4">
          <label className="block text-gray-600">Email:</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"

          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Senha:</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleLogin}
        >
          Entrar
        </button>

        <div className="flex flex-col space-y-2 mt-4">
          <p className="text-gray-600">Ou entre com:</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Google
          </button>
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900">
            Github
          </button>
        </div>

        <div className=" text-center mt-4">
          <p className="text-gray-600">Ainda não tem uma conta?</p>
          <a className="text-blue-500 hover:underline">Cadastre-se</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
