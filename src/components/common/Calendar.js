import React from "react";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = (dateFilter, handleFilterChange, inline) => {
    return (
        <DatePicker
            selected={new Date()}
            onChange={handleFilterChange}
            inline={inline}
        />
    );
};

Calendar.propTypes = {
    dateFilter: PropTypes.instanceOf(Date).isRequired,
    handleFilterChange: PropTypes.func.isRequired,
    inline: PropTypes.bool
};

Calendar.defaultProps = {
    inline: false
}

export default Calendar;