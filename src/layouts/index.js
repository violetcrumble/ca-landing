import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../styles/index.scss';

const TemplateWrapper = ({ children }) => (
  <div id="App">
    <Helmet
        title="Clayton Homes: Consumer Affairs"
        meta={[
            { name: 'description', content: 'Clayton Homes Consumer Affairs' },
            { name: 'keywords', content: 'clayton homes, maryville, tennessee, consumer affairs' },
            { name: 'robots', content: 'nofollow'}
          ]}
    />
    <Header />
    <div>
      {children()}
    </div>
    <Footer />

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
