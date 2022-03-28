import React, {useState} from 'react'
import {Button, Col, Form, Row, Tabs} from 'antd'
import "./order.scss"
import Tab1 from "./Manage/Tab1"
import Tab2 from "./Manage/Tab2";
import Tab3 from "./Manage/Tab3";

const initialValues = {
    dishes: [{}],
    quantity_people: 1
}

const {TabPane} = Tabs
const Order = props => {
    const [tabActive, setTabActive] = useState("1")
    const [form] = Form.useForm()

    function callback(key) {
        setTabActive(`${key}`)
    }

    const onFinish = (values) => {
        console.log('Finish:', values)
    };

    return (
        <div className="container">
            <Form form={form} onFinish={onFinish} layout="vertical" initialValues={initialValues}>
                <Tabs activeKey={tabActive} onChange={callback} centered>
                    <TabPane tab="Tab 1" key="1">
                        <Tab1/>
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        <Tab2/>
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        <Tab3 form={form}/>
                    </TabPane>
                    <TabPane tab="Preview" key="4">
                        <div>
                            <p>Mean: <strong>{form.getFieldValue('meal')}</strong></p>
                            <p>No. of people: <strong>{form.getFieldValue('quantity_people')}</strong></p>
                            <p>Restaurant: <strong>{form.getFieldValue('restaurant')}</strong></p>
                            <div>Dishes:
                                <table>
                                    <tr>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                    </tr>
                                    {
                                        (form.getFieldValue('dishes') || []).map((item, index) => <tr
                                            key={item.name + index}>
                                            <td>{item.name}</td>
                                            <td>{item.quantity}</td>
                                        </tr>)
                                    }
                                </table>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </Form>
            <Row gutter={16} style={{marginTop: '20px'}}>
                <Col md={12}>
                    {parseInt(tabActive) > 1 &&
                    <Button type="danger" onClick={() => setTabActive(`${parseInt(tabActive) - 1}`)}>
                        Previous
                    </Button>}
                </Col>
                <Col md={12} className="text-right">
                    {parseInt(tabActive) < 4 &&
                    <Button type="primary" onClick={() => setTabActive(`${parseInt(tabActive) + 1}`)}>
                        Next
                    </Button>}
                </Col>
            </Row>
        </div>
    );
};

Order.propTypes = {};

export default Order;
