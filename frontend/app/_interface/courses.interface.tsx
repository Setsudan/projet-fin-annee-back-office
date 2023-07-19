export interface Project {
  collectionId: string;
  collectionName: string;
  created: string;
  description: string; // Showed
  global_status: string; // Showed
  id: string;
  project_files: string[]; // Showed
  project_link: string; // Showed
  scope_status: string; // Showed
  tags: string[];	// Showed
  title: string; // Showed
  updated: string;
  expand: unknown;
}

export interface IParticipant {
	name: string | undefined;
	id: string;
}

export interface ICourse {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  participants: string[];
  related_project: string;
  teachers: string[];
  updated: string;
  expand: unknown;
}