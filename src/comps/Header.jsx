import { Link } from "react-router-dom";

function Header() {
  return (  
    <header>
      <h1 className="p-4 flex items-center justify-center text-center font-semibold">
        <Link to={'/'}>
          <span className="inline-block px-1 rounded bg-indigo-600 text-xl md:text-3xl text-white mr-2">MB</span>
          <span className="text-2xl md:text-4xl text-indigo-600">Mobank</span>
        </Link>
      </h1>
    </header>
  );
}

export default Header;