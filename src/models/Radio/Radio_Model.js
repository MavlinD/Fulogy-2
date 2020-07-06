import {action, computed, configure, observable} from "mobx";
import Main_Model from "src/models/Main_Model";

configure({enforceActions: 'observed'})

export default class Radio_Model extends Main_Model {

    @observable activeItem = 'day'

    @action
    handleChange(val) {
        this.activeItem = val
    }

    @computed
    get getRadioList() {
        return ['day','hot', 'cold']
    }

}
