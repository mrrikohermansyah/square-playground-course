import React from 'react';
import PropTypes, { element } from 'prop-types';
import './Square.css';

export default function SimpleSquare ({size, color}) {
    const sizeWithpx = `${size}px`; 
    const style = {
        width: sizeWithpx,
        height: sizeWithpx,
        backgroundColor: color,
    };
    return(
        <div style={style} className="Square">
        </div>
            
    );
} 

SimpleSquare.propTypes = {
    color: PropTypes.string,
    size: PropTypes.number.isRequired,
};

SimpleSquare.defaultProps = {
    color:'grey'
};