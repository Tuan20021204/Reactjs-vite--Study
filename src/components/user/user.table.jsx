import { Popconfirm, Table, notification } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import DetailUser from './detail.user';
import { deleteUserApi } from '../../services/api.service';


const UserTable = (props) => {
  const { dataUsers, loadUser } = props;

  const [dataUpdate, setDataUpdate] = useState(null);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)

  const [dataDetail, setDataDetail] = useState(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const columns = [
    {
      title: 'Id',
      dataIndex: '_id',
      render: (_, record) => (
        <>
          <a href='#' onClick={() => { setDataDetail(record); setIsDetailOpen(true) }}> {record._id}</a>

        </>
      ),
    },
    {
      title: 'Full name',
      dataIndex: 'fullName',

    },
    {
      title: 'Email',
      dataIndex: 'email',

    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            onClick={() => {
              setDataUpdate(record)
              setIsModalUpdateOpen(true)
            }
            }
            style={{ cursor: "pointer", color: "orange" }} />
          <Popconfirm
            title="Delete user"
            description="Are you sure to delete user"
            onConfirm={() => handleDeleteButton(record._id)}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>

        </div>
      ),

    },

  ];

  const handleDeleteButton = async (id) => {
    const res = await deleteUserApi(id);
    if (res.data) {
      notification.success({
        message: "Deleted user",
        description: "Xoa user thanh cong"
      })
      await loadUser();

    } else {
      notification.error({
        message: "Error delete user",
        description: JSON.stringify(res.message)
      })
    }
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
      />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <DetailUser
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
      />

    </>

  )
}
export default UserTable;