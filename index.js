var APP_GLOBALS = {
	"GA_TRACKING_ID": "UA-70242949-1",
	"BASE_URL": "https://raw.githubusercontent.com/serkanserttop/smf-test-plugins/master/"
};

load(APP_GLOBALS.BASE_URL + 'Facebook/SMF.Facebook.js');
load(APP_GLOBALS.BASE_URL + 'GoogleAnalytics/SMF.GoogleAnalytics.js');
load(APP_GLOBALS.BASE_URL + 'tests/test.SMF.Facebook.js');
load(APP_GLOBALS.BASE_URL + 'tests/test.SMF.GoogleAnalytics.js');
load(APP_GLOBALS.BASE_URL + 'Pages/Page1.js');

// alert('works');