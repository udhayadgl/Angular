// 1. The Routes and RouterModule for defining RouteTable
import { RouterModule, Routes } from "@angular/router";

// 1a. Import the "ModuleWithProvider" which will be used to register the route table in the root of app i.e. @NgModule
import { ModuleWithProviders } from "@angular/core";

// 2. Import all components those will be used in routing
import { HomeComponent } from "./app.home.component";
import { AboutComponent } from "./app.about.component";
import { ContactComponent } from "./app.contact.component";
import { EmployeeComponent } from "../empcomponent/app.employee.component";

// 3. Define the Route table
// path is the uri and component is the name of the component against the rei
export const routes:Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  {
    path: "contact",
    component: ContactComponent,
    children: [
      {
        path: "employee",
        component: EmployeeComponent
      }
    ]
  }
];

// 4. Use the ModuleWithProviders to register RouteModule
// with the "routes" table in root.
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
