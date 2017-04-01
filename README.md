# Wikidata-CLI
The [Command-line interface](https://en.wikipedia.org/wiki/Command-line_interface) interface to [Wikidata](https://wikidata.org)

[![wikidata](https://raw.githubusercontent.com/maxlath/wikidata-sdk/master/assets/wikidata.jpg)](https://wikidata.org)

[![NPM](https://nodei.co/npm/wikidata-cli.png?stars&downloads&downloadRank)](https://npmjs.com/package/wikidata-cli/) [![NPM](https://nodei.co/npm-dl/wikidata-cli.png?months=6&height=3)](https://npmjs.com/package/wikidata-cli/)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node](https://img.shields.io/badge/node-%3E=%20v6-brightgreen.svg)](http://nodejs.org)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Summary
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Dependencies](#dependencies)
- [Installation](#installation)
- [Commands](#commands)
  - [Read operations](#read-operations)
  - [Write operations](#write-operations)
  - [Config](#config)
- [See Also](#see-also)
- [You may also like](#you-may-also-like)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Dependencies
* [NodeJs](https://nodejs.org)
(recommended way to install it: use the awesome [NVM](https://github.com/creationix/nvm))

## Installation
```sh
npm install -g wikidata-cli
```
Installing globally allows to make the command `wd` accessible from your shell `$PATH`

## Commands

### Read operations
see [Read operations](docs/read_operations.md)

![wd summary Q1](https://cloud.githubusercontent.com/assets/1596934/24504647/5b17135c-1557-11e7-971e-b13648bdc604.gif)

### Write operations
see [Write operations](docs/write_operations.md)

### Config
Allows to persist options

see [Config](docs/config.md)

## See Also
* [wikidata-sdk](https://www.npmjs.com/package/wikidata-sdk): A javascript tool suite to query and work with Wikidata data, heavily used by wikidata-cli
* [wikidata-edit](https://www.npmjs.com/package/wikidata-edit): Edit Wikidata from NodeJS, used in wikidata-cli for all [write operations](docs/write-operations)
* [wikidata-filter](https://npmjs.com/package/wikidata-filter): A command-line tool to filter a Wikidata dump by claim
* [wikidata-subset-search-engine](https://github.com/inventaire/wikidata-subset-search-engine): Tools to setup an ElasticSearch instance fed with subsets of Wikidata
* [wikidata-taxonomy](https://github.com/nichtich/wikidata-taxonomy): A command-line tool to extract taxonomies from Wikidata
* [import-wikidata-dump-to-couchdb](https://github.com/maxlath/import-wikidata-dump-to-couchdb): Import a subset or a full Wikidata dump into a CouchDB database
* [Other Wikidata external tools](https://www.wikidata.org/wiki/Wikidata:Tools/External_tools)

## You may also like

[![inventaire banner](https://inventaire.io/public/images/inventaire-brittanystevens-13947832357-CC-BY-lighter-blue-4-banner-500px.png)](https://inventaire.io)

Do you know [inventaire.io](https://inventaire.io/)? It's a web app to share books with your friends, built on top of Wikidata! And its [libre software](http://github.com/inventaire/inventaire) too.

## License
[MIT](LICENSE.md)
