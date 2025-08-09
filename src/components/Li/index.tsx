import Style from "./style.module.css";

type LiProps = {
  text: string;
  icon?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  title: string;
  href: string;
};
const Li = ({ text, icon, title, href }: LiProps) => {
  return (
    <li>
      <button className="flex flex-row">
        <a className={Style.liText} href={href} title={title}>
          {text}
        </a>
        {icon && <img className="cursor-pointer" src={icon} alt="Down Arrow" />}
      </button>
    </li>
  );
};

export default Li;
