export interface Course {
  number: string;
  name: string;
  credits: number;
  description: string;
  prerequisites: string[];
  majors: string[];

  sections: {
    number: string;
    students: string;
    instructor: {
      name: string;
      infoLink: string;
      reviewsLink: string;
    };
    syllabusLink: string;
    times: {
      days: string[];
      begin: string;
      end: string;
      location: string;
    }[];
  }[];
}
