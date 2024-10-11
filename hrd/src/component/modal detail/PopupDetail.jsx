import { Modal, Row, Col, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FiPhone } from "react-icons/fi";
import { TbUserCircle } from "react-icons/tb";
import { RiMapPinLine } from "react-icons/ri";
import './PopupDetail.css';

const PopupDetail = ({ employeeData, closePopup }) => {
    return (
    <Modal show onHide={closePopup} centered size="xl" dialogClassName='modal-dialog'>
    <Modal.Header className='modal-header d-flex align-items-center'>
        <TbUserCircle className='text-light ms-3' style={{ fontSize: '100px' }} />
        
        <div className='ms-4'>
            <h4 className='mb-1'>{employeeData.name}</h4>
            <p className='mb-0'>
                {employeeData.birthDate} ({employeeData.age}) | {employeeData.gender} | NIK: {employeeData.nik} |
                <FiPhone className='ms-1' /> {employeeData.phone}
            </p>
            <p className='mb-1'>
                <RiMapPinLine className='mb-1' /> {employeeData.address}
            </p>
        </div>

        {/* Right Section */}
        <div className="ms-auto right-section text-center text-dark">
            <Row>
                {/* First Column with the border */}
                <Col md={6} className="col-divider">
                    <div className="detail-item">
                        <strong>Pendidikan:</strong>
                        <span>{employeeData.education}</span>
                    </div>
                </Col>

                {/* Second Column without the border */}
                <Col md={6} className="no-padding-left">
                    <div className="detail-item">
                        <strong>Jabatan:</strong>
                        <span>{employeeData.jobTitle} ({employeeData.jobDetails})</span>
                    </div>
                </Col>
            </Row>
        </div>
    </Modal.Header>

    <Modal.Body className="modal-body">
        <Container>
            <Row>
                <Col md={12}>
                    <h5 className="mt-2">Details</h5>
                    <Row className="border rounded-2">
                        <Col md={6} className="p-3 border-end">
                            <Row>
                                <Col md={4}>
                                    <p><strong>Awal Kontrak:</strong></p>
                                    <p>{employeeData.contractStart}</p>
                                </Col>
                                <Col md={4}>
                                    <p><strong>Akhir Kontrak:</strong></p>
                                    <p>{employeeData.contractEnd}</p>
                                </Col>
                                <Col md={4}>
                                    <p><strong>KJP:</strong></p>
                                    <p>{employeeData.kjp}</p>
                                </Col>
                                <Col md={4}>
                                    <p><strong>Mulai Kerja:</strong></p>
                                    <p>{employeeData.workStart}</p>
                                </Col>

                                <Col md={4}>
                                    <p><strong>Akhir Kerja:</strong></p>
                                    <p>{employeeData.workEnd}</p>
                                </Col>
                                
                                <Col md={4}>
                                    <p><strong>Kode Bag:</strong></p>
                                    <p>{employeeData.kodeBag}</p>
                                </Col>
                            </Row>
                        </Col>
   
                        <Col md={6} className='p-3'>
                            <Row>
                                <Col md={3}>
                                    <p><strong>Status:</strong></p>
                                    <p>{employeeData.maritalStatus}</p>
                                </Col>
                                <Col md={3} className='border-end'>
                                    <p><strong>Jenis:</strong></p>
                                    <p>{employeeData.contractDetails}</p>
                                </Col>
                                <Col md={3}>
                                    <p><strong>Kontrak Ke:</strong></p>
                                    <p>{employeeData.contractNumber}</p>
                                </Col>
                                <Col md={3}>
                                    <p><strong>Bpjs:</strong></p>
                                    <p>{employeeData.bpjs}</p>
                                </Col>
                                <hr />
                                <Col md={4}>
                                    <p><strong>Status Kontrak:</strong></p>
                                    <p>{employeeData.contractStatus}</p>
                                </Col>
                                <Col md={4}>
                                    <p><strong>NIK KTP:</strong></p>
                                    <p>{employeeData.nik}</p>
                                </Col>
                                <Col md={4}>
                                    <p><strong>Keterangan Kontrak:</strong></p>
                                    <p>{employeeData.contractDetails}</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Modal.Body>
</Modal>

    );
};

PopupDetail.propTypes = {
    employeeData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        birthDate: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        nik: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        education: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        jobDetails: PropTypes.string.isRequired,
        contractStart: PropTypes.string.isRequired,
        contractEnd: PropTypes.string.isRequired,
        maritalStatus: PropTypes.string.isRequired,
        contractNumber: PropTypes.string.isRequired,
        bpjs: PropTypes.string.isRequired,
        workStart: PropTypes.string.isRequired,
        workEnd: PropTypes.string.isRequired,
        contractStatus: PropTypes.string.isRequired,
        contractDetails: PropTypes.string.isRequired,
        kjp: PropTypes.string.isRequired, // Tambahkan ini
        kodeBag: PropTypes.string.isRequired, // Tambahkan ini        }),
        
    }).isRequired,
    closePopup: PropTypes.func.isRequired,
};

export default PopupDetail;
