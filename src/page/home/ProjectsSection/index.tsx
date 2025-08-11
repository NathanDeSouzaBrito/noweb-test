import Style from "./style.module.css";
import IconShape from "../../../assets/icons/iconShape.svg";
import Image1 from "../../../assets/imgs/imgProjects1.png";
import Image2 from "../../../assets/imgs/imgProjects2.png";
import Image3 from "../../../assets/imgs/imgProjects3.png";
import Image4 from "../../../assets/imgs/imgProjects4.png";
import IconContact from "../../../assets/icons/iconContactUs.svg";

const ProjectsSection = () => {
  return (
    <section className={Style.sectionProjects}>
      {/* Column 1 */}
      <div className={Style.divColumn1}>
        <div className={Style.subDivColumn1}>
          <div className={Style.divH4}>
            <img src={IconShape} alt="Icone Shape" />
            <h4 className={Style.projectsH4}>What Sets Us Apart</h4>
          </div>
          <h1 className={Style.projectsH1}>
            Driving Digital Success <br />
            with Strategy Design
          </h1>
          <p className={Style.projectsP}>
            We believe that the surest measure of success is when our partners
            with <br />
            us more than half It's more than just the visuals.
          </p>
        </div>
        <div>
          <img className={Style.image1} src={Image1} alt="Imagen" />
        </div>
      </div>

      {/* Column 2 */}
      <div className={Style.divColumn2}>
        <div className={Style.subDivColumn2}>
          <img className={Style.image2} src={Image2} alt="Imagen" />
        </div>
        <div>
          <p className={Style.projectsP}>
            Conduct thorough market research to <br />
            the fast target audience behaviours. <br />
            Submit as many design tasks
          </p>
          <button>
            <img
              className={Style.iconContact}
              src={IconContact}
              alt="Contact Us"
            />
          </button>
        </div>
      </div>

      {/* Column 3 */}
      <div className={Style.divColumn3}>
        <div className={Style.subDivColumn3}>
          <p className={Style.projectsP}>
            We believe that the surest measure of success <br />
            is when our partners with us more than half <br />
            It's more than just the visuals. We're here to <br />
            support your growth.
          </p>
          <br />
          <p className={Style.projectsP}>
            We believe that the surest measure of success <br />
            is when our partners with us more than half <br />
            It's more than just the visuals.
          </p>
        </div>
        <div>
          <div>
            <h3 className={Style.projectsH3}>Our Mission</h3>
            <p className={Style.projectsP}>
              Conduct thorough market research to the fast <br />
              target audience behaviours.
            </p>
          </div>
          <div className={Style.projectsCards}>
            <div className={Style.card1}>
              <img className={Style.image3} src={Image3} alt="" />
              <p className={Style.pCard}>
                Marketing <br />
                Strategy
              </p>
            </div>
            <div className={Style.card2}>
              <img className={Style.image4} src={Image4} alt="" />
              <p className={Style.pCard}>
                UX/UI <br />
                Solution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
