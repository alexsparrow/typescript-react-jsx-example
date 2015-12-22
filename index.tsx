import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import App from './components/App';

declare function require(string): string;
require("./main.less");

ReactDOM.render(<App/> , document.getElementsByTagName('body')[0]);
