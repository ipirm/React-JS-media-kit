/* eslint max-len: [0], react/no-unescaped-entities: [0] */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { withI18N } from 'libs/i18n';
import I18nText from 'libs/i18n/text';
import SimplePage from 'components/specific/simple-page';
import meta from './meta';
import styles from './styles.css';

class MediaKit extends Component {
  static propTypes = {
    i18n: PropTypes.object,
  }

  render() {
    return (
      <SimplePage meta={meta(this.props.i18n)} isRenderWebView>
        <h2>
          <I18nText id="MEDIA_KIT" />
        </h2>
        <h3>
          <I18nText id="LOGOTYPES" />
        </h3>
        <div className={styles.mediaContainer}>
          <div className={styles.mediaItem}>
            <div className={cn(styles.mediaElement, styles.logotypeImage)}>
              <img src="/assets/media/guarda-logo-black.svg" alt="Guarda logotype" />
            </div>
            <div className={styles.linksBlock}>
              <span><I18nText id="DOWNLOAD" />:</span>
              <a href="/assets/media/guarda-logo-black.svg" download>SVG</a>
              <a href="/assets/media/guarda-logo-black.png" download>PNG</a>
            </div>
          </div>
          <div className={styles.mediaItem}>
            <div className={cn(styles.mediaElement, styles.logotypeImage)}>
              <img src="/assets/media/guarda-logo.svg" alt="Guarda logotype" />
            </div>
            <div className={styles.linksBlock}>
              <span><I18nText id="DOWNLOAD" />:</span>
              <a href="/assets/media/guarda-logo.svg" download>SVG</a>
              <a href="/assets/media/guarda-logo.png" download>PNG</a>
            </div>
          </div>
          <div className={styles.mediaItem}>
            <div className={cn(styles.mediaElement, styles.logotypeImage)}>
              <img src="/assets/media/guarda-shield-logo-black.svg" alt="Guarda logotype" />
            </div>
            <div className={styles.linksBlock}>
              <span><I18nText id="DOWNLOAD" />:</span>
              <a href="/assets/media/guarda-shield-logo-black.svg" download>SVG</a>
              <a href="/assets/media/guarda-shield-logo-black.png" download>PNG</a>
            </div>
          </div>
          <div className={styles.mediaItem}>
            <div className={cn(styles.mediaElement, styles.logotypeImage)}>
              <img src="/assets/media/guarda-shield-logo.svg" alt="Guarda logotype" />
            </div>
            <div className={styles.linksBlock}>
              <span><I18nText id="DOWNLOAD" />:</span>
              <a href="/assets/media/guarda-shield-logo.svg" download>SVG</a>
              <a href="/assets/media/guarda-shield-logo.png" download>PNG</a>
            </div>
          </div>
        </div>
        <h3>
          <I18nText id="SCREENSHOTS" />
        </h3>
        <div className={styles.mediaContainer}>
          <div className={styles.mediaItem}>
            <div className={styles.mediaElement}>
              <img src="/assets/media/screenshot-1.png" alt="Guarda main page" />
            </div>
            <div className={styles.linksBlock}>
              <span><I18nText id="DOWNLOAD" />:</span>
              <a href="/assets/media/screenshot-1.png" download>PNG</a>
            </div>
          </div>
          <div className={styles.mediaItem}>
            <div className={styles.mediaElement}>
              <img src="/assets/media/screenshot-2.png" alt="Guarda web multiwallet" />
            </div>
            <div className={styles.linksBlock}>
              <span><I18nText id="DOWNLOAD" />:</span>
              <a href="/assets/media/screenshot-2.png" download>PNG</a>
            </div>
          </div>
          <div className={styles.mediaItem}>
            <div className={styles.mediaElement}>
              <img src="/assets/media/screenshot-3.png" alt="Guarda exchange" />
            </div>
            <div className={styles.linksBlock}>
              <span><I18nText id="DOWNLOAD" />:</span>
              <a href="/assets/media/screenshot-3.png" download>PNG</a>
            </div>
          </div>
        </div>
      </SimplePage>
    );
  }
}

export default withI18N(MediaKit);
