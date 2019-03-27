import PropTypes from 'prop-types';
import React from 'react';
import './Card.css'

const Card = props => {
    const {to, from, price, date} = props;
    return (
        <div className='card'>
        <table>
            <tbody>
            <tr>
                <td>To:{to}</td>
                <td>From:{from}</td>
                <td>Price:{price}</td>
            </tr>
            <tr>
                <td>Date:{date}</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}
Card.propTypes = {
    to: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

export default Card;