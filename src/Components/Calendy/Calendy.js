import React from 'react';
import './Calendy.css';
import { InlineWidget } from 'react-calendly';

const Calendy = () => {
    return (
        <div className='calender-container'>
            <div className='calender-headings'>
                <p>Mkae sure before you join the meeting, <br />you have all the necessary documents or reference you would like to show me or share with me</p>
            </div>
            <div className='calendy-calender'>
                <InlineWidget url="https://calendly.com/tiharoy4/test?hide_event_type_details=1&hide_gdpr_banner=1&background_color=080808&text_color=fefdfd&primary_color=ff0029" style="min-width:320px;height:630px;" />
            </div>
        </div>
    )
}

export default Calendy;