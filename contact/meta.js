/* eslint max-len: [0] */
import patchMeta from 'libs/patch-meta';

export default patchMeta(({ translate }) => ({
  title: `${translate('CONTACT')} | Guarda`,
  url: '/contact',
  keywords: translate('CONTACT_META_KEYWORDS'),
  description: translate('CONTACT_META_DESC'),
}));
