SMF.Facebook = function() {
	var singleton;
	var slice = Array.prototype.slice;


	if(false) {

	}

	return {
		openSession: openSession

	};

	function openSession() {
		var fn = (isAndroid()) ? 'openSession': 'openSessionOnSuccessOnError';
		fn.apply(getInstance(), arguments);
	}

	function createInstance() {
		if (isAndroid()) {
			singleton = SMFFacebook('Landroid/app/Activity');
		} else {
			singleton = new FBClass();
		}
	}

	function getInstance() {
		if(!singleton) {
			createInstance();
		}
		return singleton;
	}

	function isAndroid() {
		if (Device.deviceOS === 'Android') {
			return true;
		}
		return false;
	}
}

if (Device.deviceOS === "IDE") {
	// function SMFFacebook(activity) {};
	// SMFFacebook.prototype.openSession = function openSession(permissions, onSuccess, onError) {};
	// SMFFacebook.prototype.userDetails = function userDetails(onSuccess, onError) {};
	// SMFFacebook.prototype.getFriendsList = function getFriendsList(onSuccess, onError) {};
	// SMFFacebook.prototype.postStatusUpdate = function postStatusUpdate(message, onSuccess, onError) {};
	// SMFFacebook.prototype.showFriendsPicker = function showFriendsPicker(multiSelection, onSuccess, onCancel, onError) {};
	// SMFFacebook.prototype.closeSession = function closeSession() {};
	// SMFFacebook.prototype.isSessionActive = function isSessionActive() {};
}