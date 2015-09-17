// Import React
import React from 'react';

// Create class called HelloText that extends the base React Component class
export default class HelloText extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let names = ['john', 'jack', 'jill']
    return (
      <div>
        <h2>Names</h2>

        <ul className='names'>{
          names.map((name) =>
            <li className='name'>{name}</li>
          )
        }</ul>
      </div>
    );
  }
}
