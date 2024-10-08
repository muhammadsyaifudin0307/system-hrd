import './ChartLokasi.css'
const ChartLokasi = () => {
  const data = [
    { label: 'Pc', value1: 40, value2: 60 },
    { label: 'Lk', value1: 20, value2: 80 },
    { label: 'Lkb', value1: 50, value2: 50 },
    { label: 'Ks', value1: 30, value2: 70 },
    { label: 'Br', value1: 70, value2: 30 },
    { label: 'Sdy', value1: 60, value2: 40 },
    { label: 'Blm', value1: 40, value2: 60 },
  ];

  return (
    <div className="absensi-chart-container">
      <div className="row justify-content-center h-100">
        {data.map((item, index) => (
          <div className="col-auto text-center px-1" key={index}>
            <div className="bar-container mx-1">
              <div
                className="bar"
                style={{
                  height: `${item.value1}%`,
                  backgroundColor: 'black',
                }}
              ></div>
              <div
                className="bar"
                style={{
                  height: `${item.value2}%`,
                  backgroundColor: 'lightgray',
                }}
              ></div>
            </div>
            <div className="label mt-2">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartLokasi;
