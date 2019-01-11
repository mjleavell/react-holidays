import React from 'react';
import { Button } from 'reactstrap';

import './HolidayDetail.scss';

class HolidayDetail extends React.Component {
  editHolidayView = (e) => {
    const holidayId = e.target.id;
    this.props.history.push(`/holidays/${holidayId}/edit`);
  }

  render() {
    return (
      <div className="holiday-detail\ mx-auto mt-3">
        <Button
          tag="a"
          color="light"
          size="small"
          className="holiday-detail-btn"
          id="holiday0980"
          onClick={this.editHolidayView}
        >Edit Holiday</Button>
        <Button
          tag="a"
          color="light"
          size="small"
          className="holiday-detail-btn"
          id="holiday2134"
        >Friends</Button>
      </div>
    );
  }
}

export default HolidayDetail;
