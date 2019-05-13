import React, { Component } from 'react';
import I18nText from 'libs/i18n/text';
import Poster1 from './poster-1.png';
import Poster2 from './poster-2.png';
import styles from './styles.css';

export default class LandingPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className="container">
          <div className="row align-middle">
            <div className="col-xs-6">
              <img src={Poster1} alt="" className={styles.posterImage} />
            </div>
            <div className="col-xs-5 col-xs-offset-1">
              <h2>
                <I18nText id="DESKTOP_LANDING_TITLE_1" html />
              </h2>

              <p>
                <I18nText id="DESKTOP_LANDING_TEXT_1" />
              </p>
            </div>
          </div>
          <div className={styles.rowSeparator} />
          <div className="row align-middle">
            <div className="col-xs-5">
              <h2>
                <I18nText id="DESKTOP_LANDING_TITLE_2" html />
              </h2>
              <p>
                <I18nText id="DESKTOP_LANDING_TEXT_2" />
              </p>
            </div>
            <div className="col-xs-6 col-xs-offset-1">
              <img src={Poster2} alt="" className={styles.posterImage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
