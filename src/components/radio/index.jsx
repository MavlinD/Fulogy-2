import React from 'react';
import {Grid} from "semantic-ui-react";
import {observer} from "mobx-react";
import MyRadioItem from "components/radioItem";
import * as hex from 'hash-sum'

@observer
export default class MyRadio extends React.Component {

    handleClick = (val) => {
        this.props.store.handleChangeRadio(val)
    }

    render() {

        const store = this.props.store

        return (
            <Grid columns={3} className='m-0 justify-content-center'>
                <div>
                    <Grid.Row className='py-4 px-2 outline-crimson d-flex flex-nowrap justify-content-center'>
                        {store.getRadioList.map((val, ind) =>
                            <MyRadioItem key={hex(val)}
                                         active={store.activeItem === val.name}
                                         odd={ind % 2 === 0}
                                         handleClick={() => this.handleClick(val.name)}
                                         val={val}
                            />
                        )}
                    </Grid.Row></div>
            </Grid>
        )
    }
}
