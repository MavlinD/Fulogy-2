import React from 'react';

import '../libs'
import '../main'

import * as serviceWorker from './serviceWorker';
import {styles} from 'src/config'
import {Root} from "src/Root";

const dataCompile = `[AIV]V:{version} Date:{date}[/AIV]`
console.log('%c' + dataCompile, styles.blue)


new Root({rootComponent: 'index'}).render()


serviceWorker.register();
