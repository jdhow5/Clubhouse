import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import ClubsDetailPage from "./clubs/ClubsDetailPage";
import LoginPage from "./login/LoginPage";
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <Header />
    <Container fluid>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/:slug" component={ClubsDetailPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </Container>
    </>
  );
}

export default App;
