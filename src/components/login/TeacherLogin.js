import I18n from "../locale/I18n";
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Title, Description } from "../features/typography";

const TeacherLogin = () => {
    return (
        <Card>
            <CardContent>
                <Title>
                    <I18n label="TeacherLogin" />
                </Title>
                <Description>
                    <I18n label="TeacherLoginDescription" />
                </Description>
                <Button
                    variant="text"
                    color="primary"
                    href="mailto:support@tinkerlamp.com"
                >
                    <I18n label="RequestAccount" />
                </Button>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    color="primary"
                    href="https://tinker.isyflow.ch/"
                >
                    <I18n label="LoginNewPlatform" />
                </Button>
            </CardActions>
            <CardActions>
                <Button href="https://app.tinkerlamp.com/">
                    <I18n label="LoginOldPlatform" />
                </Button>
            </CardActions>
        </Card>
    );
};

export default TeacherLogin;
