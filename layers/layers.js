var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Jaringan_Perpipaan_2 = new ol.format.GeoJSON();
var features_Jaringan_Perpipaan_2 = format_Jaringan_Perpipaan_2.readFeatures(json_Jaringan_Perpipaan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Perpipaan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Perpipaan_2.addFeatures(features_Jaringan_Perpipaan_2);
var lyr_Jaringan_Perpipaan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Perpipaan_2, 
                style: style_Jaringan_Perpipaan_2,
                popuplayertitle: 'Jaringan_Perpipaan',
                interactive: true,
    title: 'Jaringan_Perpipaan<br />\
    <img src="styles/legend/Jaringan_Perpipaan_2_0.png" /> Dia. 1000mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_2_1.png" /> Dia. 800mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_2_2.png" /> Dia. 600mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_2_3.png" /> Dia. 450mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_2_4.png" /> Dia. 400mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_2_5.png" /> Pipa PK3<br />' });
var format_TITIK_JSDP_3 = new ol.format.GeoJSON();
var features_TITIK_JSDP_3 = format_TITIK_JSDP_3.readFeatures(json_TITIK_JSDP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIK_JSDP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIK_JSDP_3.addFeatures(features_TITIK_JSDP_3);
var lyr_TITIK_JSDP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIK_JSDP_3, 
                style: style_TITIK_JSDP_3,
                popuplayertitle: 'TITIK_JSDP',
                interactive: true,
    title: 'TITIK_JSDP<br />\
    <img src="styles/legend/TITIK_JSDP_3_0.png" /> BELUM ADA PEKERJAAN<br />\
    <img src="styles/legend/TITIK_JSDP_3_1.png" /> DALAM PROSES<br />\
    <img src="styles/legend/TITIK_JSDP_3_2.png" /> SELESAI - CATATAN (COVER MANHOLE)<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Jaringan_Perpipaan_2.setVisible(true);lyr_TITIK_JSDP_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleSatelliteHybrid_1,lyr_Jaringan_Perpipaan_2,lyr_TITIK_JSDP_3];
lyr_Jaringan_Perpipaan_2.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'panjang pi': 'panjang pi', });
lyr_TITIK_JSDP_3.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'x': 'x', 'y': 'y', 'Progres Pekerjaan  JSDP Paket 6 Submitted On': 'Progres Pekerjaan  JSDP Paket 6 Submitted On', 'Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan': 'Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan': 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify': 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify': 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify': 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify', 'Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan': 'Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan', 'Progres Pekerjaan  JSDP Paket 6 Catatan': 'Progres Pekerjaan  JSDP Paket 6 Catatan', 'Data Eksisting Paket 6 Submitted On': 'Data Eksisting Paket 6 Submitted On', 'Data Eksisting Paket 6 PEKERJAAN DETAIL': 'Data Eksisting Paket 6 PEKERJAAN DETAIL', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'Data Eksisting Paket 6 PEKERJAAN DETAIL (PIPA TERJACKING) - specify', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (DC) - specify': 'Data Eksisting Paket 6 PEKERJAAN DETAIL (DC) - specify', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (MANHOLE) - specify': 'Data Eksisting Paket 6 PEKERJAAN DETAIL (MANHOLE) - specify', 'Data Eksisting Paket 6 PROGRES PEKERJAAN': 'Data Eksisting Paket 6 PROGRES PEKERJAAN', 'Data Eksisting Paket 6 PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'Data Eksisting Paket 6 PROGRES PEKERJAAN (SUDAH SELESAI) - specify', 'Data Eksisting Paket 6 PROGRES PEKERJAAN (DALAM PROSES) - specify': 'Data Eksisting Paket 6 PROGRES PEKERJAAN (DALAM PROSES) - specify', 'Data Eksisting Paket 6 FOTO KONDISI PEKERJAAN': 'Data Eksisting Paket 6 FOTO KONDISI PEKERJAAN', 'Data Eksisting Paket 6 FOTO KONDISI LAPANGAN': 'Data Eksisting Paket 6 FOTO KONDISI LAPANGAN', 'Data Eksisting Paket 6 CATATAN': 'Data Eksisting Paket 6 CATATAN', });
lyr_Jaringan_Perpipaan_2.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'panjang pi': '', });
lyr_TITIK_JSDP_3.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Submitted On': 'DateTime', 'Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Catatan': 'TextEdit', 'Data Eksisting Paket 6 Submitted On': 'DateTime', 'Data Eksisting Paket 6 PEKERJAAN DETAIL': 'TextEdit', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'TextEdit', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (DC) - specify': 'TextEdit', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (MANHOLE) - specify': 'TextEdit', 'Data Eksisting Paket 6 PROGRES PEKERJAAN': 'TextEdit', 'Data Eksisting Paket 6 PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'TextEdit', 'Data Eksisting Paket 6 PROGRES PEKERJAAN (DALAM PROSES) - specify': 'TextEdit', 'Data Eksisting Paket 6 FOTO KONDISI PEKERJAAN': 'TextEdit', 'Data Eksisting Paket 6 FOTO KONDISI LAPANGAN': 'TextEdit', 'Data Eksisting Paket 6 CATATAN': 'TextEdit', });
lyr_Jaringan_Perpipaan_2.set('fieldLabels', {'Name': 'header label - visible with data', 'FolderPath': 'no label', 'PopupInfo': 'no label', 'panjang pi': 'no label', });
lyr_TITIK_JSDP_3.set('fieldLabels', {'Name': 'header label - visible with data', 'FolderPath': 'header label - visible with data', 'PopupInfo': 'header label - visible with data', 'x': 'header label - visible with data', 'y': 'header label - visible with data', 'Progres Pekerjaan  JSDP Paket 6 Submitted On': 'no label', 'Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan': 'header label - visible with data', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan': 'header label - visible with data', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify': 'no label', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify': 'no label', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify': 'no label', 'Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan': 'header label - visible with data', 'Progres Pekerjaan  JSDP Paket 6 Catatan': 'header label - visible with data', 'Data Eksisting Paket 6 Submitted On': 'no label', 'Data Eksisting Paket 6 PEKERJAAN DETAIL': 'header label - visible with data', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'header label - visible with data', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (DC) - specify': 'header label - visible with data', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (MANHOLE) - specify': 'header label - visible with data', 'Data Eksisting Paket 6 PROGRES PEKERJAAN': 'header label - visible with data', 'Data Eksisting Paket 6 PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'header label - visible with data', 'Data Eksisting Paket 6 PROGRES PEKERJAAN (DALAM PROSES) - specify': 'header label - visible with data', 'Data Eksisting Paket 6 FOTO KONDISI PEKERJAAN': 'header label - visible with data', 'Data Eksisting Paket 6 FOTO KONDISI LAPANGAN': 'header label - visible with data', 'Data Eksisting Paket 6 CATATAN': 'header label - visible with data', });
lyr_TITIK_JSDP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});