import React from 'react';
import {Col, Form, Row, Select} from "antd";
import {DISHES} from "../Constains/constains";

const {Option} = Select

const Tab2 = () => {
    const restaurants = () => {
        return [...new Set(DISHES.map(item => item.restaurant))]
    }
    return (
        <Row gutter={16}>
            <Col md={12}>
                <Form.Item
                    name="restaurant"
                    label="Please select the Restaurant"
                    rules={[
                        {
                            required: true,
                            message: 'Please select the Restaurant',
                        },
                    ]}
                >
                    <Select
                        showSearch
                        placeholder="Please select the Restaurant"
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        {
                            (restaurants() || []).map(item =>  <Option value={item} key={item}>{item}</Option>)
                        }
                    </Select>
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Tab2;
