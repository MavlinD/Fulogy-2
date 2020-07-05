import React from 'react';
import {Table} from "semantic-ui-react";

export default class MyTable extends React.Component {

    render() {

        return (
            <Table basic className='my outline-blue'>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>Класс:</Table.Cell>
                        <Table.Cell><span className='badge badge-secondary p-2 px-3 shadow text-wrap'>Standart</span></Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Потребляемая мощность</Table.Cell>
                        <Table.Cell verticalAlign={'bottom'}>59 Вт.</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Сила света:</Table.Cell>
                        <Table.Cell>3459 Люмен = 7,5 ламп накаливания по 40 Вт.</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Гарантия:</Table.Cell>
                        <Table.Cell>3 года</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Монтаж:</Table.Cell>
                        <Table.Cell>Да</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Итого сумма:</Table.Cell>
                        <Table.Cell>2954 руб.</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        )
    }
}
