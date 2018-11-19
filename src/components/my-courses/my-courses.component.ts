import { Component, OnInit } from "@angular/core";
import { Course } from "src/models/course";

@Component({
  selector: "my-courses",
  templateUrl: "./my-courses.component.html",
  styleUrls: ["./my-courses.component.scss"]
})
export class MyCoursesComponent implements OnInit {

  private courses: Course[] = [];
  public filteredCourses: Course[] = [];


  constructor() {}

  ngOnInit() {
    this.filteredCourses = [];
  }

  public checkCourses() {
    // this.filteredCourses = [];
    //
    // this.courses.forEach(course => {
    //     course.sections.forEach(section => {
    //       if (section.enrolled) {
    //         this.filteredCourses.push(course);
    //       }
    //     });
    // });
  }
}
