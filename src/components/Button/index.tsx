import Icon from "../../assets/icons/iconButtton.svg";

const Button = () => {
  return (
    <button className="w-[180px] h-[50px] bg-[#BFF747] flex items-center justify-center hover:bg-[#A8D33B] cursor-pointer">
      <img src={Icon} alt="" />
    </button>
  );
};

export default Button;
