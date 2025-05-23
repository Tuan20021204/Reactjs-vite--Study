import { useEffect, useState } from "react";
import { Input, notification, Modal } from 'antd';
import {  updateUserApi } from "../../services/api.service";

const UpdateUserModal = (props) => {
    const [fullName, setFullName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id);
            setFullName(dataUpdate.fullName);
            setPhone(dataUpdate.phone);
        }
    }, [dataUpdate])

    const handleSubmitButton = async () => {

        const res = await updateUserApi(id, fullName, phone);
        if (res.data) {
            notification.success({
                message: "Updated user",
                description: "Update user thanh cong"
            })
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "Error update user",
                description: JSON.stringify(res.message)
            })
        }
    }
    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false)
        setFullName("");
        setId("");
        setPhone("");
        setDataUpdate(null);
    }

    return (
        <Modal
            title="Update User"
            open={isModalUpdateOpen}
            onOk={() => handleSubmitButton()}
            onCancel={() => resetAndCloseModal()}
            maskClosable={false}
            okText={"SAVE"}
        >
            <div>
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}></div>
                <div>
                    <span>Id</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div>

                <div>
                    <span>Full Name</span>
                    <Input
                        value={fullName}
                        onChange={(event) => { setFullName(event.target.value) }}
                    />
                </div>
                
                <div>
                    <span>Phone Number</span>
                    <Input
                        value={phone}
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                </div>
            </div>
        </Modal>

    )
}
export default UpdateUserModal;