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
var format_DiameterJaringanPipaJSDP_2 = new ol.format.GeoJSON();
var features_DiameterJaringanPipaJSDP_2 = format_DiameterJaringanPipaJSDP_2.readFeatures(json_DiameterJaringanPipaJSDP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiameterJaringanPipaJSDP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiameterJaringanPipaJSDP_2.addFeatures(features_DiameterJaringanPipaJSDP_2);
var lyr_DiameterJaringanPipaJSDP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiameterJaringanPipaJSDP_2, 
                style: style_DiameterJaringanPipaJSDP_2,
                popuplayertitle: 'Diameter Jaringan Pipa JSDP',
                interactive: true,
    title: 'Diameter Jaringan Pipa JSDP<br />\
    <img src="styles/legend/DiameterJaringanPipaJSDP_2_0.png" /> 400<br />\
    <img src="styles/legend/DiameterJaringanPipaJSDP_2_1.png" /> 450<br />\
    <img src="styles/legend/DiameterJaringanPipaJSDP_2_2.png" /> 600<br />\
    <img src="styles/legend/DiameterJaringanPipaJSDP_2_3.png" /> 800<br />\
    <img src="styles/legend/DiameterJaringanPipaJSDP_2_4.png" /> 1000<br />' });
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

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_DiameterJaringanPipaJSDP_2.setVisible(true);lyr_TITIK_JSDP_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleSatelliteHybrid_1,lyr_DiameterJaringanPipaJSDP_2,lyr_TITIK_JSDP_3];
lyr_DiameterJaringanPipaJSDP_2.set('fieldAliases', {'Diameter': 'Diameter', 'Item Peker': 'Item Peker', });
lyr_TITIK_JSDP_3.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'x': 'x', 'y': 'y', 'Progres Pekerjaan  JSDP Paket 6 Submitted On': 'Progres Pekerjaan  JSDP Paket 6 Submitted On', 'Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan': 'Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan': 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify': 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify': 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify': 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify', 'Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan': 'Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan', 'Progres Pekerjaan  JSDP Paket 6 Catatan': 'Progres Pekerjaan  JSDP Paket 6 Catatan', 'Pemantauan Lingkungan Pekerjaan Submitted On': 'Pemantauan Lingkungan Pekerjaan Submitted On', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN': 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (APD) - specify': 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (APD) - specify', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Kebersihan) - specify', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)', 'Pemantauan Lingkungan Pekerjaan Kondisi Lapangan': 'Pemantauan Lingkungan Pekerjaan Kondisi Lapangan', 'Pemantauan Lingkungan Pekerjaan Catatan': 'Pemantauan Lingkungan Pekerjaan Catatan', 'Data Eksisting Paket 6 Submitted On': 'Data Eksisting Paket 6 Submitted On', 'Data Eksisting Paket 6 PEKERJAAN DETAIL': 'Data Eksisting Paket 6 PEKERJAAN DETAIL', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'Data Eksisting Paket 6 PEKERJAAN DETAIL (PIPA TERJACKING) - specify', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (DC) - specify': 'Data Eksisting Paket 6 PEKERJAAN DETAIL (DC) - specify', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (MANHOLE) - specify': 'Data Eksisting Paket 6 PEKERJAAN DETAIL (MANHOLE) - specify', 'Data Eksisting Paket 6 PROGRES PEKERJAAN': 'Data Eksisting Paket 6 PROGRES PEKERJAAN', 'Data Eksisting Paket 6 PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'Data Eksisting Paket 6 PROGRES PEKERJAAN (SUDAH SELESAI) - specify', 'Data Eksisting Paket 6 PROGRES PEKERJAAN (DALAM PROSES) - specify': 'Data Eksisting Paket 6 PROGRES PEKERJAAN (DALAM PROSES) - specify', 'Data Eksisting Paket 6 FOTO KONDISI PEKERJAAN': 'Data Eksisting Paket 6 FOTO KONDISI PEKERJAAN', 'Data Eksisting Paket 6 FOTO KONDISI LAPANGAN': 'Data Eksisting Paket 6 FOTO KONDISI LAPANGAN', 'Data Eksisting Paket 6 CATATAN': 'Data Eksisting Paket 6 CATATAN', });
lyr_DiameterJaringanPipaJSDP_2.set('fieldImages', {'Diameter': 'TextEdit', 'Item Peker': 'TextEdit', });
lyr_TITIK_JSDP_3.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Submitted On': 'DateTime', 'Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan': 'TextEdit', 'Progres Pekerjaan  JSDP Paket 6 Catatan': 'TextEdit', 'Pemantauan Lingkungan Pekerjaan Submitted On': 'DateTime', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN': 'TextEdit', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (APD) - specify': 'TextEdit', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'TextEdit', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'TextEdit', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'TextEdit', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'TextEdit', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'TextEdit', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'TextEdit', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'TextEdit', 'Pemantauan Lingkungan Pekerjaan Kondisi Lapangan': 'TextEdit', 'Pemantauan Lingkungan Pekerjaan Catatan': 'TextEdit', 'Data Eksisting Paket 6 Submitted On': 'DateTime', 'Data Eksisting Paket 6 PEKERJAAN DETAIL': 'TextEdit', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'TextEdit', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (DC) - specify': 'TextEdit', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (MANHOLE) - specify': 'TextEdit', 'Data Eksisting Paket 6 PROGRES PEKERJAAN': 'TextEdit', 'Data Eksisting Paket 6 PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'TextEdit', 'Data Eksisting Paket 6 PROGRES PEKERJAAN (DALAM PROSES) - specify': 'TextEdit', 'Data Eksisting Paket 6 FOTO KONDISI PEKERJAAN': 'TextEdit', 'Data Eksisting Paket 6 FOTO KONDISI LAPANGAN': 'TextEdit', 'Data Eksisting Paket 6 CATATAN': 'TextEdit', });
lyr_DiameterJaringanPipaJSDP_2.set('fieldLabels', {'Diameter': 'header label - visible with data', 'Item Peker': 'header label - visible with data', });
lyr_TITIK_JSDP_3.set('fieldLabels', {'Name': 'header label - visible with data', 'FolderPath': 'header label - visible with data', 'PopupInfo': 'header label - visible with data', 'x': 'header label - visible with data', 'y': 'header label - visible with data', 'Progres Pekerjaan  JSDP Paket 6 Submitted On': 'no label', 'Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan': 'header label - visible with data', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan': 'header label - visible with data', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify': 'no label', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify': 'no label', 'Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify': 'no label', 'Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan': 'header label - visible with data', 'Progres Pekerjaan  JSDP Paket 6 Catatan': 'header label - visible with data', 'Pemantauan Lingkungan Pekerjaan Submitted On': 'no label', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN': 'header label - visible with data', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (APD) - specify': 'header label - visible with data', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'header label - visible with data', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'header label - visible with data', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'header label - visible with data', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'header label - visible with data', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'header label - visible with data', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'header label - visible with data', 'Pemantauan Lingkungan Pekerjaan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'header label - visible with data', 'Pemantauan Lingkungan Pekerjaan Kondisi Lapangan': 'header label - visible with data', 'Pemantauan Lingkungan Pekerjaan Catatan': 'header label - visible with data', 'Data Eksisting Paket 6 Submitted On': 'no label', 'Data Eksisting Paket 6 PEKERJAAN DETAIL': 'header label - visible with data', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'no label', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (DC) - specify': 'no label', 'Data Eksisting Paket 6 PEKERJAAN DETAIL (MANHOLE) - specify': 'no label', 'Data Eksisting Paket 6 PROGRES PEKERJAAN': 'header label - visible with data', 'Data Eksisting Paket 6 PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'no label', 'Data Eksisting Paket 6 PROGRES PEKERJAAN (DALAM PROSES) - specify': 'no label', 'Data Eksisting Paket 6 FOTO KONDISI PEKERJAAN': 'header label - visible with data', 'Data Eksisting Paket 6 FOTO KONDISI LAPANGAN': 'header label - visible with data', 'Data Eksisting Paket 6 CATATAN': 'header label - visible with data', });
lyr_TITIK_JSDP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});