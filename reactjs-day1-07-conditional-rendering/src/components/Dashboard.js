import React, {Component} from 'react';
import AdminToolbar from './AdminToolbar';
import PrimaryContent from './PrimaryContent';
import Sidebar from './Sidebar';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.adminToolBar = null;
        if(props.isAdmin === true) {
            this.adminToolBar = <AdminToolbar/>;
        }
    }
    render() {
        return (
            <div>
                {this.adminToolBar}
                <PrimaryContent isAdmin={this.props.isAdmin}/>
                <Sidebar/>
            </div>
        );
    }
}