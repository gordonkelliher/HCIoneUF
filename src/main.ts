import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { CourseListingsModule } from "./modules/course-listings/course-listings.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(CourseListingsModule)
  .catch(err => console.error(err));
