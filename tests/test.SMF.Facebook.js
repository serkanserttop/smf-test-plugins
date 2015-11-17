var tests = tests || {};
tests.SMF_Facebook = {
	checkIfInstalled: function(){
		var fb, isError = false;
    try {
        if(Device.deviceOS === 'Android') {
            fb = SMFFacebook('Landroid/app/Activity');
        } else {
            fb = new FBClass();
        }
    } catch(e) {
        isError = true;
        alert('Facebook plugin does not work');
    }
    if(!isError) {
        alert('Facebook plugin works');
    }
	}
};