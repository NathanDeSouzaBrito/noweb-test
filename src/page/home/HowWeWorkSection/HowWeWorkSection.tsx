import IconShape from "../../../assets/icons/iconShape.svg";
import Card from "../../../components/CardHowWeWork";
import Icon1 from "../../../assets/icons/iconRocket.svg";
import Icon2 from "../../../assets/icons/iconPen.svg";
import Icon3 from "../../../assets/icons/iconRepeat.svg";

const HowWeWork = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 min-h-[630px] mt-8">
      <div>
        <div className="flex flex-row justify-center items-center gap-2">
          <img src={IconShape} alt="Icon" className="w-6 h-6 sm:w-8 sm:h-8" />
          <h3 className="font-[Plus_Jakarta_Sans] font-bold text-sm sm:text-base leading-[26px] capitalize flex items-center sm:mt-10">
            Workflow
          </h3>
        </div>
        <h1 className="font-[Marcellus] font-normal text-3xl sm:text-4xl lg:text-[54px] leading-snug lg:leading-[64px] capitalize text-center">
          How we work
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
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
