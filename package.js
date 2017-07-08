
Package.describe({
  name: 'workturbo:meteor-unveil2',
  summary: 'A very lightweight jQuery plugin to lazy load images',
  version: '0.0.1',
  git: 'https://github.com/johnantoni/meteor-unveil',
  documentation: 'README.md'
});

Npm.depends({
    "unveil2": "2.0.7"
})

Package.onUse(function(api) {
  api.use(['jquery', 'ecmascript'], 'client')
  api.addFiles([
    'dist/unveil2.min.js'
  ], ['client']);
});
