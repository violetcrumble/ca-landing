import React from 'react';
import WhyClaytonBlurb from './WhyClaytonBlurb';
import Floorplan from '../../images/svg/Floorplan';
import Lightbulb from '../../images/svg/Lightbulb';
import PiggyBank from '../../images/svg/PiggyBank';
import SpeechBubble from '../../images/svg/SpeechBubble';

const WhyClayton = () => {

    const WhyClaytonContent = [
        {
            svg: <PiggyBank />,
            heading: 'Affordable',
            copy: ['By purchasing quality manufactured and modular home building materials in bulk at a reduced cost, ', <strong>we are able to pass the savings on to you</strong>, ' by offering reasonable, quality built housing options.']
        },
        {
            svg: <Lightbulb />,
            heading: 'Energy\u00A0Efficient',
            copy: ['We offer ENERGY STAR\u00AE certified homes with features like low-e windows, upgraded insulation and energy efficient light bulbs to ', <strong>help you save on energy costs.</strong>]
        },
        {
            svg: <Floorplan />,
            heading: 'Customizable',
            copy: ['We offer countless home upgrade options from brands you know and love like Congoleum\u00AE, Johns Mansville\u00AE and Moen\u00AE. ', <strong>Choose features that fit your lifestyle</strong>, ' to create the home of your dreams.']
        },
        {
            svg: <SpeechBubble />,
            heading: 'Exceptional\u00A0Customer\u00A0Service',
            copy: ['Our friendly and knowledgeable home consultants are eager to answer any questions you may have and are ', <strong>dedicated to offering you the personal attention</strong>, ' you deserve.']
        }
    ];

    let blurbNodes = WhyClaytonContent ? WhyClaytonContent.map((blurb, i) => {
        return (
            <WhyClaytonBlurb
              svg={blurb.svg}
              heading={blurb.heading}
              copy={blurb.copy}
              blurbId={i}
              key={i}
            />
        );
    }) : null;


      return (
            <div className="why-clayton">

                <h1>Why Choose&nbsp;Clayton?</h1>
                <p><strong>Since being founded in 1956</strong>, we have made it our mission to provide quality, affordable homes to families across the country. Our timeless passion, vision and values have never been stronger as we work to be <strong>America's largest, most reliable home builder.</strong></p>

                <div className="why-clayton-blurbs">
                    {blurbNodes}
                </div>


    <p className="disclaimer">Trademarks of companies other than Clayton belong to those other companies<br />
        ENERGY STAR and the ENERGY STAR mark are registered trademarks owned by the U.S. Environmental Protection Agency</p>
</div>
);

};

export default WhyClayton;
