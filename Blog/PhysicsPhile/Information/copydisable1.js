$(document).ready(function() {
	$('body').bind('cut copy paste', function (e) {
		e.preventDefault();
	})
	$(".code").on("contextmenu", function(e) {
	/* change the ".code" to "body" to disable all the part. otherwise it will disable only where class="code" will be mentioned in html body part. */
		return false;
	})
})
