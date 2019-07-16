import Button from "../base/Button.js";
import Form from "../form/Form.js";
import TextInput from "../form/TextInput.js";
import I18n from "../locale/I18n.js";
import React, { useState } from "react";

const CodeLoginForm = () => {

    const [code, setCode] = useState("");

    const submitForm = () => {
        const parsedCode = code.replace(/[^a-zA-Z0-9]/, "");
        window.location = `https://www.tinkerlamp.com/code/${parsedCode}`;
    };

    return (
        <Form onSubmit={submitForm}>
            <TextInput
                id={"formCode"}
                label={<I18n label="ActivityCode" />}
                placeholder="ABCD EFGH"
                value={code}
                handleChange={setCode}
                required={true}
            />
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

export default CodeLoginForm;
