import NavBar from "../../components/NavBar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import StatsSection from "./StatsSection";
import HowWeWork from "./HowWeWorkSection/HowWeWorkSection";
import ProjectsSection from "./ProjectsSection";
import CallToAction from "./CallToActionSection";
import Footer from "./Footer";
import ModalSearch from "../../components/ModalSearch/index.tsx";
import useCepStore from "../../store/cepStore.ts";

const Home = () => {
  const isOpen = useCepStore((s) => s.isModalOpen);

  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <HowWeWork />
      <ProjectsSection />
      <CallToAction />
      <Footer />
      {isOpen && <ModalSearch />}
    </>
  );
};

export default Home;
