import I18n from "../locale/I18n";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Title, Description } from "../features/typography";

const TeacherLogin = () => {

    return (
        <Card style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
            <CardContent>
                <Title>
                    <I18n label="TeacherLogin" />
                </Title>
                <Description>
                    <I18n label="TeacherLoginDescription" />
                </Description>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" href="https://www.tinkerlamp.com/" >
                    <I18n label="Open" />
                </Button>
            </CardActions>
        </Card>
    );
};

export default TeacherLogin;
