import React from 'react';

export default function HomePage() {
  return (
    <main className="flex min-h-screen">
      {/* Lista de contatos */}
      <aside className="w-1/4 bg-gray-200">
        {/* Conteúdo da lista de contatos */}
      </aside>

      {/* Área do chat */}
      <section className="flex flex-col flex-1 bg-white shadow-lg">
        {/* Cabeçalho */}
        <header className="flex items-center justify-between px-6 py-4 border-b">
          <h1 className="text-xl font-bold">WhatsApp Chat</h1>
          {/* Nome do usuário selecionado */}
          <nav className="text-sm text-gray-500">
            {/* Nome do usuário */}
          </nav>
        </header>

        {/* Mensagens */}
        <div className="flex flex-col flex-1 p-4 overflow-y-auto">
          {/* Lista de mensagens */}
        </div>

        {/* Input de mensagem */}
        <div className="flex items-center space-x-2 px-4 py-2 border-t">
          <input
            type="text"
            placeholder="Digite uma mensagem..."
            className="flex-1 px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none"
          />
          <button className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">
            Enviar
          </button>
        </div>
      </section>
    </main>
  );
}
