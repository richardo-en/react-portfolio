// import { useLang } from "../../../i18n/LanguageContext";
// import logo from "../../static/images/rinelogo_colorfull.png";
// import { Link } from "react-router-dom";



// export default function Navbar() {
//   const { lang, setLang } = useLang();

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur bg-background-light/90 border-b border-gray-200">
//       <div className="max-w-[1280px] mx-auto px-4 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//           <Link to="/" className="hover:text-primary transition">
//           <div className="flex items-center gap-3 font-bold text-lg">
//             <div className="w-8 h-8 rounded-lg overflow-hidden">
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="w-full h-full object-contain"
//               />
//           </div>
//           Rine
//         </div>
//         </Link>

//         {/* Nav links */}
//         <nav className="hidden md:flex gap-8 text-sm font-medium">
//           <Link to="/about" className="hover:text-primary transition">
//             About
//           </Link>
//           <Link to="/work" className="hover:text-primary transition">
//             Work
//           </Link>
//           <Link to="/projects" className="hover:text-primary transition">
//             Projects
//           </Link>
//           <Link to="/certifications" className="hover:text-primary transition">
//             Certifications
//           </Link>
//         </nav>

//         {/* Actions */}
//         <div className="flex items-center gap-4">
          
//           {/* Language switch */}
//           <button
//             onClick={() => setLang(lang === "en" ? "sk" : "en")}
//             className="text-sm font-bold px-3 py-1 rounded hover:bg-gray-100 transition"
//           >
//             {lang.toUpperCase()}
//           </button>

//           {/* CTA */}
          
//           <Link to="/contact" className="hover:text-primary transition">
//             Contact
//           </Link>

//           {/* Mobile menu icon (zatváranie neskôr) */}
//           <button className="md:hidden text-2xl">
//             ☰
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }


import { useState } from "react";
import { useLang } from "../../../i18n/LanguageContext";
import logo from "../../static/images/rinelogo_colorfull.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const [closing, setClosing] = useState(false);

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 300);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-background-light/90 border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 font-bold text-lg">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            Rine
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link to="/about" className="hover:text-primary">About</Link>
            <Link to="/work" className="hover:text-primary">Work</Link>
            <Link to="/projects" className="hover:text-primary">Projects</Link>
            <Link to="/certifications" className="hover:text-primary">Certifications</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === "en" ? "sk" : "en")}
              className="text-sm font-bold px-3 py-1 rounded hover:bg-gray-100 transition"
            >
              {lang.toUpperCase()}
            </button>

            <Link to="/contact" className="hidden md:block hover:text-primary">
              Contact
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm">
          <div
            className={`absolute top-0 left-0 w-full h-full bg-white/85 backdrop-blur-xl
            ${closing ? "animate-menu-out" : "animate-menu-in"}`}
          >
            {/* CLOSE */}
            <div className="flex justify-end px-6 py-5 border-b border-black/10">
              <button
                onClick={closeMenu}
                className="text-3xl font-light hover:opacity-70 transition"
              >
                ×
              </button>
            </div>

            {/* LINKS */}
            <nav className="flex flex-col px-6 pt-6 text-xl font-medium">
              {[
                { label: "About", to: "/about" },
                { label: "Work", to: "/work" },
                { label: "Projects", to: "/projects" },
                { label: "Certifications", to: "/certifications" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className="
                    py-5 border-b border-primary
                    transition-all duration-200
                    hover:text-primary hover:pl-2
                  "
                >
                  {item.label}
                </Link>
              ))}

              {/* CONTACT – bez čiary */}
              <Link
                to="/contact"
                onClick={closeMenu}
                className="
                  py-5 mt-2 font-semibold
                  hover:text-primary hover:pl-2 transition-all
                "
              >
                Contact
              </Link>
            </nav>

            {/* FOOTER */}
            <div className="absolute bottom-0 w-full px-6 py-6 border-t border-black/10 flex justify-between items-center">
              <button
                onClick={() => setLang(lang === "en" ? "sk" : "en")}
                className="font-bold"
              >
                {lang.toUpperCase()}
              </button>

              <span className="text-sm text-gray-500">© Rine</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
