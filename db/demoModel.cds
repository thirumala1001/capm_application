using {db.trainingModel.trainingData} from './trainingModel';
using {db.payrollModel.payrollData, db.payrollModel.payslipData} from './payrollModel';
namespace db.demoModel;

entity employeeData {
    key referenceid : UUID;
    key employeeId: Integer; //UUID
    firstName: String(100);
    lastName: String(100);
    email: String(100);
    phoneNumber: String(20);
    joinDate: Date;
    jobId: String(10);
    salary: Decimal(10, 2);
    // commissionPct: Decimal(5, 2);
    managerId: Integer;
    departmentId: Integer;
    maritalStatus : Boolean;
    familyMember_details : Association to many FamilyMembers on familyMember_details.ItemempId = $self.employeeId;
    employee_address : Composition of many EmployeeAddress on employee_address.empcom = $self;
    training_details : Composition of many trainingData on training_details.employee = $self;
    payroll_details : Composition of  many payrollData on payroll_details.employeeId = $self;
    payslip_details : Composition of many payslipData on payslip_details.empId = $self;
}

entity FamilyMembers {
    key refid : UUID;
    ItemempId : Integer;
    familyMemberName : String(100);
    familyMemberRelation : String(50);
    familyMemberAge : Integer;
}

entity EmployeeAddress {
    key empAdressId : UUID;
    // empId : Integer;
    addressType : String(25);
    empHouseNo: String(10);
    empStreet : String(100);
    empcity : String(25);
    empstate : String(25);
    empCountry : String(25);
    empzipcode : String(6);
    empcom : Association to employeeData;
}