import Button from "../base/Button.js";
import Form from "../form/Form.js";
import I18n from "../locale/I18n.js";
import React from "react";

const TeacherLogin = () => {

    const submitForm = () => {
        window.location = `https://www.tinkerlamp.com/`;
    };

    return (
        <Form onSubmit={submitForm}>
            <p>
                <I18n label="TeacherLoginDescription" />
            </p>
            <Button
                flat={true}
                type={"confirm"}
                label={<I18n label="StartActivity" />}
                style={{
                    width: "100%"
                }}
            />
        </Form>
    );
};

export default TeacherLogin;
