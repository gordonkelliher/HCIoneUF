import { Component, OnInit } from "@angular/core";

interface Course {
  number: string;
  name: string;
  credits: number;
  description: string;
  prerequisites: string[];
  majors: string[];

  sections: [
    {
      number: string;
      instructor: {
        name: string;
        infoLink: string;
        reviewsLink: string;
      };
      syllabusLink: string;
      times: [
        {
          days: string[];
          begin: string;
          end: string;
          location: string;
        }
      ];
    }
  ];
}

@Component({
  selector: "app-course-listings",
  templateUrl: "./course-listings.component.html",
  styleUrls: ["./course-listings.component.scss"]
})
export class CourseListingsComponent implements OnInit {
  course: Course;
  major: string;
  isInMajor;

  constructor() {
    this.major = "Computer Science";
    this.course = {
      number: "CEN4721",
      name: "Human-Computer Interaction",
      credits: 3,
      description: "Description goes here",
      prerequisites: ["COP3530", "another prereq"],
      majors: ["Computer Science"],

      sections: [
        {
          number: "12344",
          instructor: {
            name: "Jaime Ruiz",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["M", "W", "F"],
              begin: "10:40 AM",
              end: "11:30 PM",
              location: "CSE E119"
            }
          ]
        }
      ]
    };
    let isInMajor =
      "Yes. This course is part of a " + this.major + " Major Coursework.";
    let isNotInMajor =
      "No. This course is not part of a " + this.major + " Major Coursework.";
    //checks if the current major is in the majors list for the course
    this.isInMajor =
      this.course.majors.find(value => {
        return value === this.major;
      }) !== undefined
        ? isInMajor
        : isNotInMajor;
  }

  ngOnInit() {}
}
