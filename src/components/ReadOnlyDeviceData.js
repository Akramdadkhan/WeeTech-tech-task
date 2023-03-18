import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { TD } from "../style/style";
const ReadonlyDeviceData = ({
  deviceData,
  handleEditClick,
  handleDeleteClick,
}) => {
  console.log("something", deviceData.type);
  return (
    <tr>
      <TD>{deviceData.deviceName}</TD>
      <TD>{deviceData.miles}</TD>
      <TD>
        <select name="type" id="type" disabled="true">
          {deviceData.type.map((val) => (
            <option value={val.id}>{val.type}</option>
          ))}
        </select>
      </TD>
      <TD>
        <input type="checkbox" readOnly="true" />
      </TD>
      <TD>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, deviceData)}
        >
          <BiEdit />
        </button>
        <button type="button" onClick={() => handleDeleteClick(deviceData.id)}>
          <MdOutlineDelete />
        </button>
      </TD>
    </tr>
  );
};

export default ReadonlyDeviceData;
