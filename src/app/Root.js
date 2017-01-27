import React from "react";

import { Header } from  "./components/navigation/Header";
import { SideNavigation } from  "./components/navigation/SideNavigation";


export class Root extends React.Component {
    render() {
        return(
            <div>
                <div className="row">
                    <Header />
                </div>
                <div className="row">
                    <div className="col-lg-1">
                        <SideNavigation />
                    </div>
                    <div className="col-lg-11">
                        {this.props.children}
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}