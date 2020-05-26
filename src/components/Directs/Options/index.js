import React from 'react';
import './css.css';

export default function Options(props) {
    return (
        <div className="content-options">
            {props.options && props.options.map((o) => (
            <div className="option">
                <p className="option-text">{o.name}</p>
            </div>
            ))}
        </div>
    )
}
