export interface Course {
  number: string;
  name: string;
  credits: number;
  description: string;
  prerequisites: string[];
  majors: string[];
  equivalence: string;
  prereqEquivalence: string[];



  sections: {
    number: string;
    enrolled: boolean;
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
