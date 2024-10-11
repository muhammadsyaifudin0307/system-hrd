import { useState } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import { CSSTransition } from "react-transition-group"; // Import CSSTransition
import Absensi from "../../component/input absensi/Absensi";
import RekapAbsensi from "../../component/rekap absensi/RekapAbsensi";
import './AbsensiEmployee.css';

function AbsensiEmployee() {
  const initialData = Array(10).fill({
    name: "AYUK RETNO WULAN",
    nik: "23456789",
    status: { masuk: false, izin: false, alpha: false, cuti: false },
  });

  const [employees, setEmployees] = useState(initialData);
  const [isEditable, setIsEditable] = useState(false);
  const [activeTab, setActiveTab] = useState("absensi");

  return (
    <Container className="mt-5">
      <div className="title-absensi">
        <h2 className='border-bottom border-2 border-black d-inline-block pb-1 mb-4'>Attendance</h2>
      </div>

      {/* Tabs for navigation */}
      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mb-3">
        <Tab eventKey="absensi" title="Absensi" />
        <Tab eventKey="rekap" title="Rekap Absensi" />
      </Tabs>

      {/* Content with transition effect */}
      <CSSTransition
        in={activeTab === "absensi"}
        timeout={300}
        classNames="tab-content"
        unmountOnExit
      >
        <div>
          {activeTab === "absensi" && (
            <Absensi
              employees={employees}
              setEmployees={setEmployees}
              isEditable={isEditable}
              setIsEditable={setIsEditable}
            />
          )}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeTab === "rekap"}
        timeout={300}
        classNames="tab-content"
        unmountOnExit
      >
        <div>
          {activeTab === "rekap" && (
            <RekapAbsensi employees={employees} />
          )}
        </div>
      </CSSTransition>
    </Container>
  );
}

export default AbsensiEmployee;
