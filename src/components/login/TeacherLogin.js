import I18n from "../locale/I18n";
import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Title, Description } from "../features/typography";

const TeacherLogin = ({ classes }) => {
    return (
        <Card>
            <CardContent>
                <Title>
                    <I18n label="TeacherLogin" />
                </Title>
                <Description className={classes.description}>
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
            <CardActions className={classes.actions}>
                <Button
                    variant="contained"
                    color="primary"
                    href="https://tinker.isyflow.ch/"
                >
                    <I18n label="Login" />
                </Button>
            </CardActions>
        </Card>
    );
};

export default TeacherLogin;
