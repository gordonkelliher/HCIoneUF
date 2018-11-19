import { Component, OnInit, Input } from "@angular/core";
import { Course } from "src/models/course";
import { Filter } from "src/models/filter";

@Component({
  selector: "courses-view",
  templateUrl: "./courses-view.component.html",
  styleUrls: ["./courses-view.component.scss"]
})
export class CoursesViewComponent implements OnInit {
  private filter: Filter;
  @Input("filter") set _filter(filter: Filter) {
    this.filter = filter;
    this.applyFilter();
  }
  private courses: Course[] = [];
  public filteredCourses: Course[] = [];
  public major: string;

  constructor() {
    this.major = "Computer Science";
    this.courses.push({
      number: "CEN4721",
      name: "Human-Computer Interaction",
      credits: 3,
      description: "Learn about how humans and computers interact on multiple levels.",
      prerequisites: ["COP3530"],
      majors: ["Computer Science"],

      sections: [
        {
          number: "12344",
          students:"",
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
              end: "11:30 AM",
              location: "CSE E119"
            }
          ]
        },
        {
          number: "12345",
          students:"",
          instructor: {
            name: "Jaime Ruiz",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["M", "W", "F"],
              begin: "11:40 AM",
              end: "12:30 PM",
              location: "CSE E119"
            }
          ]
        }
      ]
    });

    this.courses.push({
      number: "COP3502",
      name: "Programming Fundamentals 1",
      credits: 3,
      description: "Learn the core programming concepts.",
      prerequisites: ["None"],
      majors: ["Computer Science"],

      sections: [
        {
          number: "1234",
          students:"",
          instructor: {
            name: "Jeremiah Blanchard",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["M", "W", "F"],
              begin: "9:30 AM",
              end: "10:20 AM",
              location: "CSE E220"
            }
          ]
        },
        {
          number: "1235",
          students:"",
          instructor: {
            name: "Jeremiah Blanchard",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["M", "W", "F"],
              begin: "10:30 AM",
              end: "11:20 AM",
              location: "CSE E220"
            }
          ]
        }
      ]
    });

    this.courses.push({
      number: "COP3530",
      name: "Data Structures and Algorithms",
      credits: 3,
      description: "Study the basics of Data structures and algorithms",
      prerequisites: ["COP3504"],
      majors: ["Computer Science"],

      sections: [
        {
          number: "4567",
          students:"",
          instructor: {
            name: "Nick Sanches",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["T", "R"],
              begin: "11:40 AM",
              end: "12:30 PM",
              location: "CSE E229"
            }
          ]
        },
        {
          number: "4568",
          students:"",
          instructor: {
            name: "Nick Sanches",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["T", "R"],
              begin: "1:40 PM",
              end: "2:30 PM",
              location: "CSE E229"
            }
          ]
        }
      ]
    });

    this.courses.push({
      number: "COP4331",
      name: "Object-Oriented Programming",
      credits: 3,
      description: "Learn the basics of object oriented programming.",
      prerequisites: ["COP3530"],
      majors: ["Computer Science"],

      sections: [
        {
          number: "7894",
          students:"",
          instructor: {
            name: "Nate Mendez",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["M", "W", "F"],
              begin: "2:40 PM",
              end: "3:30 PM",
              location: "CSE E109"
            }
          ]
        },
        {
          number: "7895",
          students:"",
          instructor: {
            name: "Nate Mendez",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["M", "W", "F"],
              begin: "3:40 PM",
              end: "4:30 PM",
              location: "CSE E109"
            }
          ]
        }
      ]
    });

    this.courses.push({
      number: "COP4720",
      name: "Information and Database Systems 2",
      credits: 3,
      description: "Continue the exploration into the study of Info and Database Systems.",
      prerequisites: ["CIS4301", "COP3530"],
      majors: ["Computer Science"],

      sections: [
        {
          number: "1111",
          students:"",
          instructor: {
            name: "Nick Alfonzo",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["M", "W", "F"],
              begin: "8:00 PM",
              end: "8:50 PM",
              location: "CSE E219"
            }
          ]
        },
        {
          number: "1112",
          students:"",
          instructor: {
            name: "Nick Alfonzo",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["M", "W", "F"],
              begin: "9:00 PM",
              end: "9:50 PM",
              location: "CSE E219"
            }
          ]
        }
      ]
    });

    this.courses.push({
      number: "CDA3101",
      name: "Introduction to Computer Organization",
      credits: 3,
      description: "Learn the introduction of the organization of computing systems.",
      prerequisites: ["COP3504", "COP3503"],
      majors: ["Computer Science"],

      sections: [
        {
          number: "2222",
          students:"",
          instructor: {
            name: "Matthew Menendez",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["M", "W", "F"],
              begin: "6:00 PM",
              end: "6:50 PM",
              location: "CSE E217"
            }
          ]
        },
        {
          number: "2223",
          students:"",
          instructor: {
            name: "Matthew Menendez",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["M", "W", "F"],
              begin: "7:00 PM",
              end: "7:50 PM",
              location: "CSE E217"
            }
          ]
        }
      ]
    });

    this.courses.push({
      number: "COP4600",
      name: "Operating Systems",
      credits: 4,
      description: "Design and implement various Operating Systems components.",
      prerequisites: ["CDA3101", "COP3530"],
      majors: ["Computer Science"],

      sections: [
        {
          number: "3333",
          students:"",
          instructor: {
            name: "Jeremiah Blanchard",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["M", "W", "F"],
              begin: "4:00 PM",
              end: "4:50 PM",
              location: "CSE E119"
            }
          ]
        },
        {
          number: "3334",
          students:"",
          instructor: {
            name: "Jeremiah Blanchard",
            infoLink: "",
            reviewsLink: ""
          },
          syllabusLink: "",
          times: [
            {
              days: ["M", "W", "F"],
              begin: "5:00 PM",
              end: "5:50 PM",
              location: "CSE E119"
            }
          ]
        }
      ]
    });

  }

  ngOnInit() {
    this.applyFilter();
  }

  applyFilter(): void {
    this.filteredCourses = [];
    /* TODO: apply the filter to the courses array
     * In the case there is no filter specified it should be equal to courses
     */
    this.courses.forEach(course => {
      if (true)
        this.filteredCourses.push(course);
    });
  }
}
