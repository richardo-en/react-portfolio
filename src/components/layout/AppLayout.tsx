import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./footer";
import ScrollToTop from "./ScrollToTop";

export default function AppLayout() {
  return (
 <div className="min-h-screen flex flex-col">
      <Navbar />

      <ScrollToTop />
      
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
