import I18n from "../locale/I18n.js";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { Title, Description } from "../features/typography";

const CodeLoginForm = ({ classes }) => {
    const [code, setCode] = useState("");

    const parsedCode = () => {
        return code.replace(/[^a-zA-Z0-9]/, "");
    };

    return (
        <Card>
            <CardContent>
                <Title>
                    <I18n label="LoginWithCode" />
                </Title>
                <Description className={classes.description}>
                    <I18n label="LoginWithCodeDescription" />
                </Description>
                <TextField
                    fullWidth
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    variant="outlined"
                    label={<I18n label="Code" />}
                />
            </CardContent>
            <CardActions className={classes.actions}>
                <Button
                    variant="contained"
                    color="primary"
                    href={`https://www.tinkerlamp.com/code/${parsedCode()}`}
                >
                    <I18n label="Open" />
                </Button>
            </CardActions>
        </Card>
    );
};

export default CodeLoginForm;
