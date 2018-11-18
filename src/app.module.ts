import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CourseListingsComponent } from "./components/course-listings/course-listings.component";
import { CoursesViewComponent } from './components/courses-view/courses-view.component';

@NgModule({
  declarations: [CourseListingsComponent, CoursesViewComponent],
  imports: [BrowserModule],
  bootstrap: [CoursesViewComponent]
})
export class AppModule {}
