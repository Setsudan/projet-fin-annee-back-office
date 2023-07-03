import { ReactComponentElement } from "react";

export interface NavItem {
  name: string;
  icon: ReactComponentElement<any>;
  type: "dropdown" | "link";
  link?: string;
  items?: NavItem[];
}
