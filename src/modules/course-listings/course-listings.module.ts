import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CourseListingsComponent } from "./course-listings.component";

@NgModule({
  declarations: [CourseListingsComponent],
  imports: [BrowserModule],
  bootstrap: [CourseListingsComponent]
})
export class CourseListingsModule {}
