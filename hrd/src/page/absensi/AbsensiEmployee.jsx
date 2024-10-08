import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Form, Button, Container, Tab, Tabs } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./AbsensiEmployee.css";

function AbsensiEmployee() {
  const initialData = Array(10).fill({
    name: "AYUK RETNO WULAN",
    nik: "23456789",
    status: { masuk: false, izin: false, alpha: false, cuti: false },
  });

  const [employees, setEmployees] = useState(initialData);
  const [isEditable, setIsEditable] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState("absensi");
  const [searchTerm, setSearchTerm] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const handleInputChange = (index, field) => {
    if (!isEditable) return;

    const newEmployees = employees.map((employee, i) =>
      i === index
        ? {
            ...employee,
            status: { masuk: false, izin: false, alpha: false, cuti: false, [field]: true },
          }
        : employee
    );
    setEmployees(newEmployees);
  };

  const handleSubmit = () => {
    setIsEditable(false);
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const dates = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <Container className="mt-5">
      <div className="title-absensi">
        <h1 className='border-bottom border-2 border-black d-inline-block pb-1'>Absensi</h1>
      </div>

      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mt-3">
        <Tab eventKey="absensi" title="Absensi">
          <CSSTransition
            key="absensi"
            timeout={500}
            classNames="slide"
          >
            <div className="tab-content active">
              <div className="controls d-flex justify-content-between align-items-center mt-2">
                <div className="col-md-6 d-flex align-items-center">
                  <label htmlFor="gender" className="form-label"></label>
                  <select className="form-select-gender me-2" id="gender">
                    <option value="laki-laki">Laki-laki</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                  <div className="date-picker-wrapper position-relative">
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd/MM/yyyy"
                      className="date-picker form-control-picker rounded-1 "
                      id="date-picker"
                    />
                    <IoCalendarNumberOutline className="calendar-icon" />
                  </div>
                </div>
                <div className="buttons d-flex justify-content-end align-items-center me-1">
                  <Button className="text-black bg-white border-1 border-black w-auto h-100" onClick={handleEdit}>Edit</Button>
                  <Button className="bg-black border-0 w-auto h-100" onClick={handleSubmit}>Submit</Button>
                </div>
              </div>

              <MDBTable align="middle" className="table-absensi mt-4">
                <MDBTableHead>
                  <tr>
                    <th>No</th>
                    <th>Nama Karyawan</th>
                    <th>Masuk</th>
                    <th>Izin</th>
                    <th>Alpha</th>
                    <th>Cuti</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {filteredEmployees.map((employee, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{employee.name}</td>
                      <td>
                        <input
                          type="radio"
                          name={`status-${index}`}
                          checked={employee.status.masuk}
                          onChange={() => handleInputChange(index, "masuk")}
                          disabled={!isEditable}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name={`status-${index}`}
                          checked={employee.status.izin}
                          onChange={() => handleInputChange(index, "izin")}
                          disabled={!isEditable}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name={`status-${index}`}
                          checked={employee.status.alpha}
                          onChange={() => handleInputChange(index, "alpha")}
                          disabled={!isEditable}
                        />
                      </td>
                      <td>
                        <input
                          type="radio"
                          name={`status-${index}`}
                          checked={employee.status.cuti}
                          onChange={() => handleInputChange(index, "cuti")}
                          disabled={!isEditable}
                        />
                      </td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </div>
          </CSSTransition>
        </Tab>

        <Tab eventKey="rekap" title="Rekap Absensi">
          <CSSTransition
            key="rekap"
            timeout={500}
            classNames="slide"
          >
            <div className="tab-content active ">
            <div className="d-flex justify-content-between align-items-center mt-2">
  <div className="d-flex align-items-center w-100">
    {/* Search and Select Category */}
    <div className="d-flex search-container">
      <CiSearch className="search-icon" />
      <Form.Control
        type="text"
        placeholder="Search Employee"
        className="search-absensi"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Form.Select className="categ-e" onChange={(e) => console.log(e.target.value)}>
        <option>Select Category</option>
        <option>Satpam</option>
        <option>Manager</option>
      </Form.Select>
    </div>

    {/* Select Year */}
    <Form.Select className="tahun-c" onChange={(e) => setYear(e.target.value)}>
      <option>Tahun</option>
      {[2022, 2023, 2024].map((y) => (
        <option key={y} value={y}>{y}</option>
      ))}
    </Form.Select>

    {/* Convert to PDF Button */}
    <Button className="button-pdf">Convert to PDF</Button>
  </div>
</div>

              <div className="bulan-bt">
                {['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'].map((monthName, index) => (
                  <Button
                    variant={month === index ? "primary" : "outline-secondary"}
                    className={`me-2 ${month === index ? 'active' : ''}`}
                    key={index}
                    onClick={() => setMonth(index)}
                  >
                    {monthName}
                  </Button>
                ))}
              </div>

              <TransitionGroup component={null}>
                <CSSTransition
                  key={month}
                  timeout={500}
                  classNames="slide"
                >
                  <div className="new-tab">
                    <h5 className="sa-tpam">Satpam</h5>
                    <MDBTable align="middle" className="table-bordered">
                      <MDBTableHead>
                        <tr>
                          <th>No</th>
                          <th>Tanggal</th>
                          <th>Nama Karyawan</th>
                          <th>Jabatan</th>
                          <th>NIK</th>
                          <th>Masuk</th>
                          <th>Izin</th>
                          <th>Absen</th>
                          <th>Cuti</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        {dates.map((date, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{`${date}/${month + 1}/${year}`}</td>
                            <td>AYUK RETNO WULAN</td>
                            <td>Satpam</td>
                            <td>23456789</td>
                            <td>25</td>
                            <td>2</td>
                            <td>0</td>
                            <td>0</td>
                          </tr>
                        ))}
                      </MDBTableBody>
                    </MDBTable>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </CSSTransition>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default AbsensiEmployee;
