// @flow
// import * as T from "src/Tools";
import {action, computed, observable} from "mobx";

// Parent class for all MOBX models
export default class Main_Model {

    @computed
    get isCache() {
        return Boolean(!this.isData)
    }


}
