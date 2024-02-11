import './App.css';
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

function App() {
  return (<>
      <Header/>

                <Routes>
                    <Route index={true}  path='/' element={<Home/>}/>
                    <Route  path='/About' element={<About/>}/>
                    <Route path='/protfolio' element={<Portfolio/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
        <Footer/>
      </>
  );
}

export default App;
