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
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  major: string;

  constructor() {
    this.major = "Computer Science";
    this.courses.push({
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
