import React from 'react';
import {observer} from "mobx-react";
import {configure} from "mobx";

configure({enforceActions: 'observed'})

@observer
class Index extends React.Component {

    componentDidMount(): void {}

    render() {

        return (
            <div className="bg-dark">
                test react
            </div>
        )
    }
}

export default Index
