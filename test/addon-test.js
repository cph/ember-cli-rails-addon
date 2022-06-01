var Addon = require('../index');

QUnit.module('Addon index');

QUnit.test('included with default options', function() {
  var app = {
    options: {},
  };

  Addon.included(app);

  QUnit.assert.ok(!app.options.storeConfigInMeta, 'disables storing config in `<meta>`');
  QUnit.assert.ok(app.options.fingerprint.generateAssetMap, 'generates `assetMap.json`');
});

QUnit.test('overrides options', function() {
  var app = {
    options: {
      storeConfigInMeta: true,
      fingerprint: {
        generateAssetMap: false,
      }
    },
  };

  Addon.included(app);

  QUnit.assert.ok(!app.options.storeConfigInMeta, 'disables storing config in `<meta>`');
  QUnit.assert.ok(app.options.fingerprint.generateAssetMap, 'generates `assetMap.json`');
});
