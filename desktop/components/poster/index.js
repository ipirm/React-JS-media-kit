import React, { Component } from 'react';
import Poster from 'components/specific/poster';
import I18nText from 'libs/i18n/text';
import StoreButtons from '../store-buttons';
import styles from './styles.css';
import IconCloud from './icon-cloud.svg';

class PosterComponent extends Component {
  render() {
    return (
      <Poster className={styles.poster}>
        <div className="col-xs-5">
          <h1>
            <I18nText id="DESKTOP_WALLET_TITLE" html />
          </h1>
          <div className={styles.blocks}>
            <p>
              <I18nText id="DESKTOP_WALLET_TEXT" html />
            </p>
            <p className={styles.downloadNow}>
              <img src={IconCloud} alt="" />
              <I18nText id="DOWNLOAD_WALLET_NOW" />
            </p>
            <StoreButtons />
          </div>
        </div>
        <div className="col-xs-6 col-xs-offset-1">
          <div className={styles.webWalletImage} />
        </div>
      </Poster>
    );
  }
}


export default PosterComponent;
