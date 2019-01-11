import React from 'react';
import { Button } from 'reactstrap';

import './HolidayDetail.scss';

class HolidayDetail extends React.Component {
  editHolidayView = (e) => {
    e.preventDefault();
    const getId = e.target.id;
    this.props.history.push(`/holidays/${getId}/edit`);
  }

  friendsView = (e) => {
    e.preventDefault();
    const getId = e.target.id;
    this.props.history.push(`/holidays/${getId}/friends`);
  }

  render() {
    return (
      <div className="holiday-detail\ mx-auto mt-3">
        <Button
          color="light"
          size="small"
          className="holiday-detail-btn"
          id="holiday0980"
          onClick={this.editHolidayView}
        >Edit Holiday</Button>
        <Button
          color="light"
          size="small"
          className="holiday-detail-btn"
          id="holiday2134"
          onClick={this.friendsView}
        >Friends</Button>
      </div>
    );
  }
}

export default HolidayDetail;
