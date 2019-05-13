import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { withI18N, I18nText } from 'libs/i18n';
import DocumentMeta from 'react-document-meta';
import cn from 'classnames';
import Header from 'components/specific/header';
import Footer from 'components/specific/footer';
import SocialIcons from 'components/specific/social-icons';
import styles from './styles.css';
import meta from './meta';

class ContactPage extends Component {
  static propTypes = {
    i18n: PropTypes.object,
  }

  render() {
    return (
      <DocumentMeta {...meta(this.props.i18n)} extend>
        <Fragment>
          <Header isBackground />
          <div className={cn('container', styles.wrapper)}>
            <div className="row">
              <div className="col-xs-5">
                <h1 className={styles.titleH1}><I18nText id="CONTACT" /></h1>
                <p className={cn(styles.description, styles.titleDescription)}>
                  <I18nText id="CONTACT_PAGE_DESC" />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3">
                <h2 className={styles.titleH2}><I18nText id="FOR_ALL" /></h2>
                <p className={styles.description}>
                  <a href="mailto: hello@guarda.co">hello@guarda.co</a>
                </p>
              </div>
              <div className="col-xs-3">
                <h2 className={styles.titleH2}><I18nText id="FOR_PRESS" /></h2>
                <p className={styles.description}>
                  <a href="mailto: pr@guarda.co">pr@guarda.co</a>
                </p>
              </div>
              <div className="col-xs-3">
                <h2 className={styles.titleH2}><I18nText id="FOR_PARTNERS" /></h2>
                <p className={styles.description}>
                  <a href="mailto: pr@guarda.co">partners@guarda.co</a>
                </p>
              </div>
              <div className="col-xs-3">
                <h2 className={styles.titleH2}><I18nText id="FOR_CUSTOMER_SUPPORT" /></h2>
                <p className={styles.description}>
                  <a href="https://guarda.freshdesk.com/" target="_blank" rel="noreferrer noopener">
                    guarda.freshdesk.com
                  </a>
                </p>
              </div>
              <div className="col-xs-6">
                <div className={styles.wrapperSocial}>
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
          <Footer isBackground />
        </Fragment>
      </DocumentMeta>
    );
  }
}

export default withI18N(ContactPage);
