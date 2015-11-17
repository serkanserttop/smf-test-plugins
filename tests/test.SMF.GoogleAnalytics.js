var tests = tests || {};
tests.SMF_GoogleAnalytics = {
	checkIfInstalled: function(){
		var ga, isError = false;
		try {
			if(Device.deviceOS === 'Android') {
				ga = new SMFGoogleAnalytics("Landroid/content/Context;");    
			} else {
				ga = GAI.sharedInstance();
			}
		} catch(e) {
			isError = true;
			alert('Google Analytics plugin does not work');
		}
		if(!isError) {
			alert('Google Analytics plugin works');
		}
	}
};