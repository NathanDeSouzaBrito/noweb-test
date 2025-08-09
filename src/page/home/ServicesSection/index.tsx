import Card from "../../../components/Card";
import iconCubo from "../../../assets/icons/iconCubo.svg";
import iconArrow1 from "../../../assets/icons/iconArrowCard.svg";
import iconFlower from "../../../assets/icons/iconFlower.svg";
import iconVector from "../../../assets/icons/iconVector.svg";
import iconArrow2 from "../../../assets/icons/iconArrowCard2.svg";
import Style from "./style.module.css";
import iconVertical from "../../../assets/icons/iconVerticalLine.svg";
import iconHorizontal from "../../../assets/icons/iconHorizontalLine.svg";
import iconShepe from "../../../assets/icons/iconShape.svg";
import iconStar from "../../../assets/icons/iconStar.svg";

const ServicesSection = () => {
  return (
    <section className={Style.servicesSection}>
      {/* Icon Star */}
      <div className={Style.divIconStar}>
        <img src={iconStar} alt="" />
      </div>

      {/* Title and Subtitle */}
      <div className={Style.divService}>
        <img src={iconShepe} alt="Icon" />
        <h5 className={Style.serviceH5}>SERVICES</h5>
      </div>
      <div>
        <h1 className={Style.serviceH1}>
          Empowering Brands Through <br />
          Strategic Digital Services
        </h1>
      </div>

      {/* Description */}
      <div>
        <div className={Style.servicesDescription}>
          <img src={iconVertical} alt="" />
          <p className={Style.servicesP}>
            Established in 1995, NEXIN has been a leading force <br />
            in the digital landscape for over two decades. We're <br />a
            passionate team of designers,
          </p>
        </div>
      </div>
      <div className={Style.servicesLine}>
        <img src={iconHorizontal} alt="Line" />
      </div>
      <div className={Style.cardsContainer}>
        <Card
          category="Visual Branding"
          title="Web Design and Development"
          description="Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate."
          icon={iconCubo}
          alt="Web Design Icon"
          iconArrow={iconArrow1}
        />
        <Card
          Color="#BFF747"
          category="Visual Branding"
          title="Web Design and Development"
          description="Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate."
          icon={iconFlower}
          background-color="#BFF747"
          alt="Web Design Icon"
          iconArrow={iconArrow2}
        />
        <Card
          category="Visual Branding"
          title="Web Design and Development"
          description="Established in 1995, NEXIN has been leading force in the digital landscape for over two decades. We're a passionate."
          icon={iconVector}
          alt="Web Design Icon"
          iconArrow={iconArrow1}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
