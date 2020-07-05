import React from 'react';
import {observer} from "mobx-react";
import {configure} from "mobx";
import MySidebar from "components/sidebar";

configure({enforceActions: 'observed'})

@observer
class Index extends React.Component {

    componentDidMount(): void {}

    render() {

        return (
            <div className='d-flex flex-column h-100'>
                <section className='content bg-light'>
                    <MySidebar/>
                </section>
                <footer className='bg-info'>
                    footer
                </footer>
            </div>
        )
    }
}

export default Index
