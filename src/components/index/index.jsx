import React from 'react';
import {observer} from "mobx-react";
import {configure} from "mobx";
import MySidebar from "components/sidebar";
import MyMenu from "components/menu";

configure({enforceActions: 'observed'})

@observer
class Index extends React.Component {

    componentDidMount(): void {
    }

    render() {

        return (
            <div className='d-flex flex-column h-100 col-md-12 col-lg-9 m-auto p-0 pt-4'>
                <section className='content bg-light'>
                    <MySidebar/>
                </section>
                <footer className='flex-wrap d-flex justify-content-center align-items-center text-dark'>
                    <MyMenu/>
                </footer>
            </div>
        )
    }
}

export default Index
