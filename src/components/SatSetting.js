import React, {Component} from 'react';
import {Form, Button, InputNumber} from 'antd';

class SatSettingForm extends Component {
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form className = 'sat-setting'>
                <Form.Item label="Longitude(degrees)">
                    {
                        getFieldDecorator("longitude", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your Longitude", /*如果不填，会显示错误信息 */
                                }
                            ],
                        })(<InputNumber min={-180} max={180}
                                        style={{width: "100%"}}
                                        placeholder="Please input Longitude"
                        />)
                    }
                </Form.Item>



            </Form>
        );
    }
}

const SatSetting = Form.create({name:'satellite-setting'})(SatSettingForm);
export default SatSetting;