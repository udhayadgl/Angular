import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidator } from "./app.employee.validation";
import {
  Employee,
  EmployeeOperation,
  Departments,
  Designation
} from "./app.employee.model";

@Component({
  selector: "app-empformvalidation-component",
  templateUrl: "./app.employee.view.html"
})
export class EmployeeFormValidatorComponent implements OnInit {
  emp: Employee;
  emps: Array<Employee>;
  empOp: EmployeeOperation;
  depts = Departments;
  desigs = Designation;
  tableHeaders: Array<string>;
  isChecked: Boolean;

  // form sample
  isSubmitted: boolean;
  frmGroup: FormGroup; // Form Group object to define Form Control Collection
  empNo: FormControl;
  empName: FormControl;
  salary: FormControl;
  deptName: FormControl;
  designation: FormControl;

  constructor() {
    this.emp = new Employee(0, "", 0, "", "");
    this.emps = new Array<Employee>();
    this.empOp = new EmployeeOperation();
    this.tableHeaders = new Array<string>();
    this.isChecked = false;

    this.isSubmitted = false;
    // create a FormGroup instance with Key/Value pairs for FormControl
    this.frmGroup = new FormGroup({
      EmpNo: new FormControl(
        this.emp.empNo,
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]+"),
          Validators.minLength(4),
          Validators.maxLength(6)
        ])
      ),
      EmpName: new FormControl(
        this.emp.empName,
        Validators.compose([
          Validators.required,
          Validators.pattern("[A-Za-z]+"),
          Validators.minLength(3),
          Validators.maxLength(16)
        ])
      ),
      Salary: new FormControl(
        this.emp.Salary,
        Validators.compose([CustomValidator.salaryValidator])
      ),
      Department: new FormControl(this.emp.DeptName, Validators.required),
      Designation: new FormControl(this.emp.Designation, Validators.required)
    });
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
    console.log("sdf");
    this.emps = this.empOp.saveEmployee(this.emp);
    this.isSubmitted = true;
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
    this.isSubmitted = false;
  }
}
