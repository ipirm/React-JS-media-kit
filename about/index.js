import React, { Component } from 'react';
import { I18nText, withI18N } from 'libs/i18n';
import PropTypes from 'prop-types';
import SimplePage from 'components/specific/simple-page';
import meta from './meta';

class AboutPage extends Component {
  static propTypes = {
    i18n: PropTypes.object,
  };

  render() {
    return (
      <SimplePage meta={meta(this.props.i18n)}>
        <h2><I18nText id="ABOUT_US" /></h2>
        <I18nText id="ABOUT_TEXT_1" html />
        <I18nText id="ABOUT_LIST_1" html />
        <I18nText id="ABOUT_TEXT_2" html />
        <I18nText id="ABOUT_LIST_2" html />
        <I18nText id="ABOUT_TEXT_3" html />
        <I18nText id="ABOUT_TEXT_4" html />
        <I18nText id="ABOUT_TEXT_4_1" html />
        <I18nText id="ABOUT_LIST_3" html />
        <I18nText id="ABOUT_TEXT_5" html />
      </SimplePage>
    );
  }
}

export default withI18N(AboutPage);
