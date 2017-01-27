import React from "react";
import {Router} from 'react-router';
import {browserHistory} from 'react-router'

import URL from "../components/config/Constants";
import Ajax from "../components/helpers/Ajax_Helpers";
import DOM from "../components/helpers/DOM_Helpers";

export class Login extends  React.Component {

    doLogin(event) {
        var _router = this.context.router;
        event.preventDefault();
        var data = {};
        data.username = "admin";
        data.password = "admin";
        var login = Ajax.postCall(URL.apiAuth, data);
        login.done(function(obj) {
            localStorage.setItem("pala_token",obj.token);
            browserHistory.push('/portal');
            DOM.alert($("#success"), "Welcome! Login Successfull")
        }).fail(function(obj) {
            var message = obj.responseJSON.message;
            DOM.alert($("#failed"), message)
        })
    }

    forgotPassword() {
        browserHistory.push('/forgot-password');
    }

    render() {
        return (
            <div className="loginPanel">
                    <div role="alert" className="alert alert-danger alert-top" id="failed">
                        <span className="alert-msg"></span>
                    </div>
                    <div className="alert alert-info alert-top" id="info">
                        <span className="alert-msg"></span>
                    </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                        <form className="loginForm" id="loginForm">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">User Name</label>
                                <input type="text" className="form-control" id="userName" placeholder="User Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" />
                            </div>
                            <input type="button" className="btn btn-default col-lg-4 col-sm-4 col-md-4 col-xs-5" value="Submit" onClick={() => this.doLogin(event)} />
                            <input type="button" className="btn btn-default col-lg-4 col-sm-4 col-md-4 col-xs-5" value="Forgot Password" onClick={() => this.forgotPassword()} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}