import React from "react";

type LiProps = {
  text: string;
  icon?: string;
  title?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  active?: boolean;
};

export type { LiProps };
