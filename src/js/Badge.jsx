var React = require('react');

export default class Badge extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <button className="btn btn-simple" type="button">
      {this.props.title} <span className="badge">{this.props.number}</span>
    </button>
  }

}
