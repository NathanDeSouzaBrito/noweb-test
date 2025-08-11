import type { HowWorksCardProps } from "./index.type";
import Style from "./style.module.css";

const Card = ({ title, description, icon }: HowWorksCardProps) => {
  return (
    <section className={Style.cardHWW}>
      <div>
        <img src={icon} alt="Icon" />
      </div>
      <div>
        <h4 className={Style.cardTitleHWW}>{title}</h4>
      </div>
      <div className={Style.cardDescriptionHWW}>
        <p className={Style.pHWW}>{description}</p>
      </div>
    </section>
  );
};

export default Card;
