var map = L.map('map').setView([47.217901, -122.427402],
  13);
  L.tileLayer('https://api.mapbox.com/styles/v1/ainsleykm/cka71ldlz0fu91itjnm24f0tg/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWluc2xleWttIiwiYSI6ImNrMmt1cDhnaTAwZDgzY2xrcW1zamIxNGgifQ.-0f1V1moN7hnx8mzPD7hxQ', {
    attribution: 'Map data &copy; Mapbox',
        minZoom: 13,
        maxZoom: 16
  })
  .addTo(map);

map.bounds = [],
   map.setMaxBounds([
     [47.258633,-122.499457],
     [47.207077,-122.421508]
   ]);

   $(function () {

       /*change the draw created event to pass in a featureTypeCode.
       This makes it so that when the draw created is triggered, I can fetch the type shape made and
       append that as a property in the generated GeoJSON*/
       // L.Draw.Feature.prototype._fireCreatedEvent = function (layer) {
       //     if (this.featureTypeCode) {
       //         this._map.fire('draw:created', { layer: layer, layerType: this.type, featureTypeCode: this.featureTypeCode });
       //     } else {
       //         this._map.fire('draw:created', { layer: layer, layerType: this.type });
       //     }
       //
       // }
       // /*rewrites some of the tooltip text when drawing polygons*/
       // L.Draw.Polygon.prototype._getTooltipText = function () {
       //     var text, subtext, tooltipObj;
       //     switch (this.featureTypeCode) {
       //         case 'siteProperty':
       //             tooltipObj = L.drawLocal.draw.handlers.polygon.siteProperty.tooltip;
       //             break;
       //         case 'building':
       //             tooltipObj = L.drawLocal.draw.handlers.polygon.building.tooltip;
       //             break;
       //         case 'structure':
       //             tooltipObj = L.drawLocal.draw.handlers.polygon.structure.tooltip;
       //             break;
       //         default:
       //             tooltipObj = L.drawLocal.draw.handlers.polygon.tooltip;
       //     }
       //     if (this._markers.length === 0) {
       //         text = tooltipObj.start;
       //     } else if (this._markers.length < 3) {
       //         text = tooltipObj.cont;
       //     } else {
       //         text = tooltipObj.end;
       //         subtext = this._getMeasurementString();
       //     }
       //
       //     return {
       //         text: text,
       //         subtext: subtext
       //     };
       // }
       /*Class for new polygon shape */
       L.Draw.PolygonGreen = L.Draw.Polygon.extend({
           options: {
               repeatMode: false
           },
           initialize: function (map, options) {
               this.type = 'polygonGreen';
               // this.featureTypeCode = 'siteProperty';
               L.Draw.Feature.prototype.initialize.call(this, map, options);
           }
       });

       L.Draw.PolygonBlue = L.Draw.Polygon.extend({
           initialize: function (map, options) {
               this.type = 'polygonBlue';
               L.Draw.Feature.prototype.initialize.call(this, map, options);
           }
       });
       /*Class for new polygon shape */
       // L.Draw.PolygonBuilding = L.Draw.Polygon.extend({
       //     options: {
       //         repeatMode: true
       //     },
       //     initialize: function (map, options) {
       //         this.type = 'building';
       //         this.featureTypeCode = 'building';
       //         L.Draw.Feature.prototype.initialize.call(this, map, options);
       //     }
       // });
       //
       // /*Class for new polygon shape */
       // L.Draw.PolygonStructure = L.Draw.Polygon.extend({
       //     options: {
       //         repeatMode: true
       //     },
       //     initialize: function (map, options) {
       //         this.type = 'structure';
       //         this.featureTypeCode = 'structure';
       //         L.Draw.Feature.prototype.initialize.call(this, map, options);
       //     }
       // });
       //
       // /*Class for new rectangle shape */
       // L.Draw.RectangleSiteBoundary = L.Draw.Rectangle.extend({
       //     options: {
       //         repeatMode: true
       //     },
       //     initialize: function (map, options) {
       //         this.type = 'rectangle';
       //         this.featureTypeCode = 'siteBoundary';
       //         // this._initialLabelText = L.drawLocal.draw.handlers.rectangle.siteBoundary.tooltip.start;
       //
       //         L.Draw.SimpleShape.prototype.initialize.call(this, map, options);
       //     }
       // });

       /*Modify this function to catch the featureCodeType.  This needs to append to the
       Css class name generated so that I can color them and do other stuff appropriately
       based on custom class in our css file*/
       // L.Toolbar.prototype._initModeHandler = function (handler, container, buttonIndex, classNamePredix, buttonTitle) {
       // var type = handler.type;
       // var target = type;
       // if (typeof handler.featureTypeCode != 'undefined') {
       //     target = type + '-' + handler.featureTypeCode;
       // }
       // this._modes[type] = {};
       //
       // this._modes[type].handler = handler;
       //
       // this._modes[type].button = this._createButton({
       //     type: type,
       //     title: buttonTitle,
       //     className: classNamePredix + '-' + target,
       //     container: container,
       //     callback: this._modes[type].handler.enable,
       //     context: this._modes[type].handler
       // });
       // this._modes[type].buttonIndex = buttonIndex;
       //
       // this._modes[type].handler
       //     .on('enabled', this._handlerActivated, this)
       //     .on('disabled', this._handlerDeactivated, this);
       // }
       //
       // /*Changes some of the default text for the toolbar buttons*/
       // L.drawLocal = {
       //     draw: {
       //         toolbar: {
       //             actions: {
       //                 title: 'a test',
       //                 text: 'Done creating'
       //             },
       //             finish: {
       //                 title: 'Finish drawing',
       //                 text: 'Finish'
       //             },
       //             undo: {
       //                 title: 'Delete last point drawn',
       //                 text: 'Delete last point'
       //             },
       //             buttons: {
       //                 polyline: 'Draw a polyline',
       //                 polygonGreen: 'Draw a polygon!!',
       //                 polygon: 'Draw a polygon',
       //                 polygonBlue: 'Draw a polygon',
       //                 // rectangle: {
       //                 //     siteBoundary: 'Create a site boundary'
       //                 // },
       //                 circle: 'Draw a circle',
       //                 marker: 'Draw a marker'
       //             }
       //         },
       //         handlers: {
       //             circle: {
       //                 tooltip: {
       //                     start: 'Click and drag to draw circle.'
       //                 },
       //                 radius: 'Radius'
       //             },
       //             marker: {
       //                 tooltip: {
       //                     start: 'Click map to place a site marker.'
       //                 }
       //             },
       //             polygon: {
       //                 error: '<strong>Error:</strong> shape edges cannot cross!',
       //                 tooltip: {
       //                     start: 'Click to start drawing line',
       //                     cont: 'Click to continue drawing line',
       //                     end: 'Click last point to finish line'
       //                 }
       //             },
       //             polygonGreen: {
       //                 error: '<strong>Error:</strong> shape edges cannot cross!',
       //                 tooltip: {
       //                     start: 'Click to start drawing line',
       //                     cont: 'Click to continue drawing line',
       //                     end: 'Click last point to finish line'
       //                 }
       //             },
       //             polygonBlue: {
       //                 error: '<strong>Error:</strong> shape edges cannot cross!',
       //                 tooltip: {
       //                     start: 'Click to start drawing line',
       //                     cont: 'Click to continue drawing line',
       //                     end: 'Click last point to finish line'
       //                 }
       //             },
       //             polyline: {
       //                 error: '<strong>Error:</strong> shape edges cannot cross!',
       //                 tooltip: {
       //                     start: 'Click to start drawing line',
       //                     cont: 'Click to continue drawing line',
       //                     end: 'Click last point to finish line'
       //                 }
       //             },
       //             rectangle: {
       //                 siteBoundary: {
       //                     tooltip: {
       //                         start: 'Click and drag to create a site boundary'
       //                     }
       //                 }
       //             },
       //             simpleshape: {
       //                 tooltip: {
       //                     end: 'Release mouse to finish drawing.'
       //                 }
       //             }
       //         }
       //     },
       //     edit: {
       //         toolbar: {
       //             actions: {
       //                 save: {
       //                     title: 'Save changes.',
       //                     text: 'Save'
       //                 },
       //                 cancel: {
       //                     title: 'Cancel editing, discards all changes.',
       //                     text: 'Cancel'
       //                 }
       //             },
       //             buttons: {
       //                 edit: 'Edit layers.',
       //                 editDisabled: 'No layers to edit.',
       //                 remove: 'Delete layers.',
       //                 removeDisabled: 'No layers to delete.'
       //             }
       //         },
       //         handlers: {
       //             edit: {
       //                 tooltip: {
       //                     text: 'Drag handles, or marker to edit feature.',
       //                     subtext: 'Click cancel to undo changes.'
       //                 }
       //             },
       //             remove: {
       //                 tooltip: {
       //                     text: 'Click on a feature to remove'
       //                 }
       //             }
       //         }
       //     }
       // };
       //
       // /*Adds new shape types to the options */
       L.DrawToolbar.include({

           options: {
               //polyline: {},
               // polygon:{},
               // polygonGreen: {},
               //circle: {},
               //marker: {}
           },
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
                   {
                      enabled: this.options.polyline,
                      handler: new L.Draw.Polyline(map, this.options.polyline),
                      title: L.drawLocal.draw.toolbar.buttons.polyline
                   },
                   {
                       enabled: this.options.marker,
                       handler: new L.Draw.Marker(map, this.options.marker),
                       title: L.drawLocal.draw.toolbar.buttons.marker
                   },
                   {
                       enabled: this.options.polygon,
                       handler: new L.Draw.Polygon(map, this.options.polygon),
                       title: L.drawLocal.draw.toolbar.buttons.polygon
                   },
                   {
                       enabled: this.options.polygonGreen,
                       handler: new L.Draw.PolygonGreen(map, this.options.polygonGreen),
                       title: L.drawLocal.draw.toolbar.buttons.polygonGreen
                   },
                   {
                       enabled: this.options.polygonBlue,
                       handler: new L.Draw.PolygonBlue(map, this.options.polygonBlue),
                       title: L.drawLocal.draw.toolbar.buttons.polygonBlue
                   },
               ];
           },
       //
       //     // Get the actions part of the toolbar
       //     getActions: function (handler) {
       //         return [
       //             {
       //                 enabled: handler.completeShape,
       //                 title: L.drawLocal.draw.toolbar.finish.title,
       //                 text: L.drawLocal.draw.toolbar.finish.text,
       //                 callback: handler.completeShape,
       //                 context: handler
       //             },
       //             {
       //                 enabled: handler.deleteLastVertex,
       //                 title: L.drawLocal.draw.toolbar.undo.title,
       //                 text: L.drawLocal.draw.toolbar.undo.text,
       //                 callback: handler.deleteLastVertex,
       //                 context: handler
       //             },
       //             {
       //                 title: L.drawLocal.draw.toolbar.actions.title,
       //                 text: L.drawLocal.draw.toolbar.actions.text,
       //                 callback: this.disable,
       //                 context: this
       //             }
       //         ];
       //     },
       //
       //     setOptions: function (options) {
       //         L.setOptions(this, options);
       //
       //         for (var type in this._modes) {
       //             if (this._modes.hasOwnProperty(type) && options.hasOwnProperty(type)) {
       //                 this._modes[type].handler.setOptions(options[type]);
       //             }
       //         }
       //     }
       });

   }());
// Initialise the draw control and pass it the FeatureGroup of editable layers
// Green
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

// Set the title to show on the polygon button
L.drawLocal.draw.toolbar.buttons.polygonGreen = 'Trace an area!';
L.drawLocal.draw.toolbar.buttons.polyline = 'Trace streets!';
L.drawLocal.draw.toolbar.buttons.marker = 'Mark an area!';

var drawControlGreen = new L.Control.Draw(
  {
    position: 'topleft',
    draw: {
        polyline: {
            metric: false,
            showArea: false,
            shapeOptions: {
              color: 'green'
            }
        },
        polygonGreen: {
            allowIntersection: false,
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
        marker: true
    },
    edit: {
        featureGroup: drawnItems,
        edit:false,
        remove: false
    }
});


map.addControl(drawControlGreen);


map.on('draw:created', function (green) {
    var type = green.layerType,
        layer = green.layer;

    if (type === 'marker') {
        layer.bindPopup('A popup!');
    }

    drawnItems.addLayer(layer);
});

map.on('draw:edited', function (green) {
    var layers = green.layers;
    var countOfEditedLayers = 0;
    layers.eachLayer(function(layer) {
        countOfEditedLayers++;
    });
    console.log("Edited " + countOfEditedLayers + " layers");
});



// *************************************************************************************************
// New Group: Blue
       var bluedrawnItems = new L.FeatureGroup();
       map.addLayer(bluedrawnItems);

       // Set the title to show on the polygon button
       L.drawLocal.draw.toolbar.buttons.polygonBlue = 'Trace an area!';
       L.drawLocal.draw.toolbar.buttons.polyline = 'Trace streets!';
       L.drawLocal.draw.toolbar.buttons.marker = 'Mark an area!';

       var drawControlBlue = new L.Control.Draw({
           position: 'topleft',
           draw: {
               polyline: false,
               polygonBlue: {
                   allowIntersection: false,
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
               marker: true
           },
           edit: {
               featureGroup: bluedrawnItems,
               edit:false,
               remove: false
           }
       });
       map.addControl(drawControlBlue);

       map.on('draw:created', function (blue) {
           var type = blue.layerType,
               layer = blue.layer;

           if (type === 'marker') {
               layer.bindPopup('A popup!');
           }

           bluedrawnItems.addLayer(layer);
       });

       map.on('draw:edited', function (blue) {
           var layers = blue.layers;
           var countOfEditedLayers = 0;
           layers.eachLayer(function(layer) {
               countOfEditedLayers++;
           });
           console.log("Edited " + countOfEditedLayers + " layers");
       });


// ****************************************************************************
// New group: Black
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

// Set the title to show on the polygon button
L.drawLocal.draw.toolbar.buttons.polygon = 'Trace an area!';
L.drawLocal.draw.toolbar.buttons.polyline = 'Trace streets!';
L.drawLocal.draw.toolbar.buttons.marker = 'Mark an area!';

var drawControlBlack = new L.Control.Draw({
    position: 'topleft',
    draw: {
        polyline: false,
        polygon: {
            allowIntersection: false,
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
        featureGroup: drawnItems,
        edit:false,
        remove: false
    }
});
map.addControl(drawControlBlack);

map.on('draw:created', function (black) {
    var type = black.layerType,
        layer = black.layer;

    if (type === 'marker') {
        layer.bindPopup('A popup!');
    }

    drawnItems.addLayer(layer);
});

map.on('draw:edited', function (black) {
    var layers = black.layers;
    var countOfEditedLayers = 0;
    layers.eachLayer(function(layer) {
        countOfEditedLayers++;
    });
    console.log("Edited " + countOfEditedLayers + " layers");
});




// **************************************************************************
//New Group: RED
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

// Set the title to show on the polygon button
L.drawLocal.draw.toolbar.buttons.polygon = 'Trace an area!';
L.drawLocal.draw.toolbar.buttons.polyline = 'Trace streets!';
L.drawLocal.draw.toolbar.buttons.marker = 'Mark an area!';

var drawControlRed = new L.Control.Draw({
    position: 'topleft',
    draw:  {
        polyline: {
            metric: false,
            showArea: false,
            shapeOptions: {
                color: 'red'
            }
        },
        polygon: {
            allowIntersection: false,
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
        featureGroup: drawnItems,
        edit:false,
        remove: true
    }
});
map.addControl(drawControlRed);



map.on('draw:created', function (red) {
    var type = red.layerType,
        layer = red.layer;

    if (type === 'marker') {
        layer.bindPopup('A popup!');
    }

    drawnItems.addLayer(layer);
});

map.on('draw:edited', function (red) {
    var layers = red.layers;
    var countOfEditedLayers = 0;
    layers.eachLayer(function(layer) {
        countOfEditedLayers++;
    });
    console.log("Edited " + countOfEditedLayers + " layers");
});

//
// L.easyButton('fa-comment-o', function(btn, map) {
//     document.getElementById('#myModal').modal('show');
// }, 'Informacije').addTo(map);
