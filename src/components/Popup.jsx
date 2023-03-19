import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { MdSave } from "react-icons/md";
import Form from "react-bootstrap/Form";
const Popup = ({
    show,
    setShow,
    handleAddFormChange,
    handleAddFormSubmit,
    devices
}) => {
    console.log("devicesss", devices);
    const Options = ({ elem }) => {
        const newItems = elem.type.filter((val, index) => {
            return elem.type.indexOf(val) === index
        })
        console.log("newItems", newItems);
        return (
            <>
                {newItems.map((val) => (
                    <option name="type" id={val.id} value={val.type}>{val.type}</option>
                ))}
            </>
        );
    }
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
                                name="deviceName"
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
                                name="miles"
                                placeholder="Enter Miles"
                                autoFocus
                                onChange={handleAddFormChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>type</Form.Label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Select</option>
                                {devices?.map((elem) => (
                                    <Options elem={elem} />
                                ))}
                            </select>
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
