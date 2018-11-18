import { Component, Input, OnInit } from "@angular/core";
import { Course } from "src/models/course";

@Component({
  selector: "course-listings",
  templateUrl: "./course-listings.component.html",
  styleUrls: ["./course-listings.component.scss"]
})
export class CourseListingsComponent implements OnInit {
  @Input() course: Course;
  @Input() major: string;
  // This is a hack to make campusFunction() work
  @Input() panelNumber: number;

  isInMajor: string;

  constructor() {}

  ngOnInit() {
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
}
