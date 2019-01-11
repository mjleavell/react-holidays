import React from 'react';
import { Button } from 'reactstrap';

import './Friends.scss';

class Friends extends React.Component {
  editFriendView = (e) => {
    e.preventDefault();
    const getId = 'friend1345';
    this.props.history.push(`/friends/${getId}/edit`);
  };

  render() {
    return (
      <div className="friends mx-auto mt-3">
        <Button
          color="light"
          size="small"
          className="friends-btn"
          id="friend1345"
          onClick={this.editFriendView}
        >Edit Friend</Button>
      </div>
    );
  }
}

export default Friends;
