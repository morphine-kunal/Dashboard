import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ResponsiveLine } from "@nivo/line";
import { phDataModel } from "../data/waterQualityDataModel";
import React from 'react';


const LineChart = ({ isDashboard = false }) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  let dataModel = phDataModel();
  console.log(dataModel);

  

  return (
      <ResponsiveLine
        data={dataModel}
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
          // precision: "minute",
        }}
        xFormat="time:%H:%M"
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
          // tickRotation: -90,
          // legend: "time scale",
          // legendOffset: -12,
        }}
        enableGridX={false}
        enableGridY={false}
        colors={colors.greenAccent[400]}
        pointSize={10}
        pointColor={colors.primary[400]}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        // pointBorderColor={{ from: 'serieColor' }}
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
