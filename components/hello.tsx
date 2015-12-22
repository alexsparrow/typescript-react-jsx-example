import * as ReactDOM from 'react-dom';
import * as React from 'react';

interface Props {
  name: String;
  buttonClick: any;
}

export default class Hello extends React.Component<Props, {}> {
  render() {
    return <div><h1>Hello, you sweet TypeScript!</h1><button className="btn btn-default" onClick={this.props.buttonClick}>Hello</button></div>
  }
}
