using {db.demoModel.employeeData} from './demoModel';

namespace db.trainingModel;

entity trainingData {
    key trainingId        : UUID;
        employee             : Association to employeeData;
        trainingName      : String(100);
        trainingProvider  : String(100);
        trainingStartDate : Date;
        trainingEndDate   : Date;
        trainingStatus    : String(20);
}
