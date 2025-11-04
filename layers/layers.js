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
var format_BatasWilayahJakartaUtara_1 = new ol.format.GeoJSON();
var features_BatasWilayahJakartaUtara_1 = format_BatasWilayahJakartaUtara_1.readFeatures(json_BatasWilayahJakartaUtara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahJakartaUtara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahJakartaUtara_1.addFeatures(features_BatasWilayahJakartaUtara_1);
var lyr_BatasWilayahJakartaUtara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahJakartaUtara_1, 
                style: style_BatasWilayahJakartaUtara_1,
                popuplayertitle: 'Batas Wilayah Jakarta Utara',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahJakartaUtara_1.png" /> Batas Wilayah Jakarta Utara'
            });
var format_BatasWilayahJakartaBarat_2 = new ol.format.GeoJSON();
var features_BatasWilayahJakartaBarat_2 = format_BatasWilayahJakartaBarat_2.readFeatures(json_BatasWilayahJakartaBarat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahJakartaBarat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahJakartaBarat_2.addFeatures(features_BatasWilayahJakartaBarat_2);
var lyr_BatasWilayahJakartaBarat_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahJakartaBarat_2, 
                style: style_BatasWilayahJakartaBarat_2,
                popuplayertitle: 'Batas Wilayah Jakarta Barat',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahJakartaBarat_2.png" /> Batas Wilayah Jakarta Barat'
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
                popuplayertitle: 'TITIK_JSDP',{'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'SURVEY JSDP PAKET 6Enumerator': 'TextEdit', 'SURVEY JSDP PAKET 6Submitted On': 'DateTime', 'SURVEY JSDP PAKET 6PEKERJAAN': 'TextEdit', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL': 'TextEdit', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (DC) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (MANHOLE) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (PIPA PERSIL) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN': 'TextEdit', 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN (DALAM PROSES) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6FOTO KONDISI PEKERJAAN': 'TextEdit', 'SURVEY JSDP PAKET 6FOTO KONDISI LAPANGAN': 'TextEdit', 'SURVEY JSDP PAKET 6CATATAN': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Enumerator': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Submitted On': 'DateTime', 'Survey Progres Pekerjaan  JSDP Paket 6Jenis Pekerjaan': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Sudah selesai) - specify': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Belum ada pekerjaan) - specify': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Dalam Pekerjaan) - specify': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Foto pekerjaan': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Catatan': 'TextEdit', 'Survey pemantauan lingkungan Enumerator': 'TextEdit', 'Survey pemantauan lingkungan Submitted On': 'DateTime', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (APD) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'TextEdit', 'Survey pemantauan lingkungan Kondisi Lapangan': 'TextEdit', 'Survey pemantauan lingkungan Catatan': 'TextEdit', }
                interactive: true,
                title: '<img src="styles/legend/TITIK_JSDP_4.png" /> TITIK_JSDP'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BatasWilayahJakartaUtara_1.setVisible(true);lyr_BatasWilayahJakartaBarat_2.setVisible(true);lyr_Jaringan_Perpipaan_3.setVisible(true);lyr_TITIK_JSDP_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BatasWilayahJakartaUtara_1,lyr_BatasWilayahJakartaBarat_2,lyr_Jaringan_Perpipaan_3,lyr_TITIK_JSDP_4];
lyr_BatasWilayahJakartaUtara_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BatasWilayahJakartaBarat_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jaringan_Perpipaan_3.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', });
lyr_TITIK_JSDP_4.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'x': 'x', 'y': 'y', 'SURVEY JSDP PAKET 6Enumerator': 'SURVEY JSDP PAKET 6Enumerator', 'SURVEY JSDP PAKET 6Submitted On': 'SURVEY JSDP PAKET 6Submitted On', 'SURVEY JSDP PAKET 6PEKERJAAN': 'SURVEY JSDP PAKET 6PEKERJAAN', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL': 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (PIPA TERJACKING) - specify', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (DC) - specify': 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (DC) - specify', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (MANHOLE) - specify': 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (MANHOLE) - specify', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (PIPA PERSIL) - specify': 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (PIPA PERSIL) - specify', 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN': 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN', 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN (SUDAH SELESAI) - specify', 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN (DALAM PROSES) - specify': 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN (DALAM PROSES) - specify', 'SURVEY JSDP PAKET 6FOTO KONDISI PEKERJAAN': 'SURVEY JSDP PAKET 6FOTO KONDISI PEKERJAAN', 'SURVEY JSDP PAKET 6FOTO KONDISI LAPANGAN': 'SURVEY JSDP PAKET 6FOTO KONDISI LAPANGAN', 'SURVEY JSDP PAKET 6CATATAN': 'SURVEY JSDP PAKET 6CATATAN', 'Survey Progres Pekerjaan  JSDP Paket 6Enumerator': 'Survey Progres Pekerjaan  JSDP Paket 6Enumerator', 'Survey Progres Pekerjaan  JSDP Paket 6Submitted On': 'Survey Progres Pekerjaan  JSDP Paket 6Submitted On', 'Survey Progres Pekerjaan  JSDP Paket 6Jenis Pekerjaan': 'Survey Progres Pekerjaan  JSDP Paket 6Jenis Pekerjaan', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan': 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Sudah selesai) - specify': 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Sudah selesai) - specify', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Belum ada pekerjaan) - specify': 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Belum ada pekerjaan) - specify', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Dalam Pekerjaan) - specify': 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Dalam Pekerjaan) - specify', 'Survey Progres Pekerjaan  JSDP Paket 6Foto pekerjaan': 'Survey Progres Pekerjaan  JSDP Paket 6Foto pekerjaan', 'Survey Progres Pekerjaan  JSDP Paket 6Catatan': 'Survey Progres Pekerjaan  JSDP Paket 6Catatan', 'Survey pemantauan lingkungan Enumerator': 'Survey pemantauan lingkungan Enumerator', 'Survey pemantauan lingkungan Submitted On': 'Survey pemantauan lingkungan Submitted On', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (APD) - specify': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (APD) - specify', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Kebersihan) - specify', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)', 'Survey pemantauan lingkungan Kondisi Lapangan': 'Survey pemantauan lingkungan Kondisi Lapangan', 'Survey pemantauan lingkungan Catatan': 'Survey pemantauan lingkungan Catatan', });
lyr_BatasWilayahJakartaUtara_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BatasWilayahJakartaBarat_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jaringan_Perpipaan_3.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', });
lyr_TITIK_JSDP_4.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'SURVEY JSDP PAKET 6Enumerator': 'TextEdit', 'SURVEY JSDP PAKET 6Submitted On': 'DateTime', 'SURVEY JSDP PAKET 6PEKERJAAN': 'TextEdit', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL': 'TextEdit', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (DC) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (MANHOLE) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (PIPA PERSIL) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN': 'TextEdit', 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN (DALAM PROSES) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6FOTO KONDISI PEKERJAAN': 'TextEdit', 'SURVEY JSDP PAKET 6FOTO KONDISI LAPANGAN': 'TextEdit', 'SURVEY JSDP PAKET 6CATATAN': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Enumerator': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Submitted On': 'DateTime', 'Survey Progres Pekerjaan  JSDP Paket 6Jenis Pekerjaan': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Sudah selesai) - specify': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Belum ada pekerjaan) - specify': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Dalam Pekerjaan) - specify': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Foto pekerjaan': 'TextEdit', 'Survey Progres Pekerjaan  JSDP Paket 6Catatan': 'TextEdit', 'Survey pemantauan lingkungan Enumerator': 'TextEdit', 'Survey pemantauan lingkungan Submitted On': 'DateTime', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (APD) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'TextEdit', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'TextEdit', 'Survey pemantauan lingkungan Kondisi Lapangan': 'TextEdit', 'Survey pemantauan lingkungan Catatan': 'TextEdit', });
lyr_BatasWilayahJakartaUtara_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BatasWilayahJakartaBarat_2.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jaringan_Perpipaan_3.set('fieldLabels', {'Name': 'inline label - visible with data', 'FolderPath': 'no label', 'PopupInfo': 'no label', });
lyr_TITIK_JSDP_4.set('fieldLabels', {'Name': 'inline label - visible with data', 'FolderPath': 'no label', 'PopupInfo': 'no label', 'x': 'no label', 'y': 'no label', 'SURVEY JSDP PAKET 6Enumerator': 'no label', 'SURVEY JSDP PAKET 6Submitted On': 'no label', 'SURVEY JSDP PAKET 6PEKERJAAN': 'no label', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL': 'no label', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'no label', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (DC) - specify': 'no label', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (MANHOLE) - specify': 'no label', 'SURVEY JSDP PAKET 6PEKERJAAN DETAIL (PIPA PERSIL) - specify': 'no label', 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN': 'no label', 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'no label', 'SURVEY JSDP PAKET 6PROGRES PEKERJAAN (DALAM PROSES) - specify': 'no label', 'SURVEY JSDP PAKET 6FOTO KONDISI PEKERJAAN': 'no label', 'SURVEY JSDP PAKET 6FOTO KONDISI LAPANGAN': 'no label', 'SURVEY JSDP PAKET 6CATATAN': 'no label', 'Survey Progres Pekerjaan  JSDP Paket 6Enumerator': 'no label', 'Survey Progres Pekerjaan  JSDP Paket 6Submitted On': 'no label', 'Survey Progres Pekerjaan  JSDP Paket 6Jenis Pekerjaan': 'no label', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan': 'no label', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Sudah selesai) - specify': 'no label', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Belum ada pekerjaan) - specify': 'no label', 'Survey Progres Pekerjaan  JSDP Paket 6Status Pekerjaan (Dalam Pekerjaan) - specify': 'no label', 'Survey Progres Pekerjaan  JSDP Paket 6Foto pekerjaan': 'no label', 'Survey Progres Pekerjaan  JSDP Paket 6Catatan': 'no label', 'Survey pemantauan lingkungan Enumerator': 'no label', 'Survey pemantauan lingkungan Submitted On': 'no label', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN': 'no label', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (APD) - specify': 'no label', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'no label', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'no label', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'no label', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'no label', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'no label', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'no label', 'Survey pemantauan lingkungan INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'no label', 'Survey pemantauan lingkungan Kondisi Lapangan': 'no label', 'Survey pemantauan lingkungan Catatan': 'no label', });
lyr_TITIK_JSDP_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
