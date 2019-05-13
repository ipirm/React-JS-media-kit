import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { withI18N } from 'libs/i18n';
import DocumentMeta from 'react-document-meta';
import Header from 'components/specific/header';
import LatestNews from 'components/specific/latest-news';
import FounderReview from 'components/specific/founder-review';
import Reviews from 'components/specific/reviews';
import Footer from 'components/specific/footer';
import Poster from './components/poster';
import LetsStarted from './components/lets-started';
import LandingPage from './components/landing-pages';
import meta from './meta';

class WebWalletPageLanding extends Component {
  static propTypes = {
    i18n: PropTypes.object,
  };

  render() {
    return (
      <DocumentMeta extend {...meta(this.props.i18n)}>
        <Fragment>
          <Header />
          <Poster />
          <FounderReview />
          <LandingPage />
          <LetsStarted />
          <Reviews />
          <LatestNews />
          <Footer />
        </Fragment>
      </DocumentMeta>
    );
  }
}

export default withI18N(WebWalletPageLanding);
