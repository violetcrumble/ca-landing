import React from 'react';
import LearnArticle from './LearnArticle';

import learn01 from '../../images/learn01.jpg';
import learn02 from '../../images/learn02.jpg';
import learn03 from '../../images/learn03.jpg';
import learn04 from '../../images/learn04.jpg';

const Learn = () => {

    const LearnContent = [
        {
            image: learn01,
            heading: 'Our Building Process',
            url: 'https://www.claytonhomes.com/our-building-process/?source=ConsumerAffairs'
        },
        {
            image: learn02,
            heading: 'Are Manufactured Homes a Good Investment?',
            url: 'https://www.claytonhomes.com/learn/home-investment/are-manufactured-homes-a-good-investment/?source=ConsumerAffairs'
        },
        {
            image: learn03,
            heading: 'What Comes Standard with a Clayton Built\u00AE Home?',
            url: 'https://www.claytonhomes.com/learn/home-buying/what-comes-standard-with-a-clayton-built-home/?source=ConsumerAffairs'
        },
        {
            image: learn04,
            heading: 'Roadmap to Being Rent Free',
            url: 'https://www.claytonhomes.com/learn/home-buying/how-to-be-rent-free/?source=ConsumerAffairs'
        }
    ];

    let articleNodes = LearnContent ? LearnContent.map((article, i) => {
        return (
            <LearnArticle
              image={article.image}
              heading={article.heading}
              url={article.url}
              key={i}
            />
        );
    }) : null;


      return (
            <div className="learn">
                <h6>Learn</h6>
                <div className="learn-articles">
                    {articleNodes}
                </div>
            </div>
);

};

export default Learn;
