import AppService from './modules/app.service'
import {num} from './modules/config'
import './modules/header.component'

console.log( `config ${num}` )

const service = new AppService("index")
service.log()