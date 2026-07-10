using employeesrv as service from '../../srv/catalogsrv';
annotate service.empbioSet with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'employeeId',
                Value : employeeId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'firstName',
                Value : firstName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'lastName',
                Value : lastName,
            },
            {
                $Type : 'UI.DataField',
                Label : 'email',
                Value : email,
            },
            {
                $Type : 'UI.DataField',
                Label : 'phoneNumber',
                Value : phoneNumber,
            },
            {
                $Type : 'UI.DataField',
                Label : 'joinDate',
                Value : joinDate,
            },
            {
                $Type : 'UI.DataField',
                Label : 'jobId',
                Value : jobId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'salary',
                Value : salary,
            },
            {
                $Type : 'UI.DataField',
                Label : 'managerId',
                Value : managerId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'departmentId',
                Value : departmentId,
            },
            {
                $Type : 'UI.DataField',
                Label : 'maritalStatus',
                Value : maritalStatus,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
);

