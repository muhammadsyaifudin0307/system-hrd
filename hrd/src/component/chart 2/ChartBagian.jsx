import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartBagian = () => {
  const data = {
    labels: ['Pk', 'Prd', 'Tkn', 'Kdl', 'Pn', 'Pck', 'Stp', 'Cdl'],
    datasets: [
      {
        label: 'Bagian Chart',
        backgroundColor: ['#888888', '#444444', '#222222', '#111111', '#333333', '#000000', '#666666', '#999999'],
        borderRadius:3.5,
        barThickness: 16,
        data: [50, 75, 60, 90, 55, 80, 65, 70],
      },
    ],
  };

  const options = {
    responsive: true,
    devicePixelRatio: 1, // Meningkatkan resolusi canvas untuk tampilan HD
    maintainAspectRatio: false, // Flexibilitas ukuran chart
    plugins: {
      legend: {
        labels: {
          color: '#000',
          font: {
            weight:'bold',
            size: 8, // Label lebih besar
          },
        },
        position: 'top',
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            weight:'bold',
            size: 10, // Teks sumbu X lebih besar
          },
        },
        grid: {
          display: false, // Hilangkan garis di belakang pada sumbu X
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 10, // Teks sumbu Y lebih besar
          },
        },
        grid: {
          display: false, // Hilangkan garis di belakang pada sumbu X
        },
      },
    },
  };

  return (
    <div className="container" style={{ maxWidth: '600px', maxHeight: '300px', margin: '0 auto' }}>
      <Bar data={data} options={options} width={600} height={200} />
    </div>
  );
};

export default ChartBagian;
