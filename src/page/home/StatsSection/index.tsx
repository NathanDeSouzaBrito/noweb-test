import IconStatsSection from "../../../assets/icons/iconStatsSection.svg";
import IconStatsSection2 from "../../../assets/icons/iconStatsSection2.svg";
import bgStatsSection from "../../../assets/imgs/bgStatsSection.png";

const StatsSection = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col p-8">
        <img
          className="hidden md:block"
          src={IconStatsSection}
          alt="Icon Stats"
        />
        <img
          className="block md:hidden md:m-8"
          src={IconStatsSection2}
          alt=""
        />
      </div>
      <br />
      <br />
      <br />
      <div className="flex items-center justify-center p-8 md:h-auto flex-col ">
        <img src={bgStatsSection} alt="" />
      </div>
    </section>
  );
};

export default StatsSection;
