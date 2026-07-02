using {db.demoModel.employeeData} from '../db/demoModel';

namespace db.payrollModel;

entity payrollData {
    key salaryId    : UUID;
        employeeId  : Association to employeeData;
        basicSalary : Decimal(10, 2);
        hra         : Decimal(10, 2);
        allowance   : Decimal(10, 2);
        deductions  : Decimal(10, 2);
        netSalary   : Decimal(10, 2)
}

entity payslipData {
    key payslipId   : UUID;
        empId       : Association to employeeData;
        paysalaryId : UUID;
        // payDate  : Date;
        payMonth    : String(10);
        payYear     : Integer;
        payStatus   : String(10);
}
