node --import 'data:text/javascript,import { register} from "node:module"; import {pathToFileURL} from "node:url"; register(pathToFileURL("./import-map-hooks.js));' main.js 
