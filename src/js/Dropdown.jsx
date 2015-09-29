import React from 'react';
import Button from './Button.jsx';
import ListItem from './ListItem.jsx';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.list = this.props.items.map(function(items){
      return <ListItem item={items} />;
    });
  }

  render () {
    const open = this.state.open;

    return (
      <div className="dropdown clearfix">
        <Button
          whenClicked={this.handleClick}
          title={this.props.title}
          className="btn-dropdown"
          subtitleClassName="caret"
        />
        <ul className={"dropdown-menu " + (this.state.open ? "show" : "") }>
          {this.list}
        </ul>
      </div>
    )
  }

  handleClick() {
    // Set the state to the opposite of current val & re-render
    this.setState({open: !this.state.open})
  }
}
