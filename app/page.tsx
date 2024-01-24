import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import Footer from "./components/footer/footer";

export default function Home() {
  return (
    <div className=" bg-gradient-to-tl from-indigo-500 via-sky-500 to-indigo-500 overflow-y-scroll font-sans remove-scrollbar">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}
