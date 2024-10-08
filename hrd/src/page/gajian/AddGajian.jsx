// AddGajian.js
import { Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AddGajian = ({ resetFormState }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic untuk menambahkan atau mengedit data gaji
        console.log("Form Submitted");
        // Tambahkan logika untuk mereset form state jika perlu
        resetFormState();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formJobTitle">
                <Form.Label>Jabatan</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Jabatan" required />
            </Form.Group>
            <Form.Group controlId="formType">
                <Form.Label>Tipe</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Tipe" required />
            </Form.Group>
            <Form.Group controlId="formSalary">
                <Form.Label>Gaji Karyawan</Form.Label>
                <Form.Control type="number" placeholder="Masukkan Gaji Karyawan" required />
            </Form.Group>
            <Form.Group controlId="formOvertimeSalary">
                <Form.Label>Gaji Lembur</Form.Label>
                <Form.Control type="number" placeholder="Masukkan Gaji Lembur" required />
            </Form.Group>
            <Form.Group controlId="formStartDate">
                <Form.Label>Tanggal Mulai</Form.Label>
                <Form.Control type="date" required />
            </Form.Group>
            <Form.Group controlId="formEndDate">
                <Form.Label>Tanggal Akhir</Form.Label>
                <Form.Control type="date" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Simpan
            </Button>
        </Form>
    );
};

// Validasi props
AddGajian.propTypes = {
    resetFormState: PropTypes.func.isRequired,
};

export default AddGajian;
