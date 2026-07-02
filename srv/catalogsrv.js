const cds = require('@sap/cds');
const { UPDATE } = require('@sap/cds/lib/ql/cds-ql');
// const { data } = require('@sap/cds/lib/dbs/cds-deploy');
// const { INSERT } = require('@sap/cds/lib/ql/cds-ql');
const {employeeData} = cds.entities;


module.exports = srv =>{
    const db = cds.db;
    // srv.on('READ', 'empbioSet', async (req, res) => {
    //     // console.log("request data:=", req.data);
    //     // console.log("request query:=", req.query);
    //     // console.log("request params:=", req.params);
    //     // console.log("req.query =", JSON.stringify(req.query, null, 2));
    //     let empId = req.query.SELECT.where[2].val;
    //     // console.log("empId =", empId);
    //     results = [];
    //     results = await db.run ([
    //         SELECT.from(employeeData).where({employeeId : empId})
    //     ]);
    //     return results;
    // });

    //before create hook to validate the employeeId before creating the record
    srv.before('CREATE', 'empbioSet', req =>{
        if(req.data.employeeId < 1000){
            req.error(400, "Employee ID should be greater than 1000");
        }
    })

    srv.on('CREATE', 'empbioSet', async (req, res) => {
        data = [];
        console.log("request data:=", req.data);
        // let empId = req.query.SELECT.where[2].val;
        data = await db.run([
            INSERT.into(employeeData).entries(req.data)
            // UPDATE(employeeData).set(req.data).where({employeeId :empId})
        ]).then((resolve, rejeect)=>{
            if(resolve){
                console.log("Data Posted Successfully");
                return req.data;
            }else{
                console.log("Error When Posting The Data"+""+400);
            }
        })
        .catch(error=>{
            console.log("Error When Posting The Data"+""+500);
            return req.error("Error When Posting The Data"+""+500+""+error.toString());
        })
        return data;
    });

    // after update hook to log the updated data
    srv.after('UPDATE', 'empbioSet', data=>{
        console.log(`Data Updated Successfully:-${data.employeeId}`);
    })
};