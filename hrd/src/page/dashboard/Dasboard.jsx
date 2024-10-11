import { Container, Row, Col, Card } from 'react-bootstrap';
import { AiFillPlusCircle } from 'react-icons/ai';
import './Dasboard.css';
import ChartLokasi from '../../component/chart/ChartLokasi';
import ChartBagian from '../../component/chart 2/ChartBagian';

const DashboardEmployee = () => {
  return (
    <Container fluid className='px-5'>
      <Row className='justify-content-start my-5'>
        <Col lg={5} className='d-flex flex-column justify-content-center align-items-start'>
          <div className='ms-4 position-relative hrd-title fs-5'>
            HRD Program
            <div className='border-line'></div>
          </div>
          <div className='title-dashboard mb-3 ms-4'>Employee StarFood <br />Data</div>
          <div className='d-flex align-items-center mb-3 ms-4 fs-5 fw-bolder other-button'>
            <AiFillPlusCircle className='me-2 fs-2' aria-hidden="true" />
            <span>Explore Case Study</span>
          </div>
        </Col>
        <Col lg={7}>
          <Row className='g-4 mb-4'>
            <Col lg={6}>
              <Card className='shadow-sm text-center p-3 no-border-radius mt-custom custom-card card-bagian'>
                <Card.Body className='p-2'>
                  <div className='line'></div>
                  <Card.Title className='card-title fs-5 fw-bold'>
                    Data Karyawan<br />Per Bagian
                  </Card.Title>
                  <Row>
                    <Col>
                      <ul className='list text-start'>
                        <li>Pk : Potong Kepala</li>
                        <li>Prd : Produksi</li>
                        <li>Tkn : Teknisi</li>
                        <li>Kdl : Kantor dan Lab</li>
                      </ul>
                    </Col>
                    <Col>
                      <ul className='list text-start'>
                        <li>Pn : Penerimaan</li>
                        <li>Pck : Packing</li>
                        <li>Stp : Satpam</li>
                        <li>Cdl : CS dan Limbah</li>
                      </ul>
                    </Col>
                  </Row>
                  <div className='chart-placeholder mt-2' style={{ maxHeight: '200px' }}>
                    <ChartBagian />
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={6}>
              <Card className='shadow-sm text-center p-3 no-border-radius mb-4 custom-card card-lokasi'>
                <Card.Body className='p-2'>
                  <div className='line'></div>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Card.Title className='text-start fs-5 fw-bold'>Data Karyawan Menurut Lokasi <br /> Tinggal</Card.Title>
                    <p className='mb-0 ms-2 text-center'>
                      <span className='total-text d-block'>Total</span>
                      <span className='display-6 total fs-2'>388</span>
                    </p>

                  </div>
                  <Row>
                    <Col>
                      <ul className='list text-start'>
                        <li>Pc : Paciran</li>
                        <li>Lk : Luar Kecamatan</li>
                        <li>Lab : Luar Kabupaten</li>
                      </ul>
                    </Col>
                    <Col>
                      <ul className='list text-start'>
                        <li>Ks : Kandang S</li>
                        <li>Br : Brondong</li>
                        <li>Sdy : Sedayulawas</li>
                      </ul>
                    </Col>
                  </Row>
                  <div className='chart-placeholder mt-4' style={{ maxHeight: '200px' }}>
                    <ChartLokasi />
                  </div>
                </Card.Body>
              </Card>

              <Card className='shadow-sm text-center p-2 no-border-radius custom-card card-total'>
                <Card.Body>
                  <div className='line'></div>
                  <div className='d-flex justify-content-between align-items-center'>
                    <Card.Title className='text-start mb-0 fs-5 fw-bold'>Total Karyawan <br /> PT StarFood International</Card.Title>
                    <p className='display-6 mb-0 total fs-2'>500</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardEmployee;