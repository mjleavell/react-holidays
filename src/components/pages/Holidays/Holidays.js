import React from 'react';
import { Button } from 'reactstrap';

import './Holidays.scss';

class Holidays extends React.Component {
  holidayDetailView = (e) => {
    e.preventDefault();
    const getId = e.target.id;
    this.props.history.push(`/holidays/${getId}`);
  };

  render() {
    return (
      <div className="holidays mx-auto mt-3">
        <Button
          to='holidays/:id'
          color="light"
          size="small"
          id="holiday1234"
          onClick={this.holidayDetailView}
        >Mardi Gras</Button>
      </div>
    );
  }
}

export default Holidays;
