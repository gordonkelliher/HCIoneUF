import { Component, Input, OnInit } from "@angular/core";
import { Course } from "src/models/course";

@Component({
  selector: "my-courses",
  templateUrl: "./my-courses.component.html",
  styleUrls: ["./my-courses.component.scss"]
})
export class MyCoursesComponent implements OnInit {

  // private courses: Course[] = [];
  @Input() private courses: Course[];
  public filteredCourses: Course[] = [];


  constructor() { }

  ngOnInit() {
    this.filteredCourses = [];
  }

  public checkCourses() {
    // for (var i = 0; i < this.courses.length; i++) {
      // alert("WAT");

      // var course = this.courses[i];
      // alert(course.name);
      // for (var j = 0; j < course.sections; j++) {

        // this.selection.push(this.studentList[i].id);
        // console.log(this.selection);
      // }
    // }
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
