import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css'

const Dropdown = props => {
    var { options, onChangeHandler } = props;
    return (
        <select onChange={onChangeHandler} className="dropdown">
            <option value="" disabled selected>Sort by</option>
            {
                options.map((item, index) => {
                    return (
                        <option key={index} value={index}>{item.text}</option>
                    )
                })
            }
        </select>
    )
}
Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
}
export default Dropdown

