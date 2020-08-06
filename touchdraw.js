var map = L.map('map', { zoomControl: false }).setView([47.217901, -122.427402],
  14);
  L.tileLayer('https://api.mapbox.com/styles/v1/ainsleykm/cka71ldlz0fu91itjnm24f0tg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWluc2xleWttIiwiYSI6ImNrMmt1cDhnaTAwZDgzY2xrcW1zamIxNGgifQ.-0f1V1moN7hnx8mzPD7hxQ', {
    attribution: 'Map data &copy; Mapbox',
        minZoom: 14,
        maxZoom: 16
  })
  .addTo(map);

map.bounds = [],
   map.setMaxBounds([
     [47.258633,-122.499457],
     [47.207077,-122.421508]
   ]);


// Open Start Modl on load
   $(document).ready(function(){
         $('#openModal').modal({
             show: true
         });
     });

// to change the toolbar colors
   $(function () {

   /*Creating classes for new colors. These are created by extending the L.Draw.Polygon (or .Polyline etc.) objects.*/
   /*Green*/
   L.Draw.PolygonGreen = L.Draw.Polygon.extend({
       initialize: function (map, options) {
           this.type = 'polygonGreen';
           L.Draw.Feature.prototype.initialize.call(this, map, options);
       }
   });
   //Note: This creates the class, but the class is not yet defined in the CSS or called in the JavaScript.
   L.Draw.PolylineGreen = L.Draw.Polyline.extend({
       initialize: function (map, options) {
           this.type = 'polylineGreen';
           L.Draw.Feature.prototype.initialize.call(this, map, options);
       }
   });

   L.Draw.MarkerGreen = L.Draw.Marker.extend({
       initialize: function (map, options) {
   		     this.type = 'markerGreen';
   		     L.Draw.Feature.prototype.initialize.call(this, map, options);
   	},
  });

   /*Blue*/
   L.Draw.MarkerBlue = L.Draw.Marker.extend({
       initialize: function (map, options) {
            this.type = 'markerBlue';
            L.Draw.Feature.prototype.initialize.call(this, map, options);
     },
  });

   L.Draw.PolygonBlue = L.Draw.Polygon.extend({
       initialize: function (map, options) {
           this.type = 'polygonBlue';
           L.Draw.Feature.prototype.initialize.call(this, map, options);
       }
   });


   /*Red*/
   L.Draw.PolygonRed = L.Draw.Polygon.extend({
       initialize: function (map, options) {
           this.type = 'polygonRed';
           L.Draw.Feature.prototype.initialize.call(this, map, options);
       }
   });

   L.Draw.PolylineRed = L.Draw.Polyline.extend({
       initialize: function (map, options) {
           this.type = 'polylineRed';
           L.Draw.Feature.prototype.initialize.call(this, map, options);
       }
   });

   /*Black*/
   L.Draw.PolygonBlack = L.Draw.Polygon.extend({
       initialize: function (map, options) {
           this.type = 'polygonBlack';
           L.Draw.Feature.prototype.initialize.call(this, map, options);
       }
   });


   // /*Adds new shape types to the options */
   L.DrawToolbar.include({

       options: {},
           initialize: function (options) {
       // Ensure that the options are merged correctly since L.extend is only shallow
       for (var type in this.options) {
           if (this.options.hasOwnProperty(type)) {
               if (options[type]) {
                   options[type] = L.extend({}, this.options[type], options[type]);
               }
           }
       }

       this._toolbarClass = 'leaflet-draw-draw';
       L.Toolbar.prototype.initialize.call(this, options);
   },
       getModeHandlers: function (map) {
           return [
               // GREEN
               {
                   enabled: this.options.polygonGreen,
                   handler: new L.Draw.PolygonGreen(map, this.options.polygonGreen),
                   title: L.drawLocal.draw.toolbar.buttons.polygonGreen
               },
               {
                  enabled: this.options.polylineGreen,
                  handler: new L.Draw.PolylineGreen(map, this.options.polylineGreen),
                  title: L.drawLocal.draw.toolbar.buttons.polylineGreen
               },
               {
                   enabled: this.options.markerGreen,
                   handler: new L.Draw.MarkerGreen(map, this.options.marker),
                   title: L.drawLocal.draw.toolbar.buttons.markerGreen
               },

               // BLUE
               {
                   enabled: this.options.polygonBlue,
                   handler: new L.Draw.PolygonBlue(map, this.options.polygonBlue),
                   title: L.drawLocal.draw.toolbar.buttons.polygonBlue
               },
               {
                   enabled: this.options.markerBlue,
                   handler: new L.Draw.MarkerBlue(map, this.options.marker),
                   title: L.drawLocal.draw.toolbar.buttons.markerBlue
               },

               // RED
               {
                   enabled: this.options.polygonRed,
                   handler: new L.Draw.PolygonRed(map, this.options.polygonRed),
                   title: L.drawLocal.draw.toolbar.buttons.polygonRed
               },
               {
                  enabled: this.options.polylineRed,
                  handler: new L.Draw.PolylineRed(map, this.options.polylineRed),
                  title: L.drawLocal.draw.toolbar.buttons.polylineRed
               },
               // BLACK
               {
                   enabled: this.options.polygonBlack,
                   handler: new L.Draw.PolygonBlack(map, this.options.polygonBlack),
                   title: L.drawLocal.draw.toolbar.buttons.polygonBlack
               },

           ];
       },
   });

}());

// **************************************************************************
// Initialise the draw control and pass it the FeatureGroup of editable layers
// GREEN
var controlOnMap = false;
var greenDrawnItems = new L.FeatureGroup();
map.addLayer(greenDrawnItems);

// Set the title to show on the polygon button
L.drawLocal.draw.toolbar.buttons.polygonGreen = 'Trace an area!';
L.drawLocal.draw.toolbar.buttons.polylineGreen = 'Trace streets!';
L.drawLocal.draw.toolbar.buttons.markerGreen = 'Mark an area!';

    var drawControlGreen = new L.Control.Draw(
      {
        position: 'topleft',
        draw: {
            polylineGreen: {
              showLength: false,
                shapeOptions: {
                  color: 'green'
                }
            },
            polygonGreen: {
                allowIntersection: true,
                showLength: false,
                drawError: {
                    color: '#b00b00',
                    timeout: 1000
                },
                shapeOptions: {
                    color: 'green'
                }
            },
            circle: false,
            rectangle: false,
            markerGreen: true
        },
        edit: {
            featureGroup: greenDrawnItems,
            edit:false,
            remove: false
        }
    });
    map.addControl(drawControlGreen);


// Listener for ALL featuregroups
    map.addEventListener("draw:created", function(green) {
        green.layer.addTo(greenDrawnItems);
        greenDrawnItems.eachLayer(function(greenLayer) {
            let geojson = JSON.stringify(greenLayer.toGeoJSON().geometry);
            console.log(geojson);
        });
    });



 //*****************************************************************************************
// New Group: BLUE
       var bluedrawnItems = new L.FeatureGroup();
       map.addLayer(bluedrawnItems);

       // Set the title to show on the polygon button
       L.drawLocal.draw.toolbar.buttons.polygonBlue = 'Trace an area!';
       L.drawLocal.draw.toolbar.buttons.markerBlue = 'Mark an area!';

       var drawControlBlue = new L.Control.Draw({
           position: 'topleft',
           featureGroup: bluedrawnItems,
           draw: {
               polyline: false,
               markerBlue: true,
               polygonBlue: {
                   allowIntersection: true,
                   showLength: false,
                   drawError: {
                       color: '#b00b00',
                       timeout: 1000
                   },
                   shapeOptions: {
                       color: 'blue'
                   }
               },
               circle: false,
               rectangle: false,
           },
           edit: {
               featureGroup: bluedrawnItems,
               edit:false,
               remove: false
           }
       });
       map.addControl(drawControlBlue);



// ****************************************************************************
// New group: BLACK
      var blackDrawnItems = new L.FeatureGroup();
      map.addLayer(blackDrawnItems);

      // Set the title to show on the polygon button
      L.drawLocal.draw.toolbar.buttons.polygonBlack = 'Trace an area!';

      var drawControlBlack = new L.Control.Draw({
          position: 'topleft',
          draw: {
              polyline: false,
              polygonBlack: {
                  allowIntersection: true,
                  showLength: false,
                  drawError: {
                      color: '#b00b00',
                      timeout: 1000
                  },
                  shapeOptions: {
                      color: 'black'
                  }
              },
              circle: false,
              rectangle: false,
              marker: false
          },
          edit: {
              featureGroup: blackDrawnItems,
              edit:false,
              remove: false
          }
      });
      map.addControl(drawControlBlack);


// **************************************************************************
//New Group: RED
var redDrawnItems = new L.FeatureGroup();
map.addLayer(redDrawnItems);

// Set the title to show on the polygon button
//these will need to be updated once you've changed your classes to be color-specific
L.drawLocal.draw.toolbar.buttons.polygonRed = 'Trace an area!';
L.drawLocal.draw.toolbar.buttons.polylineRed = 'Trace streets!';

      var drawControlRed = new L.Control.Draw({
          position: 'topleft',
          draw:  {
              polylineRed: {
                  showLength: false,
                  shapeOptions: {
                      color: 'red'
                  }
              },
              polygonRed: {
                  allowIntersection: true,
                  showLength: false,
                  drawError: {
                      color: '#b00b00',
                      timeout: 1000
                  },
                  shapeOptions: {
                      color: 'red'
                  }
              },
              circle: false,
              rectangle: false,
              marker: false
          },
          edit: {
              featureGroup: redDrawnItems,
              edit:false,
              remove: true
          }
      });
      map.addControl(drawControlRed);



// Modal and submit

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Send to set data. Will this take everything tho. Very important Ainsley!
document.getElementById("submit").addEventListener("click", setData);
// document.getElementById("submit").addEventListener("click", setDataBlue);???

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$("form :input").change(function() {
    console.log($(this).closest('form').serialize());
});


// Posting to CARTO
function setData() {

    // Get user name and description
    let enteredSchool = document.getElementById("school").value;
    let enteredAge = document.getElementById("age").value;
    let enteredGender = document.getElementById("gender").value;
    let enteredRace = document.getElementById("race").value;
    let enteredAfterschool = document.getElementById("afterschool").value;
    let enteredFeel = document.getElementById("feel").value;
    // if (featureGroup == greenDrawnItems){
           let enteredColor = "green"
    // For each drawn layer
    greenDrawnItems.eachLayer(function(greenLayer) {

        // Create SQL expression to insert layer
            let drawing = JSON.stringify(greenLayer.toGeoJSON().geometry);
            let sql =
                "INSERT INTO amp_tool (the_geom, school, age, gender, race, after_school, feel) " +
                "VALUES (ST_SetSRID(ST_GeomFromGeoJSON('" +
                drawing + "'), 4326), '" + //4326 WGS84 projection
                enteredSchool + "', '" +
                enteredAge + "', '" +
                enteredGender + "', '" +
                enteredRace + "', '" +
                enteredAfterschool + "', '" +
                enteredFeel + "')";
            console.log(sql);

            // Send the data
            fetch("https://ainsleyk.carto.com/api/v2/sql?", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "q=" + encodeURI(sql)
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log("Data saved:", data);
            })
            .catch(function(error) {
                console.log("Problem saving the data:", error);
            });

    });
};


// Stop page refresh
// var form = document.getElementById("myModal");
// function handleForm(event) { event.preventDefault(); }
// form.addEventListener('submit', handleForm);
