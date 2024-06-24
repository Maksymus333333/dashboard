import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios'; 
import Chart from 'chart.js/auto';

interface AdData {
  date: string;
  value: number;
}

interface AdDashboardProps {
  width?: number;
  height?: number;
}

const AdDashboard: React.FC<AdDashboardProps> = ({ width = 400, height = 300 }) => {
  const [data, setData] = useState<AdData[]>([]);
  const [chartInstance, setChartInstance] = useState<any>(null);
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    axios.get('/api/ads', { timeout: 10000 })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the ad data!', error);
      });
  }, []);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    if (chartRef.current && data.length > 0) {
      const newChartInstance = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: data.map(ad => ad.date),
          datasets: [
            {
              label: 'Ad Data',
              data: data.map(ad => ad.value),
              fill: false,
              backgroundColor: 'rgba(75,192,192,1)',
              borderColor: 'rgba(75,192,192,1)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          aspectRatio: width / height,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
        },
      });

      setChartInstance(newChartInstance);
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data, width, height]);

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }}>
      <h2>Ad Dashboard</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default AdDashboard;
