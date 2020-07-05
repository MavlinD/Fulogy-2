import React from 'react';
import {observer} from "mobx-react";
import {configure} from "mobx";
// import SidebarExampleSidebar from "components/sidebar";
import SidebarExampleTransitions from "components/sidebar";
// import SidebarExampleSidebar from "components/sidebar2";

configure({enforceActions: 'observed'})

@observer
class Index extends React.Component {

    componentDidMount(): void {}

    render() {

        return (
            <div className='d-flex flex-column'>
                {/*<header className="bg-dark">*/}
                {/*    /!*<SidebarExampleSidebar/>*!/*/}
                {/*</header>*/}
                <div className='content bg-light'>
                    <SidebarExampleTransitions/>
                </div>
                <footer className='bg-info'>
                    footer
                </footer>
            </div>
        )
    }
}

export default Index
