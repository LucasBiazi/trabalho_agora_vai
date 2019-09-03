import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import ForgotThePassword from "./pages/ForgotThePassword";

export default function Direcionamento(){
    return (
        <BrowserRouter>
            <Route exact path="/" component={Login} />
            <Route path="/ForgotThePassword" component={ForgotThePassword} />
            <Route path="/SingUp" component={SingUp} />
        </BrowserRouter>
    );
}