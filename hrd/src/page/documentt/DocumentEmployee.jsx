import { Button, Form, Col, Row, Container, Card } from 'react-bootstrap';
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import './DocumentEmployee.css'; 
import { FaRegFileAlt } from "react-icons/fa";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { MdOutlineSaveAlt } from "react-icons/md";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { GoPencil } from "react-icons/go";

const DocumentEmployee = () => {
  return (
    <Container className="mt-5 document-container">
        <div className="title-document mb-3">
            <h1 className='border-bottom border-2 border-black d-inline-block pb-1'>Document</h1>
        </div>
      <Row className="form-document">
        <Col xs={12} sm={6} md={4}>
          <Card className="form-card w-100">
            <Card.Header className="form-header mb-2">
              <FaRegFileAlt className="icon-file" /> Form Surat Panggilan
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className='mb-2 ' controlId="nama">
                  <Form.Label className='mb-1'>Nama</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="pekerjaan">
                  <Form.Label className='mb-1'>Pekerjaan</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="hari">
                  <Form.Label className='mb-1'>Hari</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="tanggal">
                  <Form.Label className='mb-1'>Tanggal</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="keperluan">
                  <Form.Label className='mb-1'>Keperluan</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Form>
            </Card.Body>
            <Button variant="dark" type="submit" className="submit-btn">
              Submit
            </Button>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4} className="">
          <Card className="file-preview-card w-100">
            <Card.Header className="form-header ">
              <FaRegFileAlt className="icon-file" /> File Preview
            </Card.Header>
            <Card.Body className="text-center">
              <BsFileEarmarkPdfFill style={{ fontSize: '180px' }} className="icon-file mb-3 mt-3" />
              <br />
              <hr className='garis-pdf' />
              <div className='pre-view '>
                <div className="description-preview text-start">
                <h5 className="mt-3">Create Surat Panggilan dan Kontrak kerja Harian</h5>
                <p className='descrip-name'>Description: </p>
                <p>
                  Fitur Surat Panggilan dan Kontrak Kerja Harian memungkinkan HR untuk
                  mengisi data karyawan dan otomatis menghasilkan PDF untuk panggilan kerja atau
                  perjanjian kerja harian.
                  <br />
                 
                  <hr className='garis-pdf' />
                  <h4 className='arr-name'>
                    <span className='fs-3'><BsArrowLeftSquareFill  /></span>
                    <span className='ms-2'>Form Surat Panggilan</span>
                  </h4>
                  <h4 className='arr-name '>
                    <span className='fs-3'><BsArrowRightSquareFill/></span>
                    <span className='ms-2'>Form Surat Panggilan</span>
                  </h4>
                  </p>
                  </div>
                    <hr className='garis-pdf mb-2' />
                    <div className='button-save'>
                    <Row>
                        <Col xs={4} className="text-center">
                        <MdOutlineSaveAlt className='save-1 fs-3' />
                        </Col>
                        <Col xs={4} className="text-center">
                        <GoPencil className='edit-pen fs-3' />
                        </Col>
                        <Col xs={4} className="text-center">
                        <MdOutlineSaveAlt className='save-2 fs-3' />
                        </Col>
                    </Row>
                    <hr className='mb-1' />
                    </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} md={4}>
          <Card className="form-card w-100">
            <Card.Header className="form-kontrak mb-2">
              <FaRegFileAlt className="icon-file" /> Form Kontrak Kerja
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Label className='mb-3'>Yang bertanda tangan:</Form.Label>
                <Form.Group controlId="namaTandaTangan">
                  <Form.Label className='mb-1'>Nama</Form.Label>
                  <Form.Control className='mb-2' type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="jabatan">
                  <Form.Label className='mb-1'>Jabatan:</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="namaKaryawan">
                  <Form.Label className='mb-1'>Nama Karyawan:</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="jenisKelamin">
                  <Form.Label className='mb-1'>Jenis Kelamin:</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-2' controlId="tanggalLahir">
                  <Form.Label className='mb-1'>Tempat Tanggal Lahir:</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className='mb-3' controlId="alamat">
                  <Form.Label className='mb-1'>Alamat:</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Form>
            </Card.Body>
            <Button variant="dark" type="submit" className="submit-btn-2">
              Submit
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DocumentEmployee;
