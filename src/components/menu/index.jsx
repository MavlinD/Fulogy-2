import React from 'react';
import {Menu} from "semantic-ui-react";
import * as hex from "hash-sum";

export default class MyMenu extends React.Component {

    items = [
        {key: 'citchen', name: 'Вариант кухни'},
        {key: 'size', name: 'Размеры',},
        {key: 'sensor', name: 'Сенсор',},
        {key: 'cabel', name: 'Питающий кабель',},
        {key: 'bpower', name: 'Блок питания',},
        {key: 'color', active: true, name: 'Цвет свечения',},
        {key: 'setup', name: 'Монтаж',},
        {key: 'cart', name: 'Корзина',},
    ]

    state = {activeItem: 'color'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {

        const {activeItem} = this.state

        return (
            <Menu
                pointing secondary
                widths={this.items.length+2}
                className='text-break bordered border-top'
            >
                {this.items.map(val =>
                    <Menu.Item
                        key={hex(val)}
                        name={val.key}
                        content={<span className='outline-lightblue px-2 py-1'>{val.name}</span>}
                        onClick={this.handleItemClick}
                        active={activeItem === val.key}
                    />
                )}

            </Menu>
        )
    }
}
