// Initialize google map options
function mapInit() {
    var myLatlng = new google.maps.LatLng(-37.818278, 145.022160);
    var mapOptions = {
        zoom: 17,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    try {
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hawthorn West Baptist Church"
        });
        marker.setMap(map);
    }
    catch (err) { }
}
// Load google map
google.maps.event.addDomListener(window, 'load', mapInit);