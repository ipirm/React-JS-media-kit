import React, { Component } from 'react';
import I18nText from 'libs/i18n/text';
import Poster from 'components/specific/poster';
import StoreButtons from '../store-buttons';

import styles from './styles.css';
import IconCloud from './icon-cloud.svg';

class LetsStarted extends Component {
  render() {
    return (
      <Poster className={styles.wrapper}>
        <div className="col-xs-12">
          <h2 className={styles.title}>
            <I18nText id="DESKTOP_LETS_GO_TITLE" html />
          </h2>
          <p className={styles.text}>
            <I18nText id="DESKTOP_LETS_GO_TEXT" />
          </p>
          <p className={styles.downloadNow}>
            <img src={IconCloud} alt="" />
            <I18nText id="DOWNLOAD_WALLET_NOW" />
          </p>
          <div className={styles.wrapperButtons}>
            <StoreButtons />
          </div>
        </div>
      </Poster>
    );
  }
}

export default LetsStarted;
