import Footer from "./Footer.js";
import Navbar from "./Navbar.jsx";
import Product from "./Product.js";


export default function App(){
  return(
    <>
   <div className="container">
   <Navbar/>
    <Product/>
    <Footer/>
   </div>

   
    </>
  );
}
