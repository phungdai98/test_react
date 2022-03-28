import React, {useEffect, useState} from 'react'
import {Button, Col, Form, InputNumber, Row, Select, Space} from "antd"
import {DISHES, TYPE_MEANS} from "../Constains/constains"
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import Input from "antd/es/input/Input";

const {Option} = Select

const Tab3 = ({ form }) => {
    const [dishes, setDishes] = useState([])
    useEffect(() => {
        setDishes(
            [...new Set(DISHES.
            filter(item => item.restaurant === form.getFieldValue('restaurant') && item.availableMeals.includes(form.getFieldValue('meal'))))]
        )
    }, [form.getFieldValue('restaurant'), form.getFieldValue('meal')])
    return (
        <Row gutter={16}>
            <Form.List name="dishes">
                {(fields, { add, remove }) => (
                    <div>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                                <Form.Item
                                    {...restField}
                                    name={[name, 'name']}
                                    rules={[{ required: true, message: 'Missing first dish' }]}
                                >
                                    <Select
                                        showSearch
                                        placeholder="Please select the dish"
                                        filterOption={(input, option) =>
                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        {
                                            (dishes || []).map(item =>  <Option value={item.name} key={item.name}>{item.name}</Option>)
                                        }
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, 'quantity']}
                                    rules={[{ required: true, message: 'Missing no. of serving' }]}
                                >
                                    <InputNumber min={1} />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add dish
                            </Button>
                        </Form.Item>
                    </div>
                )}
            </Form.List>
        </Row>
    );
};

export default Tab3;
