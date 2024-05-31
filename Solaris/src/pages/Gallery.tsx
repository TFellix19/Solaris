import Navbar from "../components/main-nav";
import Gloadingimages from "../components/g-loading-images";
import { Carousel, initTWE } from "tw-elements";
import Footer from "../components/footer";
initTWE({ Carousel });

function Gallery() {
  return (
    <>
      <Navbar />
      
    
      <Gloadingimages />

      <Footer />
    </>
  );
}

export default Gallery;
