const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@managers': path.resolve(__dirname, 'src/components/managers'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@llitems': path.resolve(__dirname, 'src/components/item/low-level'),
      '@item': path.resolve(__dirname, 'src/components/item/'),
      '@utils': path.resolve(__dirname, 'src/components/utils'),
    },
  },
};
