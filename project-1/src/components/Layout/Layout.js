import React, {Component} from 'react';
import Aux from '../../hoc/Aux'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";

import Classes from './Layout.css';

class Layout extends Component {

    state = {
        showSideDrawer: false,
    };

    closeSideDraw = () => {
        this.setState({showSideDrawer: false});
    };

    openSideDraw = () => {
        this.setState({showSideDrawer: true});
    };

    render() {
        return (
            <Aux>
                <Toolbar openSideDraw={this.openSideDraw}/>
                <Sidedrawer closed={this.closeSideDraw} show={this.state.showSideDrawer}/>
                <main className={Classes.content}>
                    {this.props.children}
                </main>
            </Aux>

        );
    }
}


export default Layout;