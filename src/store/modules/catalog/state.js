/**
 * Catalog module state
 */

import config from '@/config';

export default {
  items: [],
  total: 0,
  search: '',
  currentPage: 1,
  pageSize: config.DEFAULT_PAGE_SIZE,
};
