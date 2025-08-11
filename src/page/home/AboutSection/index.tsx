import bgAboutSection from "../../../assets/imgs/bgAboutSection.png";
import IconEclipses from "../../../assets/icons/iconEclipses.svg";
import iconMoreAboutUs from "../../../assets/icons/iconMoreAboutUs.svg";
import iconGetInTouch from "../../../assets/icons/iconGetInTouch.svg";
import Style from "./style.module.css";
import lineSmall from "../../../assets/icons/iconLineSmall.svg";
import lineBig from "../../../assets/icons/iconLineBig.svg";
import logo1 from "../../../assets/icons/iconLogo1.svg";
import logo2 from "../../../assets/icons/iconLogo2.svg";
import logo3 from "../../../assets/icons/iconLogo3.svg";
import logo4 from "../../../assets/icons/iconLogo4.svg";
import logo5 from "../../../assets/icons/iconLogo5.svg";

const AboutSection = () => {
  return (
    <main className={Style.aboutMain}>
      {/* Background Image */}
      <div>
        <img src={bgAboutSection} alt="" />
      </div>
      <section className={Style.aboutSection}>
        {/* Description Area */}
        <div className={Style.aboutDescription}>
          <div>
            <h1 className={Style.aboutH1}>
              We collaborate with a few disability service <br />
              providers to create inclusive goods that <br />
              meet their requirements.
            </h1>
          </div>

          {/* Icon Eclipses */}
          <div>
            <img
              className={Style.iconEclipses}
              src={IconEclipses}
              alt="Icone de eclipse"
            />
          </div>
        </div>

        {/* Card Area */}
        <div className={Style.aboutCards}>
          <div>
            <h2 className={Style.aboutH2}>25+</h2>
            <h5 className={Style.aboutH5}>Years Of Experience</h5>
          </div>
          <div>
            <p className={Style.aboutP}>
              Established in 1995, NEXIN has been a leading force <br />
              in the digital landscape for over two decades. <br />
              We're a passionate team of designers,
            </p>
            <a href="/">
              <img src={iconMoreAboutUs} alt="" />
            </a>
          </div>
          <div>
            <p className={Style.aboutP}>
              Established in 1995, NEXIN has been a leading force <br />
              in the digital landscape for over two decades. <br />
              We're a passionate team of designers,
            </p>
            <a href="/">
              <img src={iconGetInTouch} alt="" />
            </a>
          </div>
        </div>

        {/* Description Line Area */}
        <div className={Style.aboutDescriptionLine}>
          <div>
            <img src={lineSmall} alt="Line" />
          </div>
          <div>
            <h3 className={Style.aboutH3}>
              We worked with global largest brands
            </h3>
          </div>
          <div>
            <img src={lineBig} alt="Line" />
          </div>
        </div>

        {/* Logos Area */}
        <div className={`${Style.aboutDescription} ${Style.aboutLogos}`}>
          <img src={logo1} alt="Logo" />
          <img src={logo2} alt="Logo" />
          <img src={logo3} alt="Logo" />
          <img src={logo4} alt="Logo" />
          <img src={logo5} alt="Logo" />
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
