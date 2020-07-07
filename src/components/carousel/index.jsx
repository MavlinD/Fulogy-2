import React from 'react';
// import {Grid} from "semantic-ui-react";
import {observer} from "mobx-react";
import {Carousel} from "react-responsive-carousel";
import * as hex from "hash-sum";

@observer
export default class MyCarousel extends React.Component {

    render() {

        const store = this.props.store,
            data = store.getCarouselData

        return (

            <Carousel showArrows showThumbs={false}>
                {data.map(value =>
                    <div key={hex(value)}>
                        <img src={value} alt={'alt'}/>
                    </div>
                )}
            </Carousel>
        );
    }
}
