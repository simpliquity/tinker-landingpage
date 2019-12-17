import I18n from "../locale/I18n.js";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { Title, Description } from "../features/typography";

const CodeLoginForm = () => {
    const [code, setCode] = useState("");

    const parsedCode = () => {
        return code.replace(/[^a-zA-Z0-9-]/g, "");
    };

    const getLink = () => {
        const parsed = parsedCode();
        //if (parsed.length == 8) {
        return `https://app.tinkerlamp.com/code/${parsed}`;
        //} else {
        //    return `https://app.tinkerlamp.com/?code=${parsed}`;
        //}
        //if (parsed.length == 8) {
        //    return `http://localhost:3500/code/${parsed}`;
        //} else {
        //    return `http://localhost:3500/?code=${parsed}`;
        //}
    };

    return (
        <Card>
            <CardContent>
                <Title>
                    <I18n label="LoginWithCode" />
                </Title>
                <Description>
                    <I18n label="LoginWithCodeDescription" />
                </Description>
                <div style={{ marginTop: "10px" }}>
                    <TextField
                        fullWidth
                        value={code}
                        onChange={e => setCode(e.target.value)}
                        variant="outlined"
                        label={<I18n label="Code" />}
                    />
                </div>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" href={getLink()}>
                    <I18n label="Open" />
                </Button>
            </CardActions>
        </Card>
    );
};

export default CodeLoginForm;
