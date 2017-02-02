## [pbp](http://192.168.150.223:8080/docs/pbp.git) - Pentaho dashboards boilerplate

A way to develop Pentaho dashboard using a external IDE

***

### Quick Start

Install node.js and then:

```sh
$ git clone git://github.com/nohros/pdbp
$ cd pdbp
$ sudo npm -g install gulp
$ npm install
$ bower install
```

Finally, open `file:///path/to/pdbp/build/dashboard.html` in your browser.

Happy hacking!

### Purpose

`pdbp` is designed to make life easy by providing a basic framework with which
to kickstart Pentaho Dashboard design.

### Learn

#### Overall directory structure

At high level, the structure looks roughly like this:

```
pdbp/
  |- src/
  |- |- pentaho/
  |- vendor/
  |- .bowerrc
  |- bower.json
  |- build.config.js
  |- package.json
```

What follows is a brief description of each entry, but most directories contain
their own ``README.md`` file with additional documentation, so browse around to
learn more.