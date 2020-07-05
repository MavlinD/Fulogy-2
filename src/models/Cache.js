import {action, configure, observable} from "mobx";

configure({enforceActions: 'observed'})

export default class Cache {

    @observable data = {}

    @action
    setCache(a, b) {
        this.data[a] = b
    }

}
