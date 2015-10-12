// Author - Chandan Pednekar
// Created on - 27.09.2015





// Show/ Hide detailed info when clicked on face photo
$('#the-team div.img').on('click', function(){
	// If user clicked on profile small photo
	if( $(this).parent().hasClass('profile-sm') ){
		// Hide small profiles
		$('#the-team div.profile-sm').css('display', 'none');

		// Set the detailed profile image, name and qualifications
		$('#the-team div.profile-detail div.img').css('background-image', $(this).css('background-image'));
		$('#the-team div.profile-detail h4').text( $(this).parent().find('h4').text() );
		$('#the-team div.profile-detail div.qual').html( $(this).parent().find('div.qual').html() );
		var parentId = $(this).parent().attr('id');
		// First display all elements which are hidden in css to save space
		$('#the-team div.profile-detail div.img').css('display', 'block');
		$('#the-team div.profile-detail h4').css('display', 'block');
		$('#the-team div.profile-detail div.qual').css('display', 'block');
		 // First display all paragraphs. Then hide which are not required
		$('#the-team div.profile-detail p').css('display', 'block');
		if(	parentId == 'vrp' ){
			$('#the-team div.profile-detail p:not(.detail-vrp)').css('display', 'none');
		}
		else if ( parentId == 'rrp' ){
			$('#the-team div.profile-detail p:not(.detail-rrp)').css('display', 'none');
		}
		else if ( parentId == 'da' ){
			$('#the-team div.profile-detail p:not(.detail-da)').css('display', 'none');
		}

		// Display detailed profile
		$('#the-team div.profile-detail').toggleClass('display');
		// Scroll to top of team container section to be viewed properly on mobiles
		$('html, body').animate( { scrollTop: $('div.team-container').offset().top }, 500);

	}
	else if ( $(this).parent().hasClass('profile-detail') ){
		// Toggle display class
		$('#the-team div.profile-detail').toggleClass('display');

		// Hide everthing in detail profile
		$('#the-team div.profile-detail div.img').css('display', 'none');
		$('#the-team div.profile-detail h4').css('display', 'none');
		$('#the-team div.profile-detail div.qual').css('display', 'none');
		$('#the-team div.profile-detail p').css('display', 'none');

		// Display small profiles
		$('#the-team div.profile-sm').css('display', 'block');
		// Scroll to top of 'the-team' section
		$('html, body').animate( { scrollTop: $('#the-team').offset().top }, 500); 
	}
		
});



// Show/ Hide project detail on image click
$('#projects div[class*="proj-"]').click(function(){
	// Display <span> immediately following the image
	( $(this).find('span') ).toggleClass('show-detail');
});



// Animate page scroll
$('a[rel="relativeanchor"]').click(function(){
	$('html, body').animate({
	    scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 500);
	return false;
}); 


// Show/ hide menu using toggle
$('#nav-toggle + label').click(function(){
	if( $('#nav-toggle').checked ){
		$('#nav-toggle').prop('checked', false);		
	}else{
		$('#nav-toggle').prop('checked', true);		
	}
	$('#nav').toggleClass('expand');
});

// Hide mobile menu when user clicked on link
$('#nav a').each(function(){
	$(this).on('click', function(){
		// If next element is ul then expand/ collapse. Return false to break out of func and stop link activation
		// or else visit link and collapse primary navigation
		if( $(this).next().is('ul') ){
			if( $(this).next().is(':visible') ){
				$(this).next().slideUp();
			}
			else{
				$(this).next().slideDown();
			}
			return false;	
		}
		else{
			$('#nav-toggle').prop('checked', false);
			$('#nav').toggleClass('expand');
		}

		// Visit link and collpase all open submenus. Return true for link activation
		$('#nav ul ul').slideUp();
		return true;
	});	
});

