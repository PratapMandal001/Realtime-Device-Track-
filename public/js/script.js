const socket = io();

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            socket.emit("send-location", { latitude, longitude });
        },
        (error) => {
            console.error(error);
        },
        {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        }
    );
}

L.map("map").setView([0,0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "Open Street Map"
}).addTo(map)

const marker ={};

socket.on("receive-location", (data)=> {
    const { id, lattitude, longitude } = data;
    map.setView([latitude, longitude]);
    if(markers[id]) {
        markers[id].setLatLng([latitude, longitude]);
    }else {
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }
});

socket.on("user-disconnected", (id) => {
    if(markers[id]) {
        map.removaLayer(markers[id]);
        delete markers[id];
    }
});
    