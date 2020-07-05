import React from 'react';
import {observer} from "mobx-react";
import {configure} from "mobx";

configure({enforceActions: 'observed'})

@observer
class Index extends React.Component {

    componentDidMount(): void {}

    render() {

        return (
            <div className='d-flex flex-column'>
                <header className="bg-dark">
                    header
                </header>
                <div className='content bg-light'>
                    content
                </div>
                <footer className='bg-info'>
                    footer
                </footer>
            </div>
        )
    }
}

export default Index
