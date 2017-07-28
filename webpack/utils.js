const fs = require('fs');
const path = require('path');

module.exports = {
    parseVersion,
    root,
    isExternalLib
};

const parseString = require('xml2js').parseString;
// return the version number from `pom.xml` file
function parseVersion() {
    let version = '1.0.0'
    if (version === null) {
        throw new Error('pom.xml is malformed. No version is defined');
    }
    return version;
}

const _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [_root].concat(args));
}

function isExternalLib(module, check = /node_modules/) {
    const req = module.userRequest;
    if (typeof req !== 'string') {
        return false;
    }
    return req.search(check) >= 0;
}
