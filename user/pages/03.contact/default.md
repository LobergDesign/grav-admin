---
title: Kontakt
---

<style type="text/css">
    /* Set a size for our map container, the Google Map will take up 100% of this container */
    #map {
        width: 100%;
        height: 500px;
    }
</style>
<script>
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDSuRgS6Oj591ciWN7LxxXYNEPzlZKQgI4&callback=initMap">
</script>
<script type="text/javascript">
    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        var isDraggable = $(document).width() > 480 ? true : false; // If document (your website) is wider than 480p
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 15,
            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(55.399574, 10.376737), // New York
            scrollwheel: false,
            draggable: isDraggable,
            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType": "all", "elementType": "geometry.fill", "stylers": [{"weight": "2.00"}]}, {"featureType": "all", "elementType": "geometry.stroke", "stylers": [{"color": "#9c9c9c"}]}, {"featureType": "all", "elementType": "labels.text", "stylers": [{"visibility": "on"}]}, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}]}, {"featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}]}, {"featureType": "road", "elementType": "geometry.fill", "stylers": [{"color": "#eeeeee"}]}, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"color": "#7b7b7b"}]}, {"featureType": "road", "elementType": "labels.text.stroke", "stylers": [{"color": "#ffffff"}]}, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]}, {"featureType": "water", "elementType": "geometry.fill", "stylers": [{"color": "#c8d7d4"}]}, {"featureType": "water", "elementType": "labels.text.fill", "stylers": [{"color": "#070707"}]}, {"featureType": "water", "elementType": "labels.text.stroke", "stylers": [{"color": "#ffffff"}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var image = 'img/logo/logo-pin.png';

        var beachMarker = new google.maps.Marker({
            position: {lat: 55.399574, lng: 10.376737},
            map: map,
            icon: image
        });
    }
</script>
<section class="normal-page">
<div class="container">
<div class="columns is-multiline is-mobile contact-page">
    <div class="column is-6 is-offset-3">
        <div class="intro-text">
            <h2>
                For all inquiries including new business, <div class="focus-text">employment opportunities</div> or to hear more about our services, please do not hesitate to <div class="focus-text">get in touch.</div></h2>
            <hr>
        </div>
    </div>
    <div class="column is-12">
        <div id="map"></div>
    </div>

    <div class="column is-8 is-offset-2 center-elements">
        <div class="intro-text">
            <h2>
                Get to know us. <div class="focus-text">We dont bite!</div>
            </h2>
            <hr>
                <p>
                    molestie ullamcorper, magna cras elementum eu, commodo velit elit, congue integer mauris mollis pretium quisque mauris. Hac proin, hendrerit justo aliquet, ac vel nec nisl, vel nulla perferendis, consectetuer in wisi
                </p>
        </div>
    </div>



    <div class="column is-4">
        <div class="contact-img cover" style="background-image: url('img/eks/smile-1726471_640.jpg')"></div>
    </div>


    <div class="column is-8 center-elements rel">
        <div class="contact-info">
            <h4>Anders Nielsen</h4>
            <p>
                Egestas aliquam sed, et cursus, nullam tempor volutpat ut. Mattis purus tempor. Consectetuer et velit, fermentum sem blandit ultrices eros lacinia donec, sed erat, et libero lorem tortor morbi nibh, ullamcorper sem enim purus adipiscing. Commodo id ultrices ac amet dolor.
            </p>
            <div class="social-icons">
                <a href="https://www.facebook.com/maddogivs/?fref=ts" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 49.652 49.652" style="enable-background:new 0 0 49.652 49.652;" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826    C49.652,11.137,38.516,0,24.826,0z M31,25.7h-4.039c0,6.453,0,14.396,0,14.396h-5.985c0,0,0-7.866,0-14.396h-2.845v-5.088h2.845    v-3.291c0-2.357,1.12-6.04,6.04-6.04l4.435,0.017v4.939c0,0-2.695,0-3.219,0c-0.524,0-1.269,0.262-1.269,1.386v2.99h4.56L31,25.7z    "/>
                            </g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                    </svg>  
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 49.652 49.652" style="enable-background:new 0 0 49.652 49.652;" xml:space="preserve">
                        <g>
                            <g>
                                <g>
                                    <path d="M24.825,29.796c2.739,0,4.972-2.229,4.972-4.97c0-1.082-0.354-2.081-0.94-2.897c-0.903-1.252-2.371-2.073-4.029-2.073     c-1.659,0-3.126,0.82-4.031,2.072c-0.588,0.816-0.939,1.815-0.94,2.897C19.854,27.566,22.085,29.796,24.825,29.796z"/>
                                    <polygon points="35.678,18.746 35.678,14.58 35.678,13.96 35.055,13.962 30.891,13.975 30.907,18.762    "/>
                                    <path d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826     C49.652,11.137,38.516,0,24.826,0z M38.945,21.929v11.56c0,3.011-2.448,5.458-5.457,5.458H16.164     c-3.01,0-5.457-2.447-5.457-5.458v-11.56v-5.764c0-3.01,2.447-5.457,5.457-5.457h17.323c3.01,0,5.458,2.447,5.458,5.457V21.929z"/>
                                    <path d="M32.549,24.826c0,4.257-3.464,7.723-7.723,7.723c-4.259,0-7.722-3.466-7.722-7.723c0-1.024,0.204-2.003,0.568-2.897     h-4.215v11.56c0,1.494,1.213,2.704,2.706,2.704h17.323c1.491,0,2.706-1.21,2.706-2.704v-11.56h-4.217     C32.342,22.823,32.549,23.802,32.549,24.826z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                    </svg> 
                </a> 
            </div>
        </div>
    </div>



    <div class="column is-8 center-elements rel">
        <div class="contact-info">
            <h4>Trine Nielsen</h4>
            <p>
                Egestas aliquam sed, et cursus, nullam tempor volutpat ut. Mattis purus tempor. Consectetuer et velit, fermentum sem blandit ultrices eros lacinia donec, sed erat, et libero lorem tortor morbi nibh, ullamcorper sem enim purus adipiscing. Commodo id ultrices ac amet dolor.
            </p>
            <div class="social-icons">
                <a href="https://www.facebook.com/maddogivs/?fref=ts" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 49.652 49.652" style="enable-background:new 0 0 49.652 49.652;" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826    C49.652,11.137,38.516,0,24.826,0z M31,25.7h-4.039c0,6.453,0,14.396,0,14.396h-5.985c0,0,0-7.866,0-14.396h-2.845v-5.088h2.845    v-3.291c0-2.357,1.12-6.04,6.04-6.04l4.435,0.017v4.939c0,0-2.695,0-3.219,0c-0.524,0-1.269,0.262-1.269,1.386v2.99h4.56L31,25.7z    "/>
                            </g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                    </svg>  
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 49.652 49.652" style="enable-background:new 0 0 49.652 49.652;" xml:space="preserve">
                        <g>
                            <g>
                                <g>
                                    <path d="M24.825,29.796c2.739,0,4.972-2.229,4.972-4.97c0-1.082-0.354-2.081-0.94-2.897c-0.903-1.252-2.371-2.073-4.029-2.073     c-1.659,0-3.126,0.82-4.031,2.072c-0.588,0.816-0.939,1.815-0.94,2.897C19.854,27.566,22.085,29.796,24.825,29.796z"/>
                                    <polygon points="35.678,18.746 35.678,14.58 35.678,13.96 35.055,13.962 30.891,13.975 30.907,18.762    "/>
                                    <path d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826     C49.652,11.137,38.516,0,24.826,0z M38.945,21.929v11.56c0,3.011-2.448,5.458-5.457,5.458H16.164     c-3.01,0-5.457-2.447-5.457-5.458v-11.56v-5.764c0-3.01,2.447-5.457,5.457-5.457h17.323c3.01,0,5.458,2.447,5.458,5.457V21.929z"/>
                                    <path d="M32.549,24.826c0,4.257-3.464,7.723-7.723,7.723c-4.259,0-7.722-3.466-7.722-7.723c0-1.024,0.204-2.003,0.568-2.897     h-4.215v11.56c0,1.494,1.213,2.704,2.706,2.704h17.323c1.491,0,2.706-1.21,2.706-2.704v-11.56h-4.217     C32.342,22.823,32.549,23.802,32.549,24.826z"/>
                                </g>
                            </g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                    </svg> 
                </a> 
            </div>
        </div>
    </div>
    <div class="column is-4">
        <div class="contact-img cover" style="background-image: url('img/eks/model-1814199_640.jpg')"></div>
    </div>

    <div class="column is-12 center-elements">
        <h3>Lets work together</h3>
        <hr>
    </div>
    <div class="column is-6 is-offset-3 center-elements">
        <div class="contactform">
            <form class="form-container">
                <div class="form-half">
                    <input placeholder="navn">
                </div>
                <div class="form-half">
                    <input placeholder="telefonnummer">
                </div>
                <div class="form-wide">

                    <input placeholder="email">

                        <textarea></textarea>

                        <button>Send</button> 
                </div>
            </form>
        </div>
    </div>
    <div class="column is-6 is-offset-3 center-elements rel">
        <div class="contact-last">
            <h4>Mad dog</h4>
            <span>Vestergade 116</span>
            <span>5000 Odense C</span>
            <span>+45 4865 5215</span>
            <span>mail@mail.dk</span>
        </div>
    </div>
</div>
   </div>
    </div>
</section>