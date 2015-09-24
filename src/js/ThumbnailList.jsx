import React from 'react';
import Thumbnail from './Thumbnail.jsx';

export default class ThumbnailList extends React.Component {
  constructor() {
    super();
  }

  render () {
    var list = this.props.thumbnailData.map(function(thumbnailProps){
      return <Thumbnail {...thumbnailProps} />
    });

    return <div>
      {list}
    </div>
  }

}
