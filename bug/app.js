var APP_GLOBALS = {
	"GA_TRACKING_ID": "UA-70242949-1",
	"BASE_URL": ""
};
var GLOBAL_FB;
/*
var isError = false;
try {
	if(Device.deviceOS === 'Android') {
		alert('initializing Android Facebook plugin');
		GLOBAL_FB = new SMFFacebook('Landroid/app/Activity;');
  	} else {
  		alert('initializing iOS Facebook plugin');
		GLOBAL_FB = new FBClass();
  	}
} catch(e) {
	isError = true;
	alert('Facebook plugin does not work');
}
if(!isError) {
	// GLOBAL_FB = fb;
	alert('Facebook plugin works');
}
*/
load(APP_GLOBALS.BASE_URL + 'test_SMF_Facebook.js');
load(APP_GLOBALS.BASE_URL + 'test_SMF_Facebook_Android.js');
load(APP_GLOBALS.BASE_URL + 'PageInitial.js');