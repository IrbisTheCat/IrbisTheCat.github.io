


$(document).ready(function(){
	$('img:first').click(function(){$('#overlay').toggle();});
});


window.onload = function() {

$("#middle").addClass("load");
$("#fader").addClass("load");

/**
$('.thumbnails').poptrox({
    onPopupClose: function() { $body.removeClass('is-covered'); },
    onPopupOpen: function() { $body.addClass('is-covered'); },
    baseZIndex: 10001,
    useBodyOverflow: false,
    usePopupEasyClose: true,
    overlayColor: '#000000',
    overlayOpacity: 0.75,
    popupLoaderText: '',
    fadeSpeed: 500,
    usePopupDefaultStyling: false
});*/
}

	/* Disable animations/transitions until everything's loaded.
    $body.addClass('is-loading');

    $window.on('load', function() {
        $body.removeClass('is-loading'
        );
    });
    */

/** Firebase pull */
$(function() {

    firebase.initializeApp({
        apiKey: "AIzaSyDQTZguhHBRpAIv6T_uy-L9xaesgTG1puE",
        authDomain: "irbissite-e97a2.firebaseapp.com",
        databaseURL: "https://irbissite-e97a2.firebaseio.com",
        projectId: "irbissite-e97a2",
        storageBucket: "irbissite-e97a2.appspot.com",
        messagingSenderId: "249476234859"
      });

      // Initialize Cloud Firestore through Firebase
      var db = firebase.firestore();

      db.collection("Posts").get().then((querySnapshot) => {
				var counter=1;
        querySnapshot.forEach((doc) => {
					  $('#pagintion').append("<li class='page-item'><a class='page-link' href='#' onclick=fff(event) data-c='" + counter + "'>" + counter + "</a></li>");
            $('#main').append("<div id='blogblock' data-c='" + counter + "' class='d-none'>"+"<h3 class='card-title'>" + doc.data().Title + "</h3>"+"<p class='card-text'>" + doc.data().Body + "</p>"+"</div>");
						++counter;
        }
			);
							show(1);
    });


});

function fff(event) { hideAll(); show(event.target.dataset["c"]); event.preventDefault();}
function hideAll() { $('#main>div').addClass('d-none')}
function show(c) {
	$('#main>div[data-c=' +c +']').toggleClass('d-none');
}
