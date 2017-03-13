import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Routes from './config/Routes'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(<Routes />, document.getElementById('app'));