import React from "react";
import CodeLoginForm from "./login/CodeLoginForm.js";
import TeacherLogin from "./login/TeacherLogin.js";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    description: {
        marginBottom: "8px"
    },
    actions: {
        paddingLeft: "12px"
    }
};

const HomePage = ({ classes }) => {
    return (
        <Grid container spacing={24}>
            <Grid item md={6} xs={12}>
                <CodeLoginForm classes={classes} />
            </Grid>
            <Grid item md={6} xs={12}>
                <TeacherLogin classes={classes} />
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(HomePage);
