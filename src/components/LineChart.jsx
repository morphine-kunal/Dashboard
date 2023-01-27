import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/mockData";
import { mock } from "../data/water_qual_param_data_1000";
import { check, DataModel } from "../data/waterQualityDataModel";

const LineChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  check();
  console.log(DataModel);
  // console.log(mock.hits.hits[1]._source.timestamp);

  // const liveData = [];
  // const Data = () =>{
  //   for(const key in mock.hits.hits){
  //     liveData.push({
  //       id:key,
  //       timeStamp:mock.hits.hits[key]._source.timestamp,
  //       pH: mock.hits.hits[key]._source.pH
  //     }
  //     )
  //   };
  // }
  // Data();

  return (
    
      <ResponsiveLine
        data={DataModel}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: colors.grey[100],
              },
            },
            legend: {
              text: {
                fill: colors.grey[100],
              },
            },
            ticks: {
              line: {
                stroke: colors.grey[100],
                strokeWidth: 1,
              },
              text: {
                fill: colors.grey[100],
              },
            },
          },
          legends: {
            text: {
              fill: colors.grey[100],
            },
          },
          tooltip: {
            container: {
              color: colors.primary[500],
            },
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{
          type: "time",
          // Format must match how the date comes in :facepalm:
          // example "2020-02-20 17:17:51Z"
          format: "%Y-%m-%dT%H:%M:%SZ",
          precision: "hour",
        }}
        xFormat="time:%d-%m-%Y"
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        axisBottom={{
          format: "%H:%M",
          // tickValues: "every 2 days",
          tickRotation: -90,
          // legend: "time scale",
          legendOffset: -12,
        }}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: 'category10' }}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
  
  );
};
export default LineChart;
