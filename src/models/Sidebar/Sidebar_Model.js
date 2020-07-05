import {action, configure, observable} from "mobx";
import Main_Model from "src/models/Main_Model";

configure({enforceActions: 'observed'})

export default class Sidebar_Model extends Main_Model {

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
