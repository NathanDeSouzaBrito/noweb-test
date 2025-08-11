import Style from "./style.module.css";
import IconWD from "../../../assets/icons/iconWebDesign.svg";
import IconReviews from "../../../assets/imgs/imgReviews.png";
import IconViewAllSer from "../../../assets/icons/iconViewAllSer.svg";

const HeroSection = () => {
  return (
    <section className={Style.heroSection}>
      <div className={Style.heroDivP}>
        <p className={Style.heroP}>
          Great design services <br />
          without the pretentiousness.!
        </p>
      </div>
      <div className={Style.heroDiv}>
        <h1 className={`${Style.heroH1} ${Style.heroH1Digital}`}>Digital</h1>
        <p className={Style.heroP}>
          We believe that the surest measure of success is when our <br />
          partners with us more than half It's more than just the <br />
          visuals. We're here to support your growth.
        </p>

        <div className={Style.heroReviews}>
          <img className={Style.iconReviews} src={IconReviews} alt="Reviews" />
          <h3 className={Style.heroH3}>
            Excellent <b>4.000+</b> Reviews
          </h3>
        </div>
      </div>
      <div className={Style.heroDiv}>
        <img className={Style.iconWd} src={IconWD} alt="" />
        <div>
          <div className={Style.heroDivA}>
            <a href="/">
              <img src={IconViewAllSer} alt="" />
            </a>
          </div>
          <h1 className={`${Style.heroH1} ${Style.heroH1Solution}`}>
            Solution
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
