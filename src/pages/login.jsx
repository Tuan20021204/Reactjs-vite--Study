import { Button, Form, Input, notification, Row, Col, Divider } from "antd"
import { loginApi } from "../services/api.service"
import { Link, useNavigate } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useContext,useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    const onFinish = async (values) => {
        setLoading(true);
        const res = await loginApi(values.email, values.password);
        if (res.data) {
            notification.success({
                message: "User Login",
                description: "Dang nhap thanh cong"

            })
            setUser(res.data.user);
            localStorage.setItem("access_token", res.data.access_token);
            navigate("/");
        } else {
            notification.error({
                message: "User Login",
                description: JSON.stringify(res.message)
            })
        }
        setLoading(false);
    };

    return (
        <Row justify={"center"} style={{ marginTop: "30px" }}>
            <Col xs={24} md={16} lg={8} >
                <fieldset
                    style={{
                        padding: "10px",
                        margin: "5px ",
                        borderRadius: "5px",
                        border: "1px solid #ccc"
                    }}>
                    <legend style={{ fontSize: "20px", fontWeight: "bold" }}>Đăng nhập</legend>

                    <Form
                        form={form}
                        layout="vertical"
                        name="basic"
                        onFinish={onFinish}
                        style={{ margin: "10px" }}
                    // onFinishFailed={onFinishFailed} 

                    >

                        <Form.Item

                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Email!'
                                },
                                {
                                    type: 'email',
                                    message: 'Email khong dung dinh dang!'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item

                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!'
                                }
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>



                        <div style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center"
                        }}>
                            <Button
                                loading={loading}
                                onClick={() => form.submit()}
                                type="primary"> Login </Button>
                            <Link to={"/"}>Go to Homepage <ArrowRightOutlined />
                            </Link>
                        </div>

                    </Form >
                    <Divider />
                    <div style={{ textAlign: "center" }}>Chua co tai khoan ? <Link to={"/register"}>Dang ky tai day</Link></div>
                </fieldset>
            </Col>
        </Row>
    )
}
export default LoginPage;