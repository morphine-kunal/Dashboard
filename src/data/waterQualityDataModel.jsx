import { mock } from "../data/water_qual_param_data_1000";



export const phDataModel = () => {
  const dropDown = 50;
  const DataModel = [
    {
      id: "pH",
      data: [],
    },
  ];

  for (let i = 0; i <= dropDown; i++) {
    let temp = {};
    temp["x"] = mock.hits.hits[i]._source.timestamp;
    temp["y"] = mock.hits.hits[i]._source.pH;
    DataModel[0].data.push(temp);
    // console.log(temp);
  }
  return(DataModel);
};
