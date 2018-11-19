import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CourseListingsComponent } from "./components/course-listings/course-listings.component";
import { CoursesViewComponent } from './components/courses-view/courses-view.component';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';

@NgModule({
  declarations: [CourseListingsComponent, CoursesViewComponent, MyCoursesComponent],
  imports: [BrowserModule],
  bootstrap: [CoursesViewComponent, MyCoursesComponent]
})
export class AppModule { }
