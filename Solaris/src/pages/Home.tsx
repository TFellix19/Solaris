import { useRef } from "react";
import Footer from "../components/footer";
import Navbar from "../components/main-nav";
import { motion } from "framer-motion";
import Card from "../components/card-explorar";

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

      {/* secção sobre */}
      <section className="w-full min-h-min bg-white text-black p-6 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center max-w-screen-lg">
          <div className="md:order-2 flex-shrink-0">
            <div className="w-40 h-40 md:w-60 md:h-60">
              <img
                src="https://i.postimg.cc/9fZwN66H/Pngtree-cute-cozy-colorful-snow-winter-13375397.png"
                alt="Imagem"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="md:ml-16 text-center md:text-left md:order-1">
            <h2 className="text-2xl font-bold mb-4">
              Bem-vindo ao Nosso Mundo de Solaris!
            </h2>
            <p className="text-xl">
              Criámos Solaris, um novo jogo no estilo cozy onde vai poder desenvolver o teu mundo a um nivel sustentavel
            </p>
          </div>
        </div>
      </section>

      {/* secção explorar */}

      <section
        ref={explorarRef}
        className="relative w-full min-h-screen bg-gray-800 text-white p-6"
      >
        <div className="items-center mt-20 ml-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Explora Solaris
          </h2>
        </div>
        <div className="flex flex-col items-start mt-10 ml-10 space-y-4">
          <Card
            title="Título do Card"
            description="Esta é uma pequena descrição do card. Pode conter qualquer tipo de informação relevante."
            imageUrl="https://via.placeholder.com/150"
          />
        </div>
        <div className="flex flex-col items-end mt-10 ml-10 space-y-4">
          <Card
            title="Título do Card"
            description="Esta é uma pequena descrição do card. Pode conter qualquer tipo de informação relevante."
            imageUrl="https://via.placeholder.com/150"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
