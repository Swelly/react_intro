import React from 'react';
import Badge from './Badge.jsx';

export default class Thumbnail extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <div className="thumbnail-container">
      <div className="thumbnail">
        <img src={this.props.imageUrl} alt="..." width="150px;"></img>
        <div className="caption">
          <h3>{this.props.header}</h3>
          <p>{this.props.description}</p>
          <p>
            <Badge title={this.props.title} number={this.props.number} />
          </p>
        </div>
      </div>
    </div>
  }

}
