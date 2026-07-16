const cds = require('@sap/cds');
// const { SELECT } = require('@sap/cds/lib/ql/cds-ql');
// const { results } = require('@sap/cds/lib/utils/cds-utils');
// const { UPDATE } = require('@sap/cds/lib/ql/cds-ql');
// const { data } = require('@sap/cds/lib/dbs/cds-deploy');
// const { INSERT } = require('@sap/cds/lib/ql/cds-ql');
const {employeeData} = cds.entities;


module.exports = srv =>{
    const db = cds.db;
    // srv.before('READ', 'empbioSet', req =>{
    //     console.log("request data:=", req.user.id);
    //     console.log("request query:=", req.user.roles);
    //     console.log("request params:=", req.user.attr);
    //     // console.log("req.query =", JSON.stringify(req.query, null, 2));
    // });
    // srv.on('READ', 'empbioSet', async (req, res) => {
    //     // console.log("request data:=", req.data);
    //     // console.log("request query:=", req.query);
    //     // console.log("request params:=", req.params);
    //     // console.log("req.query =", JSON.stringify(req.query, null, 2));  
    //     // let empId = req.query.SELECT.where[2].val;
    //     results = [];
    //     // results = await db.run ([
    //     //     SELECT.from(employeeData) //.where({employeeId : empId})
    //     // ]);
    //     results = await db.run (SELECT.from(employeeData));
    //     return results;
    // });

    // to get the employee data using employeeId and also assosiation data
    // srv.on('READ','empbioSet', async (req, res)=>{
    //     results = [];
    //     results = await db.run([
    //         //here we can use columns('*') to the get all the columns from the employeeData entity
    //         SELECT.from(employeeData).columns(e =>{
    //             e.employeeId,
    //             e.firstName,
    //             e.lastName,
    //             e.email,
    //             e.phoneNumber,
    //             e.joinDate,
    //             e.jobId,
    //             e.salary,
    //             e.managerId,
    //             e.departmentId,
    //             e.maritalStatus,
    //             e.familyMember_details (f=>{
    //                 f.ItemempId,
    //                 f.familyMemberName,
    //                 f.familyMemberRelation,
    //                 f.familyMemberAge
    //             })
    //             //for multiple assosiation and composition we need to follow lik ethis
    //             // e.employee_address (eq =>{
    //             //     eq.addressType,
    //             //     eq.empHouseNo,
    //             //     eq.empStreet,
    //             //     eq.empcity,
    //             //     eq.empstate,
    //             //     eq.empCountry,
    //             //     eq.empzipcode
    //             // })
    //         }).where({employeeId :req.query.SELECT.where[2].val})
    //     ])
    //     console.log("results:=", results);
    //     return results;
    // })

    //before create hook to validate the employeeId before creating the record
    // srv.before('CREATE', 'empbioSet', req =>{
    //     if(req.data.employeeId < 1000){
    //         req.error(400, "Employee ID should be greater than 1000");
    //     }
    // })

    // srv.on('CREATE', 'empbioSet', async (req, res) => {
    //     data = [];
    //     console.log("request data:=", req.data);
    //     // let empId = req.query.SELECT.where[2].val;
    //     data = await db.run([
    //         INSERT.into(employeeData).entries(req.data)
    //         // UPDATE(employeeData).set(req.data).where({employeeId :empId})
    //     ]).then((resolve, rejeect)=>{
    //         if(resolve){
    //             console.log("Data Posted Successfully");
    //             return req.data;
    //         }else{
    //             console.log("Error When Posting The Data"+""+400);
    //         }
    //     })
    //     .catch(error=>{
    //         console.log("Error When Posting The Data"+""+500);
    //         return req.error("Error When Posting The Data"+""+500+""+error.toString());
    //     })
    //     return data;
    // });

    // after update hook to log the updated data
    // srv.after('UPDATE', 'empbioSet', data=>{
    //     console.log(`Data Updated Successfully:-${data.employeeId}`);
    // })
};