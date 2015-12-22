import * as React from 'react';
import Hello from './hello';
import Nav from './Nav';

function doClick() {
  alert("Hello");
}

export default class App extends React.Component<{}, {}>{
  render() {
    return (
      <div className="container">
      <Nav/>
      <Hello name="Alex" buttonClick={doClick}/>
      </div>
      );
  }
}
