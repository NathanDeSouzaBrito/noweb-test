import errorTmplate from "../../assets/imgs/404ErrorTemplate.png";

const errorTemplate = () => {
  return (
    <div>
      <img src={errorTmplate} alt="Error 404 - Page Not Found" />
    </div>
  );
};

export default errorTemplate;
