import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { EmployeeService } from "./app.emp.service";
import { Response } from "@angular/http";
import {
  Employee,
  EmployeeOperation,
  Departments,
  Designation
} from "./app.employee.model";

@Component({
  selector: "app-empservice-component",
  templateUrl: "./app.employee.view.html"
})
export class EmployeeServiceComponent implements OnInit {
  emp: Employee;
  emps: Array<Employee>;
  empOp: EmployeeOperation;
  depts = Departments;
  desigs = Designation;
  tableHeaders: Array<string>;
  isChecked: Boolean;

  // form sample
  frmGroup: FormGroup; // Form Group object to define Form Control Collection

  constructor(private serv: EmployeeService) {
    this.emp = new Employee(0, "", 0, "", "");
    this.emps = new Array<Employee>();
    this.tableHeaders = new Array<string>();
    this.isChecked = false;

    // create a FormGroup instance with Key/Value pairs for FormControl
    this.frmGroup = new FormGroup({
      EmpNo: new FormControl(this.emp.EmpNo),
      EmpName: new FormControl(this.emp.EmpName),
      Salary: new FormControl(this.emp.Salary),
      Department: new FormControl(this.emp.DeptName),
      Designation: new FormControl(this.emp.Designation)
    });
  }

  // This method will be called immediately after constructor
  // This method is used to perform all these operations which if we write in ctor
  // may delay ctor execution and hech component will be delayed
  // This is Angular Component Lifecycle method
  ngOnInit(): void {
    for (let p in this.emp) {
      this.tableHeaders.push(p);
    }
    this.loadData();
  }

  private loadData(): void {
    this.serv.get().subscribe(
      (resp: Response) => {
        this.emps = resp.json();
      },
      (error: any) => {
        console.log(error.statusText);
      }
    );
  }

  clear(): void {
    this.emp = new Employee(0, "", 0, "", "");
  }

  save(): void {
    this.serv.post(this.emp).subscribe(
      (resp: Response) => {
        this.emps.push(this.emp);
      },
      (error: any) => {
        console.log(error.statusText);
      }
    );
  }

  update():void{
    this.serv.put(this.emp.EmpNo,this.emp).subscribe(
      (resp: Response) => {
        this.emps = resp.json();
      },
      (error: any) => {
        console.log(error.statusText);
      }
    );
  }

  getSelectedItem(e: Employee): void {
    //this.emp = e;
    this.emp = Object.assign({}, e);
  }

  isAllChecked(): void {}

  checkAll(e: Employee): void {}

  loadForm(): void {
    console.log("Load Form!!");
    this.emp = new Employee(0, "", 0, "", "");
  }
}
