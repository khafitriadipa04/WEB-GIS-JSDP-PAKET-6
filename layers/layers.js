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
var format_Batas_wilayah_kelurahan_2 = new ol.format.GeoJSON();
var features_Batas_wilayah_kelurahan_2 = format_Batas_wilayah_kelurahan_2.readFeatures(json_Batas_wilayah_kelurahan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_wilayah_kelurahan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_wilayah_kelurahan_2.addFeatures(features_Batas_wilayah_kelurahan_2);
var lyr_Batas_wilayah_kelurahan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_wilayah_kelurahan_2, 
                style: style_Batas_wilayah_kelurahan_2,
                popuplayertitle: 'Batas_wilayah_kelurahan',
                interactive: true,
                title: '<img src="styles/legend/Batas_wilayah_kelurahan_2.png" /> Batas_wilayah_kelurahan'
            });
var format_Jaringan_Perpipaan_3 = new ol.format.GeoJSON();
var features_Jaringan_Perpipaan_3 = format_Jaringan_Perpipaan_3.readFeatures(json_Jaringan_Perpipaan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Perpipaan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Perpipaan_3.addFeatures(features_Jaringan_Perpipaan_3);
var lyr_Jaringan_Perpipaan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Perpipaan_3, 
                style: style_Jaringan_Perpipaan_3,
                popuplayertitle: 'Jaringan_Perpipaan',
                interactive: true,
    title: 'Jaringan_Perpipaan<br />\
    <img src="styles/legend/Jaringan_Perpipaan_3_0.png" /> Dia. 1000mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_3_1.png" /> Dia. 800mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_3_2.png" /> Dia. 600mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_3_3.png" /> Dia. 450mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_3_4.png" /> Dia. 400mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_3_5.png" /> Pipa PK3<br />' });
var format_TITIK_JSDP_4 = new ol.format.GeoJSON();
var features_TITIK_JSDP_4 = format_TITIK_JSDP_4.readFeatures(json_TITIK_JSDP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIK_JSDP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIK_JSDP_4.addFeatures(features_TITIK_JSDP_4);
var lyr_TITIK_JSDP_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIK_JSDP_4, 
                style: style_TITIK_JSDP_4,
                popuplayertitle: 'TITIK_JSDP',
                interactive: true,
    title: 'TITIK_JSDP<br />\
    <img src="styles/legend/TITIK_JSDP_4_0.png" /> BELUM ADA PEKERJAAN<br />\
    <img src="styles/legend/TITIK_JSDP_4_1.png" /> DALAM PROSES<br />\
    <img src="styles/legend/TITIK_JSDP_4_2.png" /> SELESAI - CATATAN (COVER MANHOLE)<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Batas_wilayah_kelurahan_2.setVisible(true);lyr_Jaringan_Perpipaan_3.setVisible(true);lyr_TITIK_JSDP_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleSatelliteHybrid_1,lyr_Batas_wilayah_kelurahan_2,lyr_Jaringan_Perpipaan_3,lyr_TITIK_JSDP_4];
lyr_Batas_wilayah_kelurahan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jaringan_Perpipaan_3.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'panjang pi': 'panjang pi', });
lyr_TITIK_JSDP_4.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'x': 'x', 'y': 'y', 'Survey Progres Pekerjaan  JSDP Paket 6 Submitted On': 'Survey Progres Pekerjaan  JSDP Paket 6 Submitted On', 'Survey Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan': 'Survey Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan': 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify': 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify': 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify': 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify', 'Survey Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan': 'Survey Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan', 'Survey Progres Pekerjaan  JSDP Paket 6 Catatan': 'Survey Progres Pekerjaan  JSDP Paket 6 Catatan', 'Survey pemantauan lingkungan Submitted On': 'Survey pemantauan lingkungan Submitted On', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (APD) - specify': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (APD) - specify', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Kebersihan) - specify', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)', 'Survey pemantauan lingkungan Kondisi Lapangan': 'Survey pemantauan lingkungan Kondisi Lapangan', 'Survey pemantauan lingkungan Catatan': 'Survey pemantauan lingkungan Catatan', 'SURVEY JSDP PAKET 6 Submitted On': 'SURVEY JSDP PAKET 6 Submitted On', 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL': 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL', 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL (PIPA TERJACKING) - specify', 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL (DC) - specify': 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL (DC) - specify', 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL (MANHOLE) - specify': 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL (MANHOLE) - specify', 'SURVEY JSDP PAKET 6 PROGRES PEKERJAAN': 'SURVEY JSDP PAKET 6 PROGRES PEKERJAAN', 'SURVEY JSDP PAKET 6 PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'SURVEY JSDP PAKET 6 PROGRES PEKERJAAN (SUDAH SELESAI) - specify', 'SURVEY JSDP PAKET 6 PROGRES PEKERJAAN (DALAM PROSES) - specify': 'SURVEY JSDP PAKET 6 PROGRES PEKERJAAN (DALAM PROSES) - specify', 'SURVEY JSDP PAKET 6 FOTO KONDISI PEKERJAAN': 'SURVEY JSDP PAKET 6 FOTO KONDISI PEKERJAAN', 'SURVEY JSDP PAKET 6 FOTO KONDISI LAPANGAN': 'SURVEY JSDP PAKET 6 FOTO KONDISI LAPANGAN', 'SURVEY JSDP PAKET 6 CATATAN': 'SURVEY JSDP PAKET 6 CATATAN', });
lyr_Batas_wilayah_kelurahan_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jaringan_Perpipaan_3.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'panjang pi': '', });
lyr_TITIK_JSDP_4.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Submitted On': 'DateTime', 'Survey Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Catatan': 'TextEdit', 'Survey pemantauan lingkungan Submitted On': 'DateTime', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (APD) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'TextEdit', 'Survey pemantauan lingkungan Kondisi Lapangan': 'TextEdit', 'Survey pemantauan lingkungan Catatan': 'TextEdit', 'SURVEY JSDP PAKET 6 Submitted On': 'DateTime', 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL': 'TextEdit', 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL (DC) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL (MANHOLE) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6 PROGRES PEKERJAAN': 'TextEdit', 'SURVEY JSDP PAKET 6 PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6 PROGRES PEKERJAAN (DALAM PROSES) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6 FOTO KONDISI PEKERJAAN': 'TextEdit', 'SURVEY JSDP PAKET 6 FOTO KONDISI LAPANGAN': 'TextEdit', 'SURVEY JSDP PAKET 6 CATATAN': 'TextEdit', });
lyr_Batas_wilayah_kelurahan_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'header label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jaringan_Perpipaan_3.set('fieldLabels', {'Name': 'header label - visible with data', 'FolderPath': 'no label', 'PopupInfo': 'no label', 'panjang pi': 'no label', });
lyr_TITIK_JSDP_4.set('fieldLabels', {'Name': 'header label - visible with data', 'FolderPath': 'header label - visible with data', 'PopupInfo': 'header label - visible with data', 'x': 'header label - visible with data', 'y': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Submitted On': 'no label', 'Survey Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Catatan': 'header label - visible with data', 'Survey pemantauan lingkungan Submitted On': 'no label', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (APD) - specify': 'header label - always visible', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'header label - visible with data', 'Survey pemantauan lingkungan Kondisi Lapangan': 'header label - visible with data', 'Survey pemantauan lingkungan Catatan': 'header label - visible with data', 'SURVEY JSDP PAKET 6 Submitted On': 'no label', 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL': 'header label - visible with data', 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL (DC) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6 PEKERJAAN DETAIL (MANHOLE) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6 PROGRES PEKERJAAN': 'header label - visible with data', 'SURVEY JSDP PAKET 6 PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6 PROGRES PEKERJAAN (DALAM PROSES) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6 FOTO KONDISI PEKERJAAN': 'header label - visible with data', 'SURVEY JSDP PAKET 6 FOTO KONDISI LAPANGAN': 'header label - visible with data', 'SURVEY JSDP PAKET 6 CATATAN': 'header label - visible with data', });
lyr_TITIK_JSDP_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});