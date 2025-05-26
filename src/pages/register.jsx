import { Button, Form, Input, notification, Row, Col, Divider } from "antd"
import { registerApi } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = async (values) => {
        const res = await registerApi(values.fullName, values.email, values.password, values.phone);
        if (res.data) {
            notification.success({
                message: "User Register",
                description: "Dang ky thanh cong"
            })
            navigate("/login");
        } else {
            notification.error({
                message: "User Register",
                description: JSON.stringify(res.message)
            })
        }
    }
    return (
        <Form
            form={form}
            layout="vertical"
            name="basic"
            onFinish={onFinish}
            style={{ margin: "10px" }}
        // onFinishFailed={onFinishFailed}

        >
            <h3 style={{ textAlign: "center"}}>Đăng ký tài khoản</h3>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item

                        label="Full Name"
                        name="fullName"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item

                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item

                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item

                        label="Phone Number"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Phonenumber!'
                            },
                            {
                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: "Wrong format!"
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col xs={24} md={8}>
                <div>
                    <Button
                        onClick={() => form.submit()}
                        type="primary"> Register </Button>
                </div>
              <Divider />
               <div>Đã có tài khoản ? <Link to = {"/login"}>Đăng nhập tại đây</Link></div>         
            </Col>
        </Row>
        </Form >
    )
}
export default RegisterPage;