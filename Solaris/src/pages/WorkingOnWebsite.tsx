// import Navbar from "../components/main-nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
function WorkingOnWebsite() {
 

    return (
      <>
        {/* <Navbar /> */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2 style={{ fontSize: '6em', marginBottom: '10px' }}>Work in Progress...</h2>
      <div style={{
          width: '400px',
          height: '400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
        }}>
        <img src="../../public/favicons/projectsolaris.png" alt="projectsolaris" />
      </div>
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