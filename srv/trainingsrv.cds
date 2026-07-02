using {db.trainingModel as my_trainingData} from '../db/trainingModel';

service trainingsrv {
    entity empTrainingSet as projection on my_trainingData.trainingData;
}