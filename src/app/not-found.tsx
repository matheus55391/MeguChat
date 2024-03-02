import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-red-500 mb-4">404 - Not Found</h2>
        <p className="text-gray-600 mb-4">Oops! Parece que a página que você está procurando não existe.</p>
        <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" href="/">
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
