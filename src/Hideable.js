import React from 'react';
import { checkPropTypes } from 'prop-types';

export default function Hideable (Component){
    return(props) => {
        const ownProps = { ...props };
        delete ownProps.isHidden;
        const style = {
            display: props.isHidden ? 'none' : 'block',
        }
        return(
            <div style={style}>
                <Component { ...ownProps } />
            </div>
        )
    }
}