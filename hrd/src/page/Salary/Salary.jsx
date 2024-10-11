import { useState } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import InputSalary from "../../component/salary input/InputSalary";
import SlipSalary from "../../component/salary slip/SlipSalary";
import './Salary.css'

const Salary = () => {
  const [activeTab, setActiveTab] = useState("input-salary");
  return (
    <Container className="mt-5">
       <div className='title-salary' >
        <h1 className='d-inline-block border-bottom border-2 border-black pb-1' >Salary</h1>
        </div>
      <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="mt-3">
        <Tab eventKey="input-salary" title="Input Gaji">
        <InputSalary />
        </Tab>
        <Tab eventKey="slip-salary" title="Slip Gaji">
          <SlipSalary />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Salary;
