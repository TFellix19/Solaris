// import Navbar from "../components/main-nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function WorkingOnWebsite() 
{
  

    return (
      
      <>
        {/* <Navbar /> */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <span style={{ fontSize: '6em', marginBottom: '10px', display: 'inline-block'}}>
  <motion.span
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001
      }
    }}
  >
    Work in Progress
  </motion.span>
  <motion.span
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 2,
      ease: [0, 0.71, 0.2, 1.01],
      times: [0, 0, 0.1, 0, 0.1],
      repeat: Infinity,
      scale: {
        type: "spring",
        damping: 5,
        stiffness: 100,
        restDelta: 0.001
      }
      
    }}
    style={{ marginLeft: '10px', display: 'inline-block' }}
  >
    ...
  </motion.span>
</span>
      <motion.div animate={{
        scale: [1, 1, 1, 1, 1],
        rotate: [0, 0, 360, 360, 360],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 0.2
      }}style={{
          width: '400px',
          height: '400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
        }}>
        <img src="../../../favicons/projectsolaris.png" alt="projectsolaris" />
      </motion.div>

      <h1 style={{ fontSize: '6em', marginBottom: '10px',display: 'flex',
          alignItems: 'center',
          justifyContent: 'center' }}>:C
    </h1>
        {/* Social Media Icons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        marginBottom:'50px'
      }}>
        <a href="https://www.instagram.com/project._solaris/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}> <FontAwesomeIcon icon={faInstagram} size="2x" style={{ margin: '0 10px' }} /></a>
       
      </div>
    </div>
   
      </>
    )
  }

  export default WorkingOnWebsite;