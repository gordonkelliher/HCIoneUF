import { Component, Input, OnInit } from "@angular/core";
import { Course } from "src/models/course";
import { MyCoursesComponent } from "src/components/my-courses/my-courses.component";


@Component({
  providers:[MyCoursesComponent ],
  selector: "course-listings",
  templateUrl: "./course-listings.component.html",
  styleUrls: ["./course-listings.component.scss"]
})
export class CourseListingsComponent implements OnInit {
  @Input() private course: Course;
  @Input() private major: string;
  // This is a hack to make campusFunction() work
  @Input() private panelNumber: number;

  private isInMajor: string;
  private count: number;
  private sectionNumber: number;

  constructor(private comp: MyCoursesComponent) {
  }

  ngOnInit() {
    this.count = 0;
    let isInMajor =
      "Yes. This course is part of the " + this.major + " Major Coursework.";
    let isNotInMajor =
      "No. This course is not part of the " + this.major + " Major Coursework.";
    //checks if the current major is in the majors list for the course
    this.isInMajor =
      this.course.majors.find(value => {
        return value === this.major;
      }) !== undefined
        ? isInMajor
        : isNotInMajor;
  }

  addClass() {
    alert("Enrolled in section " + this.sectionNumber + "!" );
    this.comp.checkCourses();

  }
  removeClass() {
    alert("Successfully removed from section " + this.sectionNumber + "!" );
    this.comp.checkCourses();
  }
}
