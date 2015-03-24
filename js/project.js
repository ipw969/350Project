//Modal tutorial: http://www.jacklmoore.com/notes/jquery-modal-tutorial/

var modal = (function() {
	var method = {},
	$overlay,
	$modal,
	$content,
	$saveButton,
	$cancelButton;
	
	//Append to the html
	$overlay = $('save-region-modal');
	$modal = $('modal-dialog');
	$content = $('modal-content');
	$saveButton = $('save-button');
	$cancelButton = $('close-button');
	
	//$modal.hide();
	$overlay.hide();
	//$modal.append($content, $saveButton, $cancelButton);
	
	$(document).ready(function(){
		//$('body').append($overlay,$modal);
		//$('body').append($modal);
	});
	
	// Center the modal in the viewport
    method.center = function () {
		var top, left;
		
		top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
		left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;
		
		$modal.css({
			top: top + $(window).scrollTop,
			left: left + $(window).scrollLeft()
		});
	};

    // Open the modal
		method.open = function (settings) {
		$content.empty().append(settings.content);

		$modal.css({
			width: settings.width || 'auto', 
			height: settings.height || 'auto'
		})

		method.center();

		$(window).bind('resize.modal', method.center);

		$modal.show();
		$overlay.show();
	};

    // Close the modal
    method.close = function () {
		$modal.hide();
		$overlay.hide();
		$content.empty();
		$(window).unbind('resize.modal');

	};
	
	$cancelButton.click(function(e) {
		e.preventDefault();
		method.close();
	})

    return method;
}());