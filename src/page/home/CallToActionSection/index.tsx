import IconLetsTalk from "../../../assets/icons/iconLetsTalk.svg";
import Style from "./style.module.css";

const CallToAction = () => {
  return (
    <section className={Style.sectionCallToAction}>
      <div className={Style.divText}>
        <h1 className={Style.callToActionH1}>
          Let's Create <br />
          Something Great
        </h1>
        <p className={Style.callToActionP}>
          We shift you from today’s reality to tomorrow’s potential, ensuring
        </p>
      </div>
      <div className={Style.divLetsTalk}>
        <img src={IconLetsTalk} alt="Let's Talk" />
      </div>
    </section>
  );
};

export default CallToAction;
