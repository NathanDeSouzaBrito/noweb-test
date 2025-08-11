import Style from "./style.module.css";
import IconLine from "../../../assets/icons/iconLineFooter.svg";
import IconFace from "../../../assets/icons/iconFacebook.svg";
import IconInsta from "../../../assets/icons/iconInstagram.svg";
import IconX from "../../../assets/icons/iconTwitter.svg";
import IconBehance from "../../../assets/icons/iconBehance.svg";

const Footer = () => {
  return (
    <footer className={Style.footer}>
      <div className={Style.divLinksFooter}>
        <div className={`${Style.divA} ${Style.divAR}`}>
          <a href="/">About Company</a>
          <a href="/">Our Careers</a>
          <a href="/">Services</a>
          <a href="/">contact</a>
        </div>
        <div className={`${Style.divA} ${Style.divAL}`}>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
        </div>
      </div>
      <img className={Style.footerLine} src={IconLine} alt="Icon Line" />
      <div className={`${Style.divLinksFooter} ${Style.divLinksFooterDown}`}>
        <div className={Style.divLinksSocial}>
          <a href="">
            <img src={IconFace} alt="Facebook" />
          </a>
          <a href="">
            <img src={IconX} alt="Twitter" />
          </a>
          <a href="">
            <img src={IconInsta} alt="Instagram" />
          </a>
          <a href="">
            <img src={IconBehance} alt="Behance" />
          </a>
        </div>
        <div>
          <p className={Style.footerP}>
            Copyright © 2025 Nex. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
