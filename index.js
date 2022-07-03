function updateMap() 
{
    console.log("Updating map with realtime data")

         fetch("/data.json") //  Fetch API is used for fetching the data from data.json file and it will response using .then method
        .then(response => response.json())
        .then(res => {
            //  console.log(rsp.data)
            res.data.forEach(element => {

                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected; // infected cases in the country which is fetched from json file
                if (cases>255)
                {
                     color = "rgb(200, 5, 0)"; // If cases are greater than 255 then it will be dark red.
                    
                }

                else
                {
                    color = `rgb(${cases},0, 0)`; // Backticks is been used and string is made so it displays the cases which are less than 255
                }

                // Mark on the map using Mapbox using draggable marker. So just copy from it and add it here.
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
            });
        })
}

let interval = 20000; 
setInterval( updateMap, interval); 