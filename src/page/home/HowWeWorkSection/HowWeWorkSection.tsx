import IconShape from "../../../assets/icons/iconShape.svg";
import Card from "../../../components/CardHowWeWork";
import Icon1 from "../../../assets/icons/iconRocket.svg";
import Icon2 from "../../../assets/icons/iconPen.svg";
import Icon3 from "../../../assets/icons/iconRepeat.svg";

const HowWeWork = () => {
  return (
    <section>
      <div>
        <div>
          <img src={IconShape} alt="" />
          <h3>Workflow</h3>
        </div>
        <h1>How we work</h1>
      </div>
      <div className="flex justify-center items-center">
        <Card
          title="Research and Strategy"
          description="We conduct thorough research to understand your needs and develop a tailored strategy."
          icon={Icon1}
        />
        <Card
          title="Plan Customization"
          description="We conduct thorough research to understand your needs and develop a tailored strategy."
          icon={Icon2}
        />
        <Card
          title="Finished & User Testing"
          description="We conduct thorough research to understand your needs and develop a tailored strategy."
          icon={Icon3}
        />
      </div>
    </section>
  );
};

export default HowWeWork;
