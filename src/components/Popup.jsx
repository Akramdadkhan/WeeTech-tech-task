import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { MdSave } from "react-icons/md";
import Form from "react-bootstrap/Form";
import data from "../mock-data.json";
const Popup = ({
    show,
    setShow,
    handleAddFormChange,
    handleAddFormSubmit,

}) => {
    const [devices, setDevices] = React.useState(data)
    console.log("isdata", devices);
    return (
        <div>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Device</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleAddFormSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Device Name</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Enter Device Name"
                                autoFocus
                                onChange={handleAddFormChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Miles</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                placeholder="Enter Miles"
                                autoFocus
                                onChange={handleAddFormChange}
                            />
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </div>
    );
};

export default Popup;
