import React from "react";
import { browserHistory } from "react-router";

export class LeaveApply extends React.Component {

    navigation() {
        browserHistory.push("/dashboard");
    }

    render() {
        return (
            <div className="tabbable">
                <ul className="nav nav-tabs">
                    <li className="active">
                        <a href="#tab1" data-toggle="tab">Section 1</a>
                    </li>
                    <li>
                        <a href="#tab2" data-toggle="tab">Section 2</a>
                    </li>
                    <li>
                        <a href="#tab3" data-toggle="tab">Section 3</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane active" id="tab1">
                        <div className="row">
                            <h3>Leave Info</h3>
                               <div className="row leave-bal-wraper">
                                   <div className="leave-bal-cl"><span>10</span></div>
                                   <div className="leave-bal-el"><span>11</span></div>
                               </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="tab2">
                        <p>I'm in Section 2.</p>
                    </div>
                    <div className="tab-pane" id="tab3">
                        <p>Howdy, I'm in Section 3</p>
                    </div>
                </div>
            </div>
        );
    }
}