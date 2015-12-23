import config from './config'
import React from 'react'
import {render} from 'react-dom'
import {Router} from 'react-router'
import {createHistory} from 'history'
import routes from './routes'

let history = createHistory();

render(<Router history={history}>{routes}</Router>, window.document);