function initMap() {
    if (!window.google || !google.maps) {
        console.error("Google Maps API not loaded.");
        return;
    }

    var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);

    var mapOptions = {
        zoom: 7,
        center: myLatlng,
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    { "visibility": "simplified" },
                    { "hue": "#ff0000" }
                ]
            }
        ]
    };

    var mapElement = document.getElementById("map");
    if (!mapElement) {
        console.error("Map container not found.");
        return;
    }

    var map = new google.maps.Map(mapElement, mapOptions);

    var addresses = ["New York"];
    var apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual API key

    addresses.forEach((address) => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === "OK") {
                    var p = data.results[0].geometry.location;
                    var latlng = new google.maps.LatLng(p.lat, p.lng);

                    new google.maps.Marker({
                        position: latlng,
                        map: map,
                        icon: "images/loc.png"
                    });
                } else {
                    console.error(`Geocoding error: ${data.status}`);
                }
            })
            .catch(error => console.error("Error fetching geocode:", error));
    });
}

// Ensure Google Maps API is loaded before initializing the map
window.onload = () => {
    if (window.google && google.maps) {
        initMap();
    } else {
        console.error("Google Maps API failed to load.");
    }
};
