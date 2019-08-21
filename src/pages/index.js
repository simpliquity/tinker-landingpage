import Container from "../components/Container.js";
import LocaleWrapper from "../components/locale/LocaleWrapper.js";
import PageSection from "../components/PageSection.js";
import React from "react";
import HomePage from "../components/HomePage";
import withRoot from "../withRoot.js";
import { withStyles } from "@material-ui/core/styles";

import Layout from "../components/layout";

const styles = {
    main: {
        backgroundColor: "#fff"
    },
    welcome: {},
    features: {}
};

const IndexPage = ({ classes, locale }) => (
    <LocaleWrapper locale={locale}>
        <div className={classes.main}>
            <Layout>
                <PageSection className={classes.welcome}>
                    <Container>
                        <HomePage />
                    </Container>
                </PageSection>
            </Layout>
        </div>
    </LocaleWrapper>
);

export default withRoot(withStyles(styles)(IndexPage));
