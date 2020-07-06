import React from 'react';
import {Grid} from "semantic-ui-react";
import {observer} from "mobx-react";
import Radio_Model from "src/models/Radio/Radio_Model";
import MyRadioItem from "components/radioItem";
import * as hex from 'hash-sum'

@observer
export default class MyRadio extends React.Component {

    store = new Radio_Model()

    handleClick = (val) => {
        this.store.handleChange(val)
    }

    render() {

        const store = this.store

        return (
            <Grid columns={3} className='m-0 justify-content-center'>
                <div className='w-75'>
                    <Grid.Row className='p-4 outline-crimson d-flex flex-nowrap justify-content-center'>
                        {store.getRadioList.map((val, ind) =>
                            <MyRadioItem key={hex(val)}
                                         active={store.activeItem === val}
                                         odd={ind % 2 === 0}
                                         handleClick={() => this.handleClick(val)}
                                         val={val}
                            />
                        )}
                    </Grid.Row></div>
            </Grid>
        )
    }
}
