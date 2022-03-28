import React from 'react';
import {Col, Form, InputNumber, Row, Select} from "antd";
import {TYPE_MEANS} from "../Constains/constains";

const { Option } = Select

const Tab1 = () => {
    return (
        <Row gutter={16}>
            <Col md={12}>
                <Form.Item
                    name="meal"
                    label="Please select the Meal"
                    rules={[
                        {
                            required: true,
                            message: 'Please select the Meal',
                        },
                    ]}
                >
                    <Select
                        showSearch
                        placeholder="Please select the Meal"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            TYPE_MEANS.map(item =>  <Option value={item.id} key={item.id}>{item.label}</Option>)
                        }
                    </Select>
                </Form.Item>
            </Col>
            <Col md={12}>
                <Form.Item
                    name="quantity_people"
                    label="Please select no. of people"
                    rules={[
                        {
                            required: true,
                            message: 'Please select no. of people',
                        },
                    ]}
                >
                    <InputNumber min={1} max={10} defaultValue={1} />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Tab1;
