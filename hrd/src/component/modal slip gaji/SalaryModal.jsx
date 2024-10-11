import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types'; // Tambahkan prop-types untuk validasi

const SalaryModalSlip = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header>
                <Modal.Title>Potongan Gaji dan Bonus</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formPotonganGaji">
                        <Form.Label>Potongan Gaji</Form.Label>
                        <Form.Control type="number" placeholder="Masukkan potongan gaji" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBonus">
                        <Form.Label>Bonus</Form.Label>
                        <Form.Control type="number" placeholder="Masukkan bonus" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

// Validasi prop types
SalaryModalSlip.propTypes = {
    show: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default SalaryModalSlip;
