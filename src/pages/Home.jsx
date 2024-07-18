import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="px-4">
      <div className="max-w-screen-xl mx-auto py-8">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="mb-4 text-3xl md:text-5xl font-semibold">Welcome to <span className="text-bold text-indigo-600">Mobank</span></h1>
          <p className="mb-6 md:text-lg text-gray-600">Experience seamless and secure financial transactions with our innovative MFS application. Enjoy a user-friendly interface that ensures your transactions are simple, efficient, and secure.</p>
          <div className="space-x-4">
            <Link to={'/register'} className="px-4 py-2 rounded-md bg-indigo-600 text-white text-lg font-semibold hover:opacity-90">Register</Link>
            <Link to={'/login'} className="px-4 py-2 rounded-md bg-indigo-600 text-white text-lg font-semibold hover:opacity-90">Login</Link>
          </div>

          <img className="w-3/4 md:w-full mx-auto mt-14" src="/transfer-money.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;