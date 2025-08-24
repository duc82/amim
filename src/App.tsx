import About from "./components/About";
import Cooperation from "./components/Cooperation";
import Footer from "./components/Footer";
import Friendship from "./components/Friendship";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Investment from "./components/Investment";
import JobOpportunities from "./components/JobOpportunities";
import Mission from "./components/Mission";
import News from "./components/News";
import Vision from "./components/Vision";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Vision />
      <Mission />
      <Investment />
      <Highlights />
      <Friendship />
      <Cooperation />
      <News />
      <JobOpportunities />
      <Footer />
    </>
  );
}
