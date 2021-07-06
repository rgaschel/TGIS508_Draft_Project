fetch("https://data.lime.bike/api/partners/v1/gbfs/seattle/free_bike_status.json")
            //Response resolves to a readable stream,
            //so this statement helps us convert it into
            //a static object
            .then(response => response.json())
            //Now that we have the data, let us see what it looks like in console
            .then(data => {
                console.log(data);
            });
GeoJSON.parse(data, {Point: ['lat', 'lng']});
