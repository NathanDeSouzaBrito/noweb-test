import type { MouseEventHandler } from "react";
import IconSearch from "../../assets/icons/iconsearch.svg";

const Header = (props: {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <button
      onClick={props.onClick}
      className="h-[50px] w-[50px] flex items-center justify-center cursor-pointer hover:bg-gray-100 border border-gray-300 md:ml-2"
      aria-haspopup="dialog"
    >
      <img src={IconSearch} alt="" />
    </button>
  );
};

export default Header;
