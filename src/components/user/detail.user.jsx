import { Drawer } from "antd";

const DetailUser = (props) => {
    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen
    } = props;
    return (
        <Drawer
            width={"60vw"}
            title="UserDetail "
            onClose={() => { setDataDetail(null); setIsDetailOpen(false) }}
            open={isDetailOpen}
        >
            {dataDetail ? <>
                <p>Id: {dataDetail._id}</p>
                <br />
                <p>Full name: {dataDetail.fullName}</p>
                <br />
                <p>Email: {dataDetail.email}</p>
                <br />
                <p>Phone number: {dataDetail.phone}</p>
                <br />
                <p>Avatar:</p>
                <div>
                    <img height={250} width={300}
                    src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`}  />
                </div>
                <div>
                    <label htmlFor="btnUpload"style={{
                        display: "block",
                        width: "fit-content",
                        marginTop: "15px",
                        padding: "5px 10px",
                        background: "blue",
                        borderRadius: "5px",
                        cursor: "pointer",
                        color: "white"
                    }}>Upload Avatar</label>
                    <input type="file" hidden id="btnUpload"/>
                </div>
                {/* <button type="primary">Upload Avatar</button> */}
            </>
                :
                <>
                    <p>Khong co du lieu</p>
                </>
            }
        </Drawer>
    )
}
export default DetailUser;