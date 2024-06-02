import { useRef } from "react";
import Footer from "../components/footer";
import Navbar from "../components/main-nav";
import { motion } from "framer-motion";

function Home() {
  const explorarRef = useRef<HTMLDivElement | null>(null);

  const scrollToExplorar = () => {
    if (explorarRef.current) {
      window.scrollTo({
        top: explorarRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Navbar scrollToExplorar={scrollToExplorar} />

      {/* secção video */}

      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          loop
          autoPlay
          muted
          src="https://i.imgur.com/eWuzmF1.mp4"
        ></video>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <div className="flex flex-col items-center space-y-4 mb-20 mt-16">
            <h1 className="text-4xl md:text-6xl font-bold">Project Solaris</h1>
            <button className="px-6 py-3 border border-white text-white font-semibold rounded hover:bg-blue-700 transition">
              Jogar agora!
            </button>
          </div>
          <motion.div
            onClick={scrollToExplorar}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 absolute bottom-8 cursor-pointer"
          >
            <img
              src="/svg/noun-scroll-down-792665.svg"
              className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
              alt="Scroll down"
            />
          </motion.div>
        </div>
      </section>

      {/* secção explorar */}

      <section
        ref={explorarRef}
        className="relative w-full h-screen bg-gray-800 text-white"
      >
        <div className="absolute top-0 left-0 p-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Nova Seção</h2>
        </div>
        <div className="flex items-center justify-center w-full h-full text-center">
          <p className="text-lg md:text-xl">Conteúdo desta nova seção</p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
