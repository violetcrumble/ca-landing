import React from 'react';
import FooterModal from './FooterModal';

const Footer = () => {

    const FooterContent = [
        {
            label: 'Privacy Policy',
            url: 'https://www.claytonhomes.com/privacy?source=ConsumerAffairs'
        },
        {
            label: 'Legal',
            url: 'https://www.claytonhomes.com/legal?source=ConsumerAffairs'
        }
    ];

    let footerContentNodes = FooterContent ? FooterContent.map((footerLink, i) => {
        return (
            <FooterModal
                label={footerLink.label}
                url={footerLink.url}
                key={i}
            />
        );
    }) : null;


    return (
        <footer>
            <div>&copy; 2018 CMH Services, Inc. All rights reserved.</div>
            {footerContentNodes}
        </footer>
    );

};

export default Footer;