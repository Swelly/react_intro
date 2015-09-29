import React from 'react';
import Button from './Button.jsx';
import ListItem from './ListItem.jsx';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.list = this.props.items.map(function(items){
      return <ListItem item={items} />;
    });
  }

  render () {
    return (
      <div className="dropdown clearfix">
        <Button
          whenClicked={this.handleClick}
          title={this.props.title}
          className="btn-dropdown"
          subtitleClassName="caret"
        />
        <ul className="dropdown-menu show">
          {this.list}
        </ul>
      </div>
    )
  }

  handleClick() {
    alert("Dropdowns");
  }
}
