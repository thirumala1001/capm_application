using {db.payrollModel as mypayScaleData} from '../db/payrollModel';

service payrollsrv {
    entity empSalSet as projection on mypayScaleData.payrollData;
    entity empPayslipSet as projection on mypayScaleData.payslipData;
}