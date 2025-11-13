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
var format_BatasWilayahJakartaUtara_2 = new ol.format.GeoJSON();
var features_BatasWilayahJakartaUtara_2 = format_BatasWilayahJakartaUtara_2.readFeatures(json_BatasWilayahJakartaUtara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahJakartaUtara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahJakartaUtara_2.addFeatures(features_BatasWilayahJakartaUtara_2);
var lyr_BatasWilayahJakartaUtara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahJakartaUtara_2, 
                style: style_BatasWilayahJakartaUtara_2,
                popuplayertitle: 'Batas Wilayah Jakarta Utara',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahJakartaUtara_2.png" /> Batas Wilayah Jakarta Utara'
            });
var format_BatasWilayahJakartaBarat_3 = new ol.format.GeoJSON();
var features_BatasWilayahJakartaBarat_3 = format_BatasWilayahJakartaBarat_3.readFeatures(json_BatasWilayahJakartaBarat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahJakartaBarat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahJakartaBarat_3.addFeatures(features_BatasWilayahJakartaBarat_3);
var lyr_BatasWilayahJakartaBarat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahJakartaBarat_3, 
                style: style_BatasWilayahJakartaBarat_3,
                popuplayertitle: 'Batas Wilayah Jakarta Barat',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahJakartaBarat_3.png" /> Batas Wilayah Jakarta Barat'
            });
var format_Jaringan_Perpipaan_4 = new ol.format.GeoJSON();
var features_Jaringan_Perpipaan_4 = format_Jaringan_Perpipaan_4.readFeatures(json_Jaringan_Perpipaan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Perpipaan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Perpipaan_4.addFeatures(features_Jaringan_Perpipaan_4);
var lyr_Jaringan_Perpipaan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Perpipaan_4, 
                style: style_Jaringan_Perpipaan_4,
                popuplayertitle: 'Jaringan_Perpipaan',
                interactive: true,
    title: 'Jaringan_Perpipaan<br />\
    <img src="styles/legend/Jaringan_Perpipaan_4_0.png" /> Dia. 1000mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_4_1.png" /> Dia. 800mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_4_2.png" /> Dia. 600mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_4_3.png" /> Dia. 450mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_4_4.png" /> Dia. 400mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_4_5.png" /> Pipa PK3<br />' });
var format_TITIK_JSDP_5 = new ol.format.GeoJSON();
var features_TITIK_JSDP_5 = format_TITIK_JSDP_5.readFeatures(json_TITIK_JSDP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIK_JSDP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIK_JSDP_5.addFeatures(features_TITIK_JSDP_5);
var lyr_TITIK_JSDP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIK_JSDP_5, 
                style: style_TITIK_JSDP_5,
                popuplayertitle: 'TITIK_JSDP',
                interactive: true,
    title: 'TITIK_JSDP<br />\
    <img src="styles/legend/TITIK_JSDP_5_0.png" /> BELUM ADA PEKERJAAN<br />\
    <img src="styles/legend/TITIK_JSDP_5_1.png" /> DALAM PROSES<br />\
    <img src="styles/legend/TITIK_JSDP_5_2.png" /> SELESAI - CATATAN (COVER MANHOLE)<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_BatasWilayahJakartaUtara_2.setVisible(true);lyr_BatasWilayahJakartaBarat_3.setVisible(true);lyr_Jaringan_Perpipaan_4.setVisible(true);lyr_TITIK_JSDP_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleSatelliteHybrid_1,lyr_BatasWilayahJakartaUtara_2,lyr_BatasWilayahJakartaBarat_3,lyr_Jaringan_Perpipaan_4,lyr_TITIK_JSDP_5];
lyr_BatasWilayahJakartaUtara_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BatasWilayahJakartaBarat_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jaringan_Perpipaan_4.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'panjang pi': 'panjang pi', });
lyr_TITIK_JSDP_5.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'x': 'x', 'y': 'y', 'Survey Progres Pekerjaan  JSDP Paket 6 Submitted On': 'Survey Progres Pekerjaan  JSDP Paket 6 Submitted On', 'Survey Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan': 'Survey Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan': 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify': 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify': 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify': 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify', 'Survey Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan': 'Survey Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan', 'Survey Progres Pekerjaan  JSDP Paket 6 Catatan': 'Survey Progres Pekerjaan  JSDP Paket 6 Catatan', 'Survey pemantauan lingkungan Submitted On': 'Survey pemantauan lingkungan Submitted On', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (APD) - specify': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (APD) - specify', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Kebersihan) - specify', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)', 'Survey pemantauan lingkungan Kondisi Lapangan': 'Survey pemantauan lingkungan Kondisi Lapangan', 'Survey pemantauan lingkungan Catatan': 'Survey pemantauan lingkungan Catatan', 'SURVEY JSDP PAKET 6  Submitted On': 'SURVEY JSDP PAKET 6  Submitted On', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL': 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (PIPA TERJACKING) - specify', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (DC) - specify': 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (DC) - specify', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (MANHOLE) - specify': 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (MANHOLE) - specify', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN': 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (SUDAH SELESAI) - specify', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (DALAM PROSES) - specify': 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (DALAM PROSES) - specify', 'SURVEY JSDP PAKET 6  FOTO KONDISI PEKERJAAN': 'SURVEY JSDP PAKET 6  FOTO KONDISI PEKERJAAN', 'SURVEY JSDP PAKET 6  FOTO KONDISI LAPANGAN': 'SURVEY JSDP PAKET 6  FOTO KONDISI LAPANGAN', 'SURVEY JSDP PAKET 6  CATATAN': 'SURVEY JSDP PAKET 6  CATATAN', });
lyr_BatasWilayahJakartaUtara_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BatasWilayahJakartaBarat_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jaringan_Perpipaan_4.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'panjang pi': '', });
lyr_TITIK_JSDP_5.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Submitted On': 'DateTime', 'Survey Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6 Catatan': 'TextEdit', 'Survey pemantauan lingkungan Submitted On': 'DateTime', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (APD) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'TextEdit', 'Survey pemantauan lingkungan Kondisi Lapangan': 'TextEdit', 'Survey pemantauan lingkungan Catatan': 'TextEdit', 'SURVEY JSDP PAKET 6  Submitted On': 'DateTime', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL': 'TextEdit', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (DC) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (MANHOLE) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN': 'TextEdit', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (DALAM PROSES) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6  FOTO KONDISI PEKERJAAN': 'TextEdit', 'SURVEY JSDP PAKET 6  FOTO KONDISI LAPANGAN': 'TextEdit', 'SURVEY JSDP PAKET 6  CATATAN': 'TextEdit', });
lyr_BatasWilayahJakartaUtara_2.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BatasWilayahJakartaBarat_3.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jaringan_Perpipaan_4.set('fieldLabels', {'Name': 'header label - visible with data', 'FolderPath': 'no label', 'PopupInfo': 'no label', 'panjang pi': 'no label', });
lyr_TITIK_JSDP_5.set('fieldLabels', {'Name': 'header label - visible with data', 'FolderPath': 'header label - visible with data', 'PopupInfo': 'header label - visible with data', 'x': 'header label - visible with data', 'y': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Submitted On': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Jenis Pekerjaan': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Sudah selesai) - specify': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Belum ada pekerjaan) - specify': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Status Pekerjaan (Dalam Pekerjaan) - specify': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Foto pekerjaan': 'header label - visible with data', 'Survey Progres Pekerjaan  JSDP Paket 6 Catatan': 'header label - visible with data', 'Survey pemantauan lingkungan Submitted On': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (APD) - specify': 'header label - always visible', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'header label - visible with data', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'header label - visible with data', 'Survey pemantauan lingkungan Kondisi Lapangan': 'header label - visible with data', 'Survey pemantauan lingkungan Catatan': 'header label - visible with data', 'SURVEY JSDP PAKET 6  Submitted On': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (DC) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (MANHOLE) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (DALAM PROSES) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6  FOTO KONDISI PEKERJAAN': 'header label - visible with data', 'SURVEY JSDP PAKET 6  FOTO KONDISI LAPANGAN': 'header label - visible with data', 'SURVEY JSDP PAKET 6  CATATAN': 'header label - visible with data', });
lyr_TITIK_JSDP_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});