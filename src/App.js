import Banner from "./components/Home/Banner";
import Features from "./components/Features/Features";
import Navbar from "./components/Home/navbar";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto- px-16">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Footer />
      </div>
    </div>
  );
}

export default App;
