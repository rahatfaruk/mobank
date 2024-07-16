function Header() {
  return (  
    <header>
      <h1 className="p-4 flex items-center justify-center gap-1.5 text-2xl md:text-4xl text-center font-semibold">
        <span className="inline-block px-1 rounded bg-indigo-600 text-xl md:text-3xl text-white">MB</span>
        <span className="text-indigo-600">Mobank</span>
      </h1>
    </header>
  );
}

export default Header;