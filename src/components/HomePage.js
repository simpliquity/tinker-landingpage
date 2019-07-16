import Col from "./base/Col.js";
import Row from "./base/Row.js";
// import LoginWithPassword from "/imports/ui/components/login/LoginWithPassword.js";
// import LoginWithTinkerlamp from "/imports/ui/components/login/LoginWithTinkerlamp.js"
// import MainHeaderContainer from "/imports/ui/layouts/MainHeaderContainer.js";
import React from "react";
import CodeLoginForm from "./login/CodeLoginForm.js";
import TeacherLogin from "./login/TeacherLogin.js";
import CardTitle from "./base/CardTitle.js";
import Card from "./base/Card.js";
import I18n from "./locale/I18n.js";

const HomePage = () => {
    return (
        <div>
            <header>
                Tinker Header
                {/* <MainHeaderContainer /> */}
            </header>
            <main>
                <div className="container">
                    <Row>
                        <Col m={6}>
                            <Card>
                                <CardTitle text={<I18n label="LoginWithCode" />} />
                                <CodeLoginForm />
                            </Card>
                        </Col>
                        <Col m={6}>
                            <Card>
                                <CardTitle text={<I18n label="TeacherLogin" />} />
                                <TeacherLogin />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </main>
            <footer>
                If you want to login with your old Tinkerlamp account, please visit app.tinkerlamp.com.
            </footer>
        </div>
    )
}

export default HomePage;