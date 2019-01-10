import React from 'react';
import { Button } from 'reactstrap';

import './Holidays.scss';

class Holidays extends React.Component {
  render() {
    return (
      <div className="Holidays mx-auto mt-3">
        <Button
          tag="a"
          color="light"
          size="small"
          // href=""
          className="holiday-btn"
          target="_blank"
        >Mardi Gras</Button>
      </div>
    );
  }
}

export default Holidays;
