import Style from "./style.module.css";
import IconShape from "../../../assets/icons/iconShape.svg";
import Image1 from "../../../assets/imgs/imgProjects1.png";
import Image2 from "../../../assets/imgs/imgProjects2.png";
import Image3 from "../../../assets/imgs/imgProjects3.png";
import Image4 from "../../../assets/imgs/imgProjects4.png";
import IconContact from "../../../assets/icons/iconContactUs.svg";

const ProjectsSection = () => {
  return (
    <section>
      {/* Column 1 */}
      <div>
        <div>
          <div>
            <img src={IconShape} alt="Icone Shape" />
            <h4>What Sets Us Apart</h4>
          </div>
          <h1>
            What Sets Us Apart Driving Digital Success <br />
            with Strategy Design
          </h1>
          <p>
            We believe that the surest measure of success is when our partners
            with <br />
            us more than half It's more than just the visuals.
          </p>
        </div>
        <div>
          <img src={Image1} alt="Imagen" />
        </div>
      </div>

      {/* Column 2 */}
      <div>
        <div>
          <img src={Image2} alt="Imagen" />
        </div>
        <div>
          <p>
            Conduct thorough market research to <br />
            the fast target audience behaviours. <br />
            Submit as many design tasks
          </p>
          <button>
            <img src={IconContact} alt="Contact Us" />
          </button>
        </div>
      </div>

      {/* Column 3 */}
      <div>
        <div>
          <p>
            We believe that the surest measure of success <br />
            is when our partners with us more than half <br />
            It's more than just the visuals. We're here to <br />
            support your growth.
          </p>
          <p>
            We believe that the surest measure of success <br />
            is when our partners with us more than half <br />
            It's more than just the visuals.
          </p>
        </div>
        <div>
          <div>
            <h3>Our Mission</h3>
            <p>
              Conduct thorough market research to the fast <br />
              target audience behaviours.
            </p>
          </div>
          <div>
            <div>
              <img src={Image3} alt="" />
              <p>
                Marketing <br />
                Strategy
              </p>
            </div>
            <div>
              <img src={Image4} alt="" />
              <p>
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
