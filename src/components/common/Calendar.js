import React from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = (dateFilter, handleFilterChange) => {
    return (
        <DatePicker
            selected={new Date()}
            onChange={handleFilterChange}
        />
    );
};

Calendar.propTypes = {
    dateFilter: PropTypes.instanceOf(Date).isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default Calendar;