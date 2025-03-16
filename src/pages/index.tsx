import {BaseSyntheticEvent, useState} from "react";
import Nav from "@/components/Nav";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = (e: BaseSyntheticEvent) => {
    if (isOpen && !e.target.closest("nav") && !e.target.closest("button")) {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100" onClick={closeMenu}>
      {/* Header */}
      <header className="bg-white shadow-md flex items-center justify-between p-4 w-full relative z-50">
        {/* Logo */}
        <div className="text-xl font-bold">LOGO</div>

        {/* Desktop Navigation - Aligned right */}
        <nav className="hidden md:flex ml-auto space-x-6 items-center h-full"> {/* Ensure nav takes full height */}
          <Nav />
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 bg-gray-200 rounded transition-all duration-300 ease-in-out hover:bg-gray-300"
          onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile Navigation (Hamburger menu) */}
      <nav
        className={`md:hidden w-full bg-white flex flex-col items-center space-y-4 p-6 transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 max-h-60 translate-y-0" : "opacity-0 max-h-0 translate-y-[-100%] overflow-hidden"
        }`}
        style={{
          maxHeight: isOpen ? "300px" : "0", // Set max-height to control the slide-down behavior
        }}
      >
        <Nav />
      </nav>

      {/* Main Content */}
      <div className="flex flex-col flex-1 p-4 md:p-6 mt-2">
        {/* Main Area */}
        <main className="flex-1">
          <h1 className="text-2xl font-semibold">Welcome</h1>
          <p className="mt-2 text-gray-600">This is your content area.</p>
        </main>

        {/* Footer */}
        <footer className="bg-white p-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} Your Company
        </footer>
      </div>
    </div>
  );
}
