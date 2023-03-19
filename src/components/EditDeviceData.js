import React from "react";
import { MdCancel, MdSave } from "react-icons/md";
import { TD } from "../style/style";

const EditDeviceData = ({
    editDevicesData,
    handleEditFormChange,
    handleCancelClick,
}) => {
    const [checked, setChecked] = React.useState(true);
    console.log("whatsInName", editDevicesData?.deviceName);
    return (
        <tr>
            <TD>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter Device Name..."
                    name="deviceName"
                    value={editDevicesData.deviceName}
                    onChange={handleEditFormChange}

                />
            </TD>
            <TD>
                <input
                    type="text"
                    required="required"
                    placeholder="Enter Miles..."
                    name="miles"
                    value={editDevicesData.miles}
                    onChange={handleEditFormChange}

                />
            </TD>
            <TD>
                <select name="type" id="type" >
                    {editDevicesData?.type?.map((val) => (
                        <option value={val.id}>{val.type}</option>
                    ))}
                </select>
            </TD>
            <TD>
                <input name="checkBox" type="checkbox"
                    defaultChecked={checked}
                    onChange={() => setChecked(!checked)}
                />
            </TD>
            <TD>
                <button type="submit"> <MdSave /></button>
                <button type="button" onClick={handleCancelClick}>
                    <MdCancel />
                </button>
            </TD>
        </tr>
    );
};

export default EditDeviceData;
