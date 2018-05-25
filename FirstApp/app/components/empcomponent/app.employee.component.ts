import { Component, OnInit } from "@angular/core";
import {
  Employee,
  EmployeeOperation,
  Departments,
  Designation
} from "./app.employee.model";

@Component({
  selector: "app-emp-component",
  templateUrl: "./app.employee.view.html"
})
export class EmployeeComponent implements OnInit {
  emp: Employee;
  emps: Array<Employee>;
  empOp: EmployeeOperation;
  depts = Departments;
  desigs = Designation;
  tableHeaders: Array<string>;
  isChecked:Boolean;

  constructor() {
    this.emp = new Employee(0, "", 0, "", "");
    this.emps = new Array<Employee>();
    this.empOp = new EmployeeOperation();
    this.tableHeaders = new Array<string>();
    this.isChecked = false;
  }

  // This method will be called immediately after constructor
  // This method is used to perform all these operations which if we write in ctor
  // may delay ctor execution and hech component will be delayed
  // This is Angular Component Lifecycle method
  ngOnInit(): void {
    this.emps = this.empOp.getEmployees();
    for (let p in this.emp) {
      this.tableHeaders.push(p);
    }
  }

  clear(): void {
    this.emp = new Employee(0, "", 0, "", "");
  }

  save(): void {
    this.emps = this.empOp.saveEmployee(this.emp);
  }

  getSelectedItem(e: Employee): void {
    //this.emp = e;
    this.emp = Object.assign({}, e);
  }

  isAllChecked():void{

  }

  checkAll(e:Employee):void{
    
  }
}
