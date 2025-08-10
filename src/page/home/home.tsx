import NavBar from "../../components/NavBar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import StatsSection from "./StatsSection";
import HowWeWork from "./HowWeWorkSection/HowWeWorkSection";

const Home = () => {
  return (
    <body>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <HowWeWork />
    </body>
  );
};

export default Home;
