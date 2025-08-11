import Style from "./style.module.css";
import type { LiProps } from "./index.type";

const Li = ({
  text,
  icon,
  title,
  href = "#",
  onClick,
  active = false,
}: LiProps) => {
  return (
    <li className={Style.li}>
      <a
        href={href}
        title={title}
        className={`${Style.liText} ${active ? Style.active : ""}`}
        onClick={(e) => {
          if (onClick) onClick(e);
        }}
        aria-current={active ? "page" : undefined}
      >
        <span>{text}</span>
        {icon && (
          <img className={Style.icon} src={icon} alt="" aria-hidden="true" />
        )}
      </a>
    </li>
  );
};

export default Li;
