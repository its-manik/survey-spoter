import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Clients from "./components/Clients/Clients.jsx";
import HowItWorks from "./components/HowItWroks/HowItWorks.jsx";
import About from "./components/About/About.jsx";
import FAQs from "./components/FAQa/FAQs.jsx";
import Started from "./components/Started/Started.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <HowItWorks />
        <About />
        <FAQs />
        <Started/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
