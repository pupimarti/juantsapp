import React from 'react'
import './css.css';
import getDateString from 'components/services/getDateString';

export default function index(props) {
    return (
        <div className="content-chat-day">
            <p className="chat-day">{getDateString(props.time)}</p>
        </div>
    )
}
