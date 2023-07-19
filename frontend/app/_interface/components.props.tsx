export interface HeroProps {
  image: string;
  children: React.ReactNode;
}

export interface LogData {
  title: string;
  date: string;
}

export interface LogsContainerProps {
  dataContent: LogData[];
}

export interface projectListProps {
  list: Array<{
    name: string;
    id: string;
  }>;
}

export interface ScrollInfoProps {
  dataContent: string[]; // Spécification du type de données pour 'dataContent'
}

