import React from 'react';

import Waypoint from 'react-waypoint';

const WhyClaytonBlurb = (
    {svg,
     heading,
     copy,
     blurbId
    }) => (

     <div className="why-clayton-blurb" id={blurbId}>
         <div className="why-clayton-circle">
             {svg}
         </div>
         <h4>{heading}</h4>
         <p>{copy}</p>
         <Waypoint onEnter={() => {
             var element = document.getElementById(blurbId);
             element.classList.add('blurb-' + blurbId);
         }} />
     </div>

);

export default WhyClaytonBlurb;
