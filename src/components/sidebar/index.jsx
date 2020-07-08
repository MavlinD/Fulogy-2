import PropTypes from 'prop-types'
import React, {Component} from 'react'
import {
    Button,
    Icon,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'
import {observer} from "mobx-react";
import MyTable from 'components/table'
import Sidebar_Model from "src/models/Sidebar/Sidebar_Model";
import MyRadio from "components/radio";
import MyCarousel from "components/carousel";
import SweetAlert from "react-bootstrap-sweetalert";
import {casual} from "components/sidebar/casual";

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
export default class MySidebar extends Component {

    store = new Sidebar_Model()

    state = {
        animation: 'overlay',
        direction: 'right',
        btnIcon: 'bars',
        showForm: false,
    }

    togglePop = () => this.setState(prevState => ({showForm: !prevState.showForm}))

    render() {

        const {animation, dimmed, direction, visible} = this.state
        const store = this.store

        return (
            <div className='bg-dark d-flex flex-column'>
                <div onClick={() => store.setHideSidebar()}
                     className='d-flex align-items-center'>
                    <div className='text-white mx-3 logo'>Fulogy</div>
                    <Icon name='cart' className='text-white'/>
                    <Button onClick={event => store.setToggleSidebar(event)}
                            icon className='bg-transparent text-white'>
                        <Icon name={store.btnIcon}/>
                    </Button>
                </div>
                <Sidebar.Pushable as={Segment} className='rounded-0 border-0 shadow-none sb-content bg-white m-0'>
                    <VerticalSidebar
                        animation={animation}
                        direction={direction}
                        visible={store.isOpenSidebar}
                    />

                    <Sidebar.Pusher dimmed={dimmed && visible}>
                        <Segment basic className='d-flex flex-wrap px-0'>
                            <div className='outline-crimson carousel my left my p-2'>
                                <MyCarousel store={store}/>
                            </div>
                            <div className='outline-blue my right flex-shrink-1 flex-grow-1 pr-2'>
                                <MyTable/>
                                <div
                                    className='outline-blue my bg-info text-white d-flex flex-wrap align-items-center'>
                                    <Icon name='info' onClick={this.togglePop}
                                          className='icon my h-auto p-2 outline-lightblue'/>
                                    <div className='text-center flex-grow-1'>Выберите цвет свечения</div>
                                    <SweetAlert
                                        style={{width: '100%', height: '100%',}}
                                        title={''}
                                        show={this.state.showForm}
                                        onConfirm={this.togglePop}
                                        onCancel={this.togglePop}
                                        confirmBtnBsStyle={'outline-primary'}
                                        confirmBtnCssClass='back'
                                        customClass='my'
                                        confirmBtnText={'<< Вернуться'}
                                    >
                                        <div className='content text-left p-3'
                                             dangerouslySetInnerHTML={{__html: casual}}
                                        />
                                    </SweetAlert>
                                </div>
                                <MyRadio store={store}/>
                            </div>
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div>
        )
    }
}
