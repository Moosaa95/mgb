declare global {
    interface ProjectCard {
      id: number;
      title: string;
      description: string;
      src: string;
      link?: string;
    }
  
    interface ProjectProps {
      title?: string;
      projectItems: ProjectCard[];
    }
    interface ServiceProps {
        title: string;
        description: string;
        icon: string;
        link: string;
        id: number;
    }
  }

export {};