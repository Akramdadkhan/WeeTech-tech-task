import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import { IoMdAddCircleOutline } from "react-icons/io";
import styled from "styled-components/macro";
import "./App.css";
import data from "./mock-data.json";
import EditDeviceData from "./components/EditDeviceData";
import ReadonlyDeviceData from "./components/ReadOnlyDeviceData";
import { AddButton, ParentDiv, TableHead } from "./style/style";
import Popup from "./components/Popup";

function App() {
  const [devices, setDevices] = useState(data)
  console.log("devices", devices);
  const [show, setShow] = useState(false)
  const [checked, setChecked] = React.useState(true);
  const [addDeviceData, setAddDeviceData] = useState({
    deviceName: "",
    miles: "",
    type: [],
  });

  const [editDevicesData, setEditDevicseData] = useState({
    deviceName: "",
    miles: "",
    type: [],
  });

  const [editDeviceId, setEditDeviceId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addDeviceData };
    newFormData[fieldName] = fieldValue;

    setAddDeviceData(newFormData);
  };

  const handleEditFormChange = (event) => {
    console.log("inEvent", event);
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editDevicesData };
    newFormData[fieldName] = fieldValue;

    setEditDevicseData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newDevices = {
      id: nanoid(),
      deviceName: addDeviceData.deviceName,
      miles: addDeviceData.miles,
      type: addDeviceData.type,

    };

    const newDevicess = [...devices, newDevices];
    setDevices(newDevicess);
    setShow(false)
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editDeviceId,
      deviceName: editDevicesData.deviceName,
      miles: editDevicesData.miles,
      type: editDevicesData.type,
    };

    const newDevices = [...devices];

    const index = devices.findIndex((device) => device.id === editDeviceId);

    newDevices[index] = editedContact;

    setDevices(newDevices);
    setEditDeviceId(null);
  };

  const handleEditClick = (event, deviceData) => {
    event.preventDefault();
    setEditDeviceId(deviceData.id);

    const formValues = {
      deviceName: deviceData.deviceName,
      miles: deviceData.miles,
      type: deviceData.type,
    };

    setEditDevicseData(formValues);
  };

  const handleCancelClick = () => {
    setEditDeviceId(null);
  };

  const handleDeleteClick = (deviceId) => {
    const newDevices = [...devices];

    const index = devices.findIndex((device) => device.id === deviceId);

    newDevices.splice(index, 1);

    setDevices(newDevices);
  };

  return (
    <ParentDiv >
      <form onSubmit={handleEditFormSubmit}>
        <TableHead>
          <thead

          >
            <tr>
              <th>Device Name</th>
              <th>Miles</th>
              <th>Type</th>
              <th>Enabled</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((deviceData) => (
              <Fragment>
                {editDeviceId === deviceData.id ? (
                  <EditDeviceData
                    setChecked={setChecked}
                    checked={checked}
                    editDevicesData={editDevicesData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadonlyDeviceData
                    setChecked={setChecked}
                    checked={checked}
                    deviceData={deviceData}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>

        </TableHead>
        <AddButton
          onClick={() => {
            setShow(true)
          }}
        >
          <IoMdAddCircleOutline />
        </AddButton>
      </form>
      <Popup
        setShow={setShow}
        show={show}
        handleAddFormSubmit={handleAddFormSubmit}
        handleAddFormChange={handleAddFormChange}
        devices={devices}
      />
    </ParentDiv>
  );
}

export default App;
