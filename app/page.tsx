import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-tl from-indigo-500 via-sky-500 to-indigo-500 overflow-auto font-sans">
      <Navbar />
      <About />
    </div>
  );
}
