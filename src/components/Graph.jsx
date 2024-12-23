import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Line } from "react-chartjs-2";
import { fetchGraph } from "../redux/graphSlice";

const Graph = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.graph);

  useEffect(() => {
    // Dispatch the action to fetch graph data
    dispatch(fetchGraph());
  }, [dispatch]);

  // Chart data preparation
  const chartData = data
    ? {
        labels: [
          "Data Date",
          "Fapan Data Date",
          "SMA Data Date",
          "SPI Data Date"
        ],
        datasets: [
          {
            label: "Drought Data Overview",
            data: [
              data.data_date,
              data.fapan_data_date,
              data.sma_data_date,
              data.spi_data_date
            ],
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.2)",
            borderWidth: 2,
            tension: 0.4,
          },
        ],
      }
    : null;

  // Handle loading and error states
  if (loading) return <p>Loading graph...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="rounded-lg shadow-lg p-4">
      <h2 className="text-center font-bold mb-4">Drought Data Visualization</h2>
      {chartData ? (
        <Line
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "top",
              },
              title: {
                display: true,
                text: "Drought Data Over Time",
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Dates",
                },
              },
            },
          }}
        />
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Graph;
