import IconStatsSection from "../../../assets/icons/iconStatsSection.svg";
import bgStatsSection from "../../../assets/imgs/bgStatsSection.png";

const StatsSection = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center p-8 h-[700px]">
        <img className="" src={IconStatsSection} alt="Icon Stats" />
      </div>
      <div className="flex items-center justify-center p-8 h-[700px] flex-col gap-8">
        <img src={bgStatsSection} alt="" />
      </div>
    </section>
  );
};

export default StatsSection;
