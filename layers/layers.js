ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-62.901058, -34.168545, -61.980719, -33.244364]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopomap_2 = new ol.layer.Tile({
            'title': 'OpenTopomap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_TR2anios16102022_3 = new ol.format.GeoJSON();
var features_TR2anios16102022_3 = format_TR2anios16102022_3.readFeatures(json_TR2anios16102022_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TR2anios16102022_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TR2anios16102022_3.addFeatures(features_TR2anios16102022_3);
var lyr_TR2anios16102022_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TR2anios16102022_3, 
                style: style_TR2anios16102022_3,
                interactive: true,
    title: 'TR2anios16102022<br />\
    <img src="styles/legend/TR2anios16102022_3_0.png" /> 9.5 mm - 39.9 mm<br />\
    <img src="styles/legend/TR2anios16102022_3_1.png" /> 39.9 mm - 59.8 mm<br />\
    <img src="styles/legend/TR2anios16102022_3_2.png" /> 59.8 mm - 70 mm<br />\
    <img src="styles/legend/TR2anios16102022_3_3.png" /> 70 mm - 78 mm<br />\
    <img src="styles/legend/TR2anios16102022_3_4.png" /> 78 mm - 87.6 mm<br />\
    <img src="styles/legend/TR2anios16102022_3_5.png" /> 87.6 mm - 96.4 mm<br />\
    <img src="styles/legend/TR2anios16102022_3_6.png" /> 96.4 mm - 311.5 mm<br />'
        });
var format_Isohietas_TR2aos_4 = new ol.format.GeoJSON();
var features_Isohietas_TR2aos_4 = format_Isohietas_TR2aos_4.readFeatures(json_Isohietas_TR2aos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Isohietas_TR2aos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isohietas_TR2aos_4.addFeatures(features_Isohietas_TR2aos_4);
var lyr_Isohietas_TR2aos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Isohietas_TR2aos_4, 
                style: style_Isohietas_TR2aos_4,
                interactive: false,
                title: '<img src="styles/legend/Isohietas_TR2aos_4.png" /> Isohietas_TR = 2 aÃ±os'
            });
var format_LimiteProvincial_5 = new ol.format.GeoJSON();
var features_LimiteProvincial_5 = format_LimiteProvincial_5.readFeatures(json_LimiteProvincial_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LimiteProvincial_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProvincial_5.addFeatures(features_LimiteProvincial_5);
var lyr_LimiteProvincial_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteProvincial_5, 
                style: style_LimiteProvincial_5,
                interactive: false,
                title: '<img src="styles/legend/LimiteProvincial_5.png" /> LimiteProvincial'
            });

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(true);lyr_OpenTopomap_2.setVisible(false);lyr_TR2anios16102022_3.setVisible(true);lyr_Isohietas_TR2aos_4.setVisible(true);lyr_LimiteProvincial_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_OpenTopomap_2,lyr_TR2anios16102022_3,lyr_Isohietas_TR2aos_4,lyr_LimiteProvincial_5];
lyr_TR2anios16102022_3.set('fieldAliases', {'Latitud': 'Latitud', 'Longitud': 'Longitud', 'PMD 2 anio': 'PMD 2 años [mm]', });
lyr_Isohietas_TR2aos_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_LimiteProvincial_5.set('fieldAliases', {'gid': 'gid', });
lyr_TR2anios16102022_3.set('fieldImages', {'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'PMD 2 anio': 'TextEdit', });
lyr_Isohietas_TR2aos_4.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'ELEV': 'Hidden', });
lyr_LimiteProvincial_5.set('fieldImages', {'gid': 'Hidden', });
lyr_TR2anios16102022_3.set('fieldLabels', {'Latitud': 'inline label', 'Longitud': 'inline label', 'PMD 2 anio': 'inline label', });
lyr_Isohietas_TR2aos_4.set('fieldLabels', {});
lyr_LimiteProvincial_5.set('fieldLabels', {});
lyr_LimiteProvincial_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});