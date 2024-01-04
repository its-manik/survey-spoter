import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Clients from "../components/Clients/Clients.jsx";
import HowItWorks from "../components/HowItWroks/HowItWorks.jsx";
import About from "../components/About/About.jsx";
import FAQs from "../components/FAQa/FAQs.jsx";
import Started from "../components/Started/Started.jsx";
import Footer from "../components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar list={[{text: "How It Wroks", id: "#howItWorks"},{text: "Data Protection", id: "#about"}, {text: "FAQs", id: "#faqs"}]} />
      <main>
        <div id="navbar"></div>
        <Hero />
        <Clients />
        <HowItWorks />
        <About />
        <FAQs />
        <Started />
      </main>
      <Footer />
    </div>
  );
}

export default App;

