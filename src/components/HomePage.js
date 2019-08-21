import React from "react";
import CodeLoginForm from "./login/CodeLoginForm.js";
import TeacherLogin from "./login/TeacherLogin.js";
import Grid from "@material-ui/core/Grid";

const HomePage = () => {
    return (
        <Grid container spacing={24}>
            <Grid item md={6} xs={12}>
                <CodeLoginForm />
            </Grid>
            <Grid item md={6} xs={12}>
                <TeacherLogin />
            </Grid>
        </Grid>
    );
};

export default HomePage;
