import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {
    Button,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'
import {observer} from "mobx-react";
import Sidebar_Model from "src/models/Sidebar/Sidebar_Model";

const VerticalSidebar = ({animation, direction, visible}) => (
    <Sidebar
        as={Menu}
        animation={animation}
        direction={direction}
        icon='labeled'
        inverted
        vertical
        visible={visible}
        width='thin'
    >
        <Menu.Item as='a'>Обучающее видео</Menu.Item>
        <Menu.Item as='a'>Оформление заказа</Menu.Item>
        <Menu.Item as='a'>Оплата</Menu.Item>
        <Menu.Item as='a'>Доставка</Menu.Item>
        <Menu.Item as='a'>Гарантия</Menu.Item>
        <Menu.Item as='a'>Возврат</Menu.Item>
        <Menu.Item as='a'>Контакты</Menu.Item>
        <Menu.Item as='a'>Партнерам</Menu.Item>
    </Sidebar>
)

VerticalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool,
}

@observer
export default class SidebarExampleTransitions extends Component {

    store = new Sidebar_Model()

    state = {
        animation: 'overlay',
        direction: 'right',
        btnIcon: 'bars'
    }

    render() {

        const {animation, dimmed, direction, visible} = this.state

        return (
            <div className='bg-dark'>
                <div
                    onClick={() => this.store.setHideSidebar()}
                     className='d-flex justify-content-end align-items-center'>
                    <Icon name='cart' className='text-white'/>
                    <Button onClick={event => this.store.setToggleSidebar(event)}
                            icon className='bg-transparent text-white'>
                        <Icon name={this.store.btnIcon}/>
                    </Button>
                </div>
                <Sidebar.Pushable as={Segment} className='bg-white m-0'>
                    <VerticalSidebar
                        animation={animation}
                        direction={direction}
                        visible={this.store.isOpenSidebar}
                    />

                    <Sidebar.Pusher dimmed={dimmed && visible}>
                        <Segment basic>
                            <Header as='h3'>Application Content</Header>
                            <Image src='/src/assets/images/wireframe/paragraph.png'/>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}