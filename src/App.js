import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Features from './components/Features';
import Footer from './components/Footer';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
                <meta charSet="utf-8" />
                <title>berry</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
<div className= '[background-color: white;]'>

<Navbar></Navbar>
<Hero></Hero>

<Features></Features>
<Footer></Footer>


</div>
    </div>
  );
}

export default App;
