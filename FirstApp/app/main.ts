// 1 this is a bootstrap file for application.
// this will use @ngModule decorator for module class
import { NgModule } from "@angular/core";
// 1a. Import BrowserModule, to detect BrowserInstance
import { BrowserModule } from "@angular/platform-browser";
// 1b. Import platformBrowserDynamic to bootstrap module
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
// 1c. Import FormsModue for Two-Way Databinding
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// 1d. Import HttpModule to act as a platform for Http call
import { HttpModule } from "@angular/http";
// 2. Import component to declared in NgModule
import { SimpleComponent } from "./components/simplecomponent/app.simple.component";
import { EmployeeComponent } from "./components/empcomponent/app.employee.component";
import { EmployeeformComponent } from "./components/empformcomponent/app.employee.component";
import { EmployeeFormValidatorComponent } from "./components/empformvalidatorcomponent/app.employee.component";
import { EmployeeServiceComponent } from "./components/empservicecomponent/app.employee.component";
import { EmployeeService } from "./components/empservicecomponent/app.emp.service";
import { AppChildOneComponent } from "./components/EventEmitter/app.childone.component";
import { MyComponent } from "./app.component";
import { AppChildTwoComponent } from "./components/EventEmitter/app.childtwo.component";
import { AppParentComponent } from "./components/EventEmitter/app.parent.component";
import { ParentComponent } from "./components/viewchildcomponent/app.parent.component";
import { ChildComponent } from "./components/viewchildcomponent/app.child.component";
import { MainComponent } from "./components/routing/app.main.component";
import { HomeComponent } from "./components/routing/app.home.component";
import { AboutComponent } from "./components/routing/app.about.component";
import { ContactComponent } from "./components/routing/app.contact.component";
import { routing } from "./components/routing/app.route.table";

// ngModule Properties
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    MyComponent,
    SimpleComponent,
    EmployeeComponent,
    EmployeeformComponent,
    EmployeeFormValidatorComponent,
    EmployeeServiceComponent,
    AppParentComponent,
    AppChildOneComponent,
    AppChildTwoComponent,
    ParentComponent,
    ChildComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  providers: [EmployeeService],
  bootstrap: [MainComponent]
})
export class AppModule {}

// 3. Bootstrap AppModule
platformBrowserDynamic().bootstrapModule(AppModule);
