export interface NavItem {
  name: string;
  icon: React.JSX.Element;
  type: 'dropdown' | 'link';
  link?: string;
  items?: NavItem[];
}

export interface InavData {
  'student': NavItem[];
  'teach': NavItem[];
  'regisseur': NavItem[];
}