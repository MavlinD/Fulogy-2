import React from 'react';
import {Grid, Segment, Image} from "semantic-ui-react";
import {observer} from "mobx-react";

@observer
export default class MyRadioItem extends React.Component {

    render() {

        const props = this.props

        return (
            <Grid.Column
                className={`my outline-blue ${props.odd ? 'mx-4' : 'm-0'} p-0 d-flex justify-content-center align-items-center`}>
                <Segment onClick={props.handleClick}
                         className={`my rounded-0 border-0 outline-green p-0 ${props.active ? 'mw-100' : 'mw-80'}`}>
                    <Image
                        className='my cursor-pointer shadow'
                        src='/src/assets/images/wireframe/image.png'
                        label={{
                            as: 'a',
                            color: 'blue',
                            className: props.active ? '' : 'd-none',
                            corner: 'right',
                            icon: 'check square outline'
                        }}
                    />
                </Segment>
            </Grid.Column>
        )
    }
}
