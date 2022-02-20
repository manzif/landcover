import React, { useRef, useEffect } from 'react';
import './index.css';
import { loadModules } from 'esri-loader';

export default function MapViewer() {
  const mapRef = useRef();

  useEffect(() => {
    let view;

    loadModules(
      [
        'esri/config',
        'esri/views/MapView',
        'esri/WebMap',
        "esri/layers/MapImageLayer",
        "esri/widgets/Legend"
      ],
      {
        css: true
      }
    ).then(
      ([esriConfig, MapView, WebMap, MapImageLayer, Legend]) => {
        esriConfig.apiKey =
          'AAPKdffbf02102ea44069ba2aed34b55b1a6WYgH4tH56vPaJg4I9kXv_eU8gHuFALJlBepwvrMLxDSxRCqWJePy2DPMl1Dm5zzq';

        const landCover = new MapImageLayer({
            url: "https://gis.space.gov.rw/server/rest/services/Land_cover_2021/MapServer",
        });
        const map = new WebMap({
          basemap: 'national-geographic'
          // basemap: 'arcgis-dark-gray'
        });

        view = new MapView({
          map: map,
          center: [30.089567357772967, -1.9444697721675908],
          zoom: 8,
          // use the ref as a container
          container: mapRef.current
        });
        // add the feature layer to the map
        map.add(landCover);

        let legend = new Legend({
          view: view,
          layerInfos: [{
            layer: landCover,
            title: "",
          }]
        });
        
      
      view.ui.add(legend, "bottom-right");
      }
    );
    return () => {
      // close the map view
      if (view) {
        view.destroy();
        view = null;
      }
    };
  }, []);

  return (
    <div>
      <div style={{ height: '100vh', marginTop: '0vh' }} ref={mapRef} />
      <div
        id="layerListPane"
        data-dojo-type="dijit/layout/ContentPane"
        data-dojo-props="region:'right'"
      >
        <div id="layerList" />
      </div>
    </div>
  );
}
