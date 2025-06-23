export interface Project {
  title: string;
  year: string;
  description: string;
  technologies: string[];
}

export interface Experience {
  position: string;
  organization: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  details: string;
}

export interface Award {
  title: string;
  date: string;
  description?: string;
}

export interface Publication {
  title: string;
  conference: string;
  year: string;
  role: string;
}