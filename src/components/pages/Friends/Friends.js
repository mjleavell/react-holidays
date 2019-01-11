import React from 'react';
import { Button } from 'reactstrap';

import './Friends.scss';

class Friends extends React.Component {
  newFriendView = () => {
    this.props.history.push('/friends/new');
  };

  render() {
    return (
      <div className="friends mx-auto mt-3">
        <Button
          color="light"
          size="small"
          className="friends-btn"
          onClick={this.newFriendView}
        >Add Friend</Button>
      </div>
    );
  }
}

export default Friends;
