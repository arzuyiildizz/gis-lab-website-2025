// Base Maps
let osm = new ol.layer.Tile({
    title: 'OpenStreetMap',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
  });
  
  let esriTopo = new ol.layer.Tile({
    title: 'ESRI Topographic',
    type: 'base',
    visible: false,
    source: new ol.source.XYZ({
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/' +
           'World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
      attributions: 'Tiles © Esri'
    })
  });
  
  let cartoPositron = new ol.layer.Tile({
    title: 'CartoDB Positron',
    type: 'base',
    visible: false,
    source: new ol.source.XYZ({
      url: 'https://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      attributions: '&copy; <a href="https://carto.com/">CARTO</a>'
    })
  });
  
  // Base Map Group
  let baseMapGroup = new ol.layer.Group({
    title: 'Base Maps',
    layers: [osm, esriTopo, cartoPositron]
  });
  
  // Map Initialization
  const map = new ol.Map({
    target: 'map',
    layers: [baseMapGroup],  
    view: new ol.View({
      center: ol.proj.fromLonLat([13.4, 47.5]),
      zoom: 6
    })
  });
  
// Step 1 - Austria CAMS NO₂ 2022-12
let cams_no2_2022 = new ol.layer.Image({
    title: "NO₂",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_CAMS_no2_2022_12',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });
  
  // Step 1 - Austria CAMS PM₂.₅ 2022-12
  let cams_pm25_2022 = new ol.layer.Image({
    title: "PM₂.₅",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_CAMS_pm2p5_2022_12',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });
  
  // Step 1 - Austria CAMS PM₁₀ 2022-12
  let cams_pm10_2022 = new ol.layer.Image({
    title: "PM₁₀",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_CAMS_pm10_2022_12',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });
  
// Step 2 - Austria Average NO₂ 2022
let austria_average_no2_2022 = new ol.layer.Image({
    title: "NO₂",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_average_no2_2022',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });

// Step 2 - Austria Average PM₂.₅ 2022
let austria_average_pm25_2022 = new ol.layer.Image({
    title: "PM₂.₅",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_average_pm2p5_2022',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });

// Step 2 - Austria Average PM₁₀ 2022
let austria_average_pm10_2022 = new ol.layer.Image({
    title: "PM₁₀",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_average_pm10_2022',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });

//  Step 3 - Concentration pollutant NO₂ 2020
let conc_pol_no2_2020 = new ol.layer.Image({
    title: "NO₂",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_no2_concentration_map_2020',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });

  // Step 3 - Concentration pollutant PM₂.₅ 2020
let conc_pol_pm25_2020 = new ol.layer.Image({
    title: "PM₂.₅",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_pm2p5_concentration_map_2020',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });

  //  Step 3 - Concentration pollutant PM₁₀ 2020
  let conc_pol_pm10_2020 = new ol.layer.Image({
    title: "PM₁₀",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_pm10_concentration_map_2020',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });

// Step 4 - NO₂ Annual Average Difference from the 2017-2022 
  let annual_avg_no2 = new ol.layer.Image({
    title: "NO₂",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_no2_2017-2021_AAD_map_2022',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });

// Step 4 - PM₂.₅ Annual Average Difference from the 2017-2022 
let annual_avg_pm25 = new ol.layer.Image({
    title: "PM₂.₅",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_pm2p5_2017-2021_AAD_map_2022',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });

 
  
  // Step 4 - PM₁₀ Annual Average Difference from the 2017-2022 
  let annual_avg_pm10 = new ol.layer.Image({
    title: "PM₁₀",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_pm10_2017-2021_AAD_map_2022',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });

   //  Step 5 -Reclassified ESA CCI Land Cover 2022
   let reclas_esa_2022 = new ol.layer.Image({
    title: "Reclassified ESA CCI Land Cover Austria 2022",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:AUSTRIA_LC_reclassified_2022',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });
  


  // Step 6 - Austria NO₂ 2020 Bivariate
  let no2_2020 = new ol.layer.Image({
    title: "NO₂",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_no2_2020_bivariate',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: false
  });
  
  // Step 6 - Austria PM2.5 2020 Bivariate
  let pm25_2020 = new ol.layer.Image({
    title: "PM₂.₅",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_pm2p5_2020_bivariate',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible:false
  });
  
  // Step 6 - Austria PM10 2020 Bivariate
  let pm10_2020 = new ol.layer.Image({
    title: "PM₁₀",
    source: new ol.source.ImageWMS({
      url: "https://www.gis-geoserver.polimi.it/geoserver/wms",
      params: {
        'LAYERS': 'gisgeoserver_09:Austria_pm10_2020_bivariate',
        'TILED': true
      },
      serverType: 'geoserver',
      crossOrigin: 'anonymous'
    }),
    visible: true
  });
  
// Step 6 - Bivariate Air Pollution Layers Group
let airPollutionLayers = new ol.layer.Group({
    title: "Air Pollution Bivariate Maps for 2020",
    layers: [no2_2020, pm25_2020, pm10_2020]
  });
  map.addLayer(airPollutionLayers);

  
//  Step 5 - Reclassified ESA CCI Land Cover 2022
let reclas_esa_lc_2022 = new ol.layer.Group({
    title: "Reclassified ESA CCI Land Cover Austria 2022",
    layers: [reclas_esa_2022]
  });
  map.addLayer(reclas_esa_lc_2022);


//  Step 4 - NO2/PM2.5/PM10 Annual Average Difference from the 2017-2021
let annual_avg_dif = new ol.layer.Group({
    title: "Annual Average Differences (NO₂, PM₂.₅, PM₁₀) 2017-2021",
    layers: [annual_avg_no2, annual_avg_pm25, annual_avg_pm10]
  });
  map.addLayer(annual_avg_dif);


//  Step 3 - Concentration pollutant maps Layers Group
let concpollutantLayers = new ol.layer.Group({
    title: "Concentration Pollutan Maps(NO₂, PM₂.₅, PM₁₀) 2020",
    layers: [conc_pol_no2_2020, conc_pol_pm25_2020, conc_pol_pm10_2020]
  });
  map.addLayer(concpollutantLayers);


// Step 2 - Average pollutant maps (NO2, PM2.5, PM10)
let averagePollutantLayers = new ol.layer.Group({
    title: "Average Pollutant Maps 2022(NO₂, PM₂.₅, PM₁₀)",
    layers: [austria_average_no2_2022, austria_average_pm25_2022, austria_average_pm10_2022]
  });
  map.addLayer(averagePollutantLayers);


//  Step 1 - Air Pollutant Layers Group
let PollutantLayers = new ol.layer.Group({
    title: "Pollutant Maps(NO₂, PM₂.₅, PM₁₀) 2022 December",
    layers: [cams_no2_2022, cams_pm25_2022, cams_pm10_2022]
  });
  map.addLayer(PollutantLayers);


  // Layer Switcher
  let layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: 'Legend',
    reverse: true,
    groupSelectStyle: 'children'
  });
  map.addControl(layerSwitcher);
  
  // Additional Controls
  map.addControl(new ol.control.ScaleLine({
  className: 'custom-scale-line'
}));
  map.addControl(new ol.control.FullScreen());
  map.addControl(new ol.control.MousePosition({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    className: 'custom-control',
    placeholder: '0.0000, 0.0000'
  }));
  
// Legend Update Function
function updateLegend(layerName, layerTitle) {
  const legendUrl = `https://www.gis-geoserver.polimi.it/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=${layerName}`;
  
  document.getElementById('legend-image').src = legendUrl;
  document.getElementById('legend-title').textContent = layerTitle || 'Legend';
  document.getElementById('legend').style.display = 'block';
}


// Reacting to layers visibility change
function setupLegendListener(layerGroup) {
  layerGroup.getLayers().forEach(function (layer) {
    layer.on('change:visible', function () {
      if (layer.getVisible()) {
        const layerName = layer.getSource().getParams().LAYERS;
        const title = layer.get('title') || layer.getSource().getParams().LAYERS;
        updateLegend(layerName, title);
      } else {
        const visibleLayers = layerGroup.getLayers().getArray().filter(l => l.getVisible());
        if (visibleLayers.length === 0) {
          document.getElementById('legend').style.display = 'none';
        } else {
          // Show legend of the topmost open layer
          const topVisibleLayer = layerGroup.getLayers().getArray().slice().reverse().find(l => l.getVisible());
          if (topVisibleLayer) {
            const layerName = topVisibleLayer.getSource().getParams().LAYERS;
            const title = topVisibleLayer.get('title') || layerName;
            updateLegend(layerName, title);
          }
        }
      }
    });
  });
}


window.onload = function () {
  // Show legend for first loaded and visible layer
  const visibleLayer = airPollutionLayers.getLayers().getArray().find(l => l.getVisible());
  if (visibleLayer) {
    const layerName = visibleLayer.getSource().getParams().LAYERS;
    const title = visibleLayer.get('title') || layerName;
    updateLegend(layerName, title);
  }
};
  
  // Apply to all relevant layer groups
  [PollutantLayers, averagePollutantLayers, concpollutantLayers, airPollutionLayers, annual_avg_dif, reclas_esa_lc_2022].forEach(setupLegendListener);

