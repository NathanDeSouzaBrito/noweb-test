type ServiceCardProps = {
  category: string;
  title: string;
  description: string;
  icon?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  alt: string;
  iconArrow?: React.ImgHTMLAttributes<HTMLImageElement>["src"];
  Color?: string;
};

export type { ServiceCardProps };
