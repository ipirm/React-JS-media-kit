/* eslint max-len: [0] */
import patchMeta from 'libs/patch-meta';

export default patchMeta(({ translate }) => ({
  title: `${translate('ABOUT')} | Guarda`,
  url: '/about',
  description: translate('ABOUT_META_DESC'),
  keywords: translate('ABOUT_META_KEYWORDS'),
}));
