import React from 'react';
import {render} from 'react-dom';
import HMR from "src/HMR";

export class Root {

    constructor(arg) {
        this.arg = arg
    }

    render() {
        render(
            <HMR {...this.arg}/>, document.getElementById('root')
        )
    }
}
