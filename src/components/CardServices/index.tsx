import styles from "./style.module.css";
import type { ServiceCardProps } from "./index.type";

const ServiceCard = ({
  category,
  title,
  description,
  icon,
  alt,
  iconArrow,
  Color = "#E5E7EB",
}: ServiceCardProps) => {
  return (
    <div
      className={styles.card}
      style={{
        border: `1px solid ${Color}`,
      }}
    >
      <span className={styles.category}>{category}</span>
      <h2 className={styles.title}>{title}</h2>
      <img src={icon} alt={alt} className={styles.icon} />
      <p className={styles.description}>{description}</p>
      <div className={styles.arrow} style={{ backgroundColor: Color }}>
        {iconArrow && <img src={iconArrow} alt="Arrow Icon" />}
      </div>
    </div>
  );
};

export default ServiceCard;
