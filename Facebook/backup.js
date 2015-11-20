function SMF_FB_SCB() {
	if(_GLOBAL_SMF_FB_INSTANCE) {
		return _GLOBAL_SMF_FB_INSTANCE;
	}
	if (Device.deviceOS === 'Android') {
		_GLOBAL_SMF_FB_INSTANCE = new SMFFacebook('Landroid/app/Activity;');
	} else {
		_GLOBAL_SMF_FB_INSTANCE = new FBClass();
	}
	return _GLOBAL_SMF_FB_INSTANCE;
};
SMF_FB_SCB.prototype.smf_openSession = function(permissions, onSuccess, onError){
	// alert('using single codebase');
	// alert(typeof this.__smf__fb);
	var fn = (Device.deviceOS === 'Android') ? 'openSession' : 'openSessionOnSuccessOnError';
	// alert(fn);
	// alert(Object.keys(this.__smf__fb));
	// alert(fn, typeof this.__smf__fb[fn]);
	_GLOBAL_SMF_FB_INSTANCE[fn](permissions, onSuccess, onError);
};
SMF_FB_SCB.prototype.smf_userDetails = function(onSuccess, onError){
	// alert('using single codebase');
	var fn = (Device.deviceOS === 'Android') ? 'userDetails' : 'userDetailsOnSuccessOnError';
	_GLOBAL_SMF_FB_INSTANCE[fn](onSuccess, onError);
};
SMF_FB_SCB.prototype.smf_getFriendsList = function(onSuccess, onError){
	// alert('using single codebase');
	var fn = (Device.deviceOS === 'Android') ? 'getFriendsList' : 'getFriendsListOnSuccessOnError';
	_GLOBAL_SMF_FB_INSTANCE[fn](onSuccess, onError);
};
SMF_FB_SCB.prototype.smf_postStatusUpdate = function(message, onSuccess, onError){
	// alert('using single codebase');
	var fn = (Device.deviceOS === 'Android') ? 'postStatusUpdate' : 'postStatusUpdateOnSuccessOnError';
	_GLOBAL_SMF_FB_INSTANCE[fn](message, onSuccess, onError);
};
SMF_FB_SCB.prototype.smf_showFriendsPicker = function(multiSelection, onSuccess, onCancel, onError){
	// alert('using single codebase');
	var fn = (Device.deviceOS === 'Android') ? 'showFriendsPicker' : 'showFriendPickerOnSelectedOnCancelledOnError';
	_GLOBAL_SMF_FB_INSTANCE[fn](multiSelection, onSuccess, onCancel, onError);
};
SMF_FB_SCB.prototype.smf_closeSession = function(){
	// alert('using single codebase');
	_GLOBAL_SMF_FB_INSTANCE[fn]();
};
SMF_FB_SCB.prototype.smf_isSessionActive = function(){
	// alert('using single codebase');
	_GLOBAL_SMF_FB_INSTANCE[fn]();
};

// var slice = Array.prototype.slice;