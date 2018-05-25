export class Employee {
  constructor(
    public empNo: number,
    public empName: string,
    public Salary: number,
    public DeptName: string,
    public Designation: string
  ) {}
}

export const Departments: string[] = ["IT", "HRD", "Accounts", "Sales"];

export const Designation: string[] = ["Manager", "Lead", "Director"];

export class EmployeeOperation {
  emp: Employee;
  emps: Array<Employee>;
  constructor() {
    this.emp = new Employee(0, "", 0, "", "");
    this.emps = new Array<Employee>();
    this.addEmployee();
  }

  addEmployee(): void {
    this.emps.push(new Employee(1001, "Udhaya", 20000, "IT", "Manager"));
    this.emps.push(new Employee(1002, "Hema", 20000, "Sales", "Manager"));
    this.emps.push(new Employee(1003, "Mano", 20000, "HRD", "Director"));
    this.emps.push(new Employee(1004, "Mena", 20000, "Accounts", "Director"));
    this.emps.push(new Employee(1005, "Kishore", 20000, "IT", "Lead"));
  }

  getEmployees(): Array<Employee> {
    return this.emps;
  }

  saveEmployee(e: Employee): Array<Employee> {
    if (this.emps.filter(x => x.empNo == e.empNo).length > 0) {
      let index = this.emps.find(x => x.empNo == e.empNo);
      for (const i in this.emps) {
          if (this.emps.hasOwnProperty(i)) {
              const element = this.emps[i];
              if(element.empNo == e.empNo)
              {
                  element.empName = e.empName;
                  element.Salary = e.Salary;
                  element.DeptName = e.DeptName;
                  element.Designation =e.Designation;
              }
          }
      }
    } else {
      this.emps.push(e);
    }
    return this.emps;
  }
}
