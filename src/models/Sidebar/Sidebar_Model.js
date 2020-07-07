import {action, computed, configure, observable} from "mobx";
import Main_Model from "src/models/Main_Model";

configure({enforceActions: 'observed'})

export default class Sidebar_Model extends Main_Model {

    @observable activeItem = 'day'

    @action
    handleChangeRadio(val) {
        this.activeItem = val
    }

    @computed
    get getRadioList() {
        return [
            {name: 'day', label: 'Дневной свет'},
            {name: 'hot', label: 'Теплый свет'},
            {name: 'cold', label: 'Холодный свет'}
        ]
    }

    @computed
    get getCarouselData() {
        let data = [
            {
                name: 'day',
                data: [
                    '/src/assets/images/1.jpeg',
                    '/src/assets/images/wireframe/image.png',
                    '/src/assets/images/wireframe/image.png',
                ]
            },
            {
                name: 'hot',
                data: [
                    '/src/assets/images/wireframe/image.png',
                    '/src/assets/images/2.jpeg',
                    '/src/assets/images/wireframe/image.png',
                ]
            },
            {
                name: 'cold',
                data: [
                    '/src/assets/images/3.jpeg',
                    '/src/assets/images/wireframe/image.png',
                    '/src/assets/images/wireframe/image.png',
                ]
            },
        ]

        return data.filter(value => value.name === this.activeItem)[0].data

    }


    @observable isOpenSidebar = false
    @observable btnIcon = 'bars'

    @action
    setToggleSidebar(e) {
        this.isOpenSidebar = !this.isOpenSidebar
        this.btnIcon = this.btnIcon === 'bars' ? 'cancel' : 'bars'
        e.stopPropagation()
    }

    @action
    setHideSidebar() {
        this.isOpenSidebar = false
        this.btnIcon = 'bars'
    }


}
