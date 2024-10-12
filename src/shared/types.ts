export enum Pages {
  NewBook = "newbook",
  Lessons = "lessons",
  Featured = "featured",
  Videos = "videos",
  Newsletter = "newsletter",
  Inspiration = "inspiration",
}

export interface VideoImageType {
  src: string;
  title: string;
}

export interface InspirationType {
  src: string;
  title: string;
  text?: string;
  featured?: string;
  playButton?: boolean;
  avatar: string[];
}
