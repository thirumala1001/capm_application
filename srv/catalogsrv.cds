using {db.demoModel as myModel} from '../db/demoModel';

service employeesrv {

    entity empbioSet         as projection on myModel.employeeData;
    entity FamilyMembersSet  as projection on myModel.FamilyMembers;
    entity EmployeeAdressSet as projection on myModel.EmployeeAddress;
}

annotate employeesrv.empbioSet with @(
    UI :{
        SelectionFields:[
            employeeId, 
            phoneNumber, 
            joinDate, 
            ], 
            LineItem:[
                {$Type:'UI.DataField', Value:employeeId}, 
                {$Type:'UI.DataField', Value:firstName}, 
                {$Type:'UI.DataField', Value:lastName}, 
                {$Type:'UI.DataField', Value:email}, 
                {$Type:'UI.DataField', Value:phoneNumber}, 
                {$Type:'UI.DataField', Value:joinDate}, 
                {$Type:'UI.DataField', Value:jobId}, 
                {$Type:'UI.DataField', Value:salary}, 
                {$Type:'UI.DataField', Value:managerId}, 
                {$Type:'UI.DataField', Value:departmentId}, 
                {$Type:'UI.DataField', Value:maritalStatus}
                ]
    }
);
