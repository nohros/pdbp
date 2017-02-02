
/**
 * Pentaho has a require-js config file for each of its core plugins. We will
 * adjust it for our needs, since its is a simulated environment.
 **/
var FULL_QUALIFIED_URL = 'http://192.168.203.136:8001';

var CONTEXT_PATH = FULL_QUALIFIED_URL + '/pentaho/';

var SERVER_PROTOCOL = 'http';

// Providing name for context
var PENTAHO_CONTEXT_NAME = 'cdf';

// Providing active theme
var active_theme = 'sapphire';

var requireCfg = {
  waitSeconds: 30,
  baseUrl: CONTEXT_PATH,
  paths: {},
  shim: {},
  map: {"*": {}},
  bundles: {},
  config: {"pentaho/service": {}},
  packages: []
};

// Injecting web resources defined in by plugins as external-resources for: requirejs
document.write("<script language='javascript' type='text/javascript' src='"+CONTEXT_PATH + "content/sparkl/resources/sparkl-require-js-cfg.js?context=cdf&requireJsOnly=true'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='"+CONTEXT_PATH + "content/reporting/reportviewer/reporting-require-js-cfg.js?context=cdf&requireJsOnly=true'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='"+CONTEXT_PATH + "content/pentaho-cdf-dd/js/cde-require-js-cfg.js?context=cdf&requireJsOnly=true'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='"+CONTEXT_PATH + "content/pentaho-cdf/js/cdf-require-js-cfg.js?context=cdf&requireJsOnly=true'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='"+CONTEXT_PATH + "js/require-js-cfg.js?context=cdf&requireJsOnly=true'></scr"+"ipt>");
document.write("<script language='javascript' type='text/javascript' src='"+CONTEXT_PATH + "content/common-ui/resources/web/common-ui-require-js-cfg.js?context=cdf&requireJsOnly=true'></scr"+"ipt>");

// Providing name for session
var SESSION_NAME = 'neylor.silva';

// Providing computed Locale for session
var SESSION_LOCALE = 'en_US';

// Providing home folder location for UI defaults
if (typeof(pen) != 'undefined' && pen.define) {
  pen.define('Locale', {locale:'pt_BR'})
};
var HOME_FOLDER = '/home/neylor.silva';
var RESERVED_CHARS = "\/\\\t\r\n";
var RESERVED_CHARS_DISPLAY = "\/, \\, \\t, \\r, \\n";
var RESERVED_CHARS_REGEX_PATTERN = /.*[\/\\\t\r\n]+.*/;
