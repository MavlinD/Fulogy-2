// this component need for HMR
import {hot} from 'react-hot-loader/root';
import React, {Suspense, lazy} from 'react';

class HMR extends React.Component {

    rootComponent = this.props.rootComponent || 'index'

    render() {
        const RootComp = lazy(() => import("./components/" + this.rootComponent));

        return (
                <Suspense fallback={<div>Загрузка кода...</div>}>
                    <RootComp {...this.props}/>
                </Suspense>
        )
    }
}

export default hot(HMR)
