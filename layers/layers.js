var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SLCpolygons_ROI_1 = new ol.format.GeoJSON();
var features_SLCpolygons_ROI_1 = format_SLCpolygons_ROI_1.readFeatures(json_SLCpolygons_ROI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCpolygons_ROI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCpolygons_ROI_1.addFeatures(features_SLCpolygons_ROI_1);
var lyr_SLCpolygons_ROI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SLCpolygons_ROI_1, 
                style: style_SLCpolygons_ROI_1,
                popuplayertitle: "SLC polygons_ROI",
                interactive: true,
                title: '<img src="styles/legend/SLCpolygons_ROI_1.png" /> SLC polygons_ROI'
            });
var group_ca_all_slc_v3r2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "ca_all_slc_v3r2"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_SLCpolygons_ROI_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_SLCpolygons_ROI_1];
lyr_SLCpolygons_ROI_1.set('fieldAliases', {'POLY_ID': 'POLY_ID', 'ECODISTRIC': 'ECODISTRIC', 'ECOREGION': 'ECOREGION', 'ECOPROVINC': 'ECOPROVINC', 'ECOZONE': 'ECOZONE', 'ECOREGION ': 'ECOREGION (EN)', 'ECOREGION _1': 'ECOREGION (FR)', 'Native (ha': 'Native (ha)', 'Native (%)': 'Native (%)', 'Tamed (ha)': 'Tamed (ha)', 'Tamed (%)': 'Tamed (%)', 'Mixed (ha)': 'Mixed (ha)', 'Mixed (%)': 'Mixed (%)', });
lyr_SLCpolygons_ROI_1.set('fieldImages', {'POLY_ID': 'TextEdit', 'ECODISTRIC': 'TextEdit', 'ECOREGION': 'TextEdit', 'ECOPROVINC': 'TextEdit', 'ECOZONE': 'TextEdit', 'ECOREGION ': 'TextEdit', 'ECOREGION _1': 'TextEdit', 'Native (ha': 'TextEdit', 'Native (%)': 'TextEdit', 'Tamed (ha)': 'TextEdit', 'Tamed (%)': 'TextEdit', 'Mixed (ha)': 'TextEdit', 'Mixed (%)': 'TextEdit', });
lyr_SLCpolygons_ROI_1.set('fieldLabels', {'POLY_ID': 'header label - visible with data', 'ECODISTRIC': 'header label - visible with data', 'ECOREGION': 'header label - visible with data', 'ECOPROVINC': 'header label - visible with data', 'ECOZONE': 'header label - visible with data', 'ECOREGION ': 'header label - visible with data', 'ECOREGION _1': 'header label - visible with data', 'Native (ha': 'header label - visible with data', 'Native (%)': 'header label - visible with data', 'Tamed (ha)': 'header label - visible with data', 'Tamed (%)': 'header label - visible with data', 'Mixed (ha)': 'header label - visible with data', 'Mixed (%)': 'header label - visible with data', });
lyr_SLCpolygons_ROI_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});