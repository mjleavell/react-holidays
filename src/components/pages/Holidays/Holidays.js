import React from 'react';
import { LinkContainer } from 'react-router-dom';
import { Button } from 'reactstrap';

import './Holidays.scss';

class Holidays extends React.Component {
  holidayDetailView = (e) => {
    const holidayId = e.target.id;
    this.props.history.push(`/holidays/${holidayId}`);
  };

  newHolidayView = () => {
    this.props.history.push('/holidays/new');
  };

  render() {
    return (
      <div className="holidays mx-auto mt-3">
        {/* <LinkContainer> */}
          <Button
            to='holidays/:id'
            color="light"
            size="small"
            className="holiday-btn"
            id="holiday1234"
            onClick={this.holidayDetailView}
          >Mardi Gras</Button>
      {/* </LinkContainer> */}
      {/* <LinkContainer > */}
        <Button
          to='holidays/new'
          color="dark"
          size="small"
          onClick={this.newHolidayView}
        >Add Holiday</Button>
      {/* </LinkContainer> */}
      </div>
    );
  }
}

export default Holidays;
