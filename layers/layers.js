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
var format_Pemantauanlingkunganpaket6_5 = new ol.format.GeoJSON();
var features_Pemantauanlingkunganpaket6_5 = format_Pemantauanlingkunganpaket6_5.readFeatures(json_Pemantauanlingkunganpaket6_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemantauanlingkunganpaket6_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemantauanlingkunganpaket6_5.addFeatures(features_Pemantauanlingkunganpaket6_5);
var lyr_Pemantauanlingkunganpaket6_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemantauanlingkunganpaket6_5, 
                style: style_Pemantauanlingkunganpaket6_5,
                popuplayertitle: 'Pemantauan lingkungan paket 6',
                interactive: true,
                title: '<img src="styles/legend/Pemantauanlingkunganpaket6_5.png" /> Pemantauan lingkungan paket 6'
            });
var format_TITIK_JSDP_6 = new ol.format.GeoJSON();
var features_TITIK_JSDP_6 = format_TITIK_JSDP_6.readFeatures(json_TITIK_JSDP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIK_JSDP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIK_JSDP_6.addFeatures(features_TITIK_JSDP_6);
var lyr_TITIK_JSDP_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIK_JSDP_6, 
                style: style_TITIK_JSDP_6,
                popuplayertitle: 'TITIK_JSDP',
                interactive: true,
                title: '<img src="styles/legend/TITIK_JSDP_6.png" /> TITIK_JSDP'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_BatasWilayahJakartaUtara_2.setVisible(true);lyr_BatasWilayahJakartaBarat_3.setVisible(true);lyr_Jaringan_Perpipaan_4.setVisible(true);lyr_Pemantauanlingkunganpaket6_5.setVisible(true);lyr_TITIK_JSDP_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleSatelliteHybrid_1,lyr_BatasWilayahJakartaUtara_2,lyr_BatasWilayahJakartaBarat_3,lyr_Jaringan_Perpipaan_4,lyr_Pemantauanlingkunganpaket6_5,lyr_TITIK_JSDP_6];
lyr_BatasWilayahJakartaUtara_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BatasWilayahJakartaBarat_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jaringan_Perpipaan_4.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', });
lyr_Pemantauanlingkunganpaket6_5.set('fieldAliases', {'Deployment': 'Deployment', 'Enumerator': 'Enumerator', 'Status': 'Status', 'Response Code': 'Response Code', 'Drafted On': 'Drafted On', 'Submitted On': 'Submitted On', 'Draft Name': 'Draft Name', 'Last Modified On': 'Last Modified On', 'Last Modified By': 'Last Modified By', 'Approval Level': 'Approval Level', 'Rejection message': 'Rejection message', 'Number of Rejections': 'Number of Rejections', 'Number of Edits': 'Number of Edits', 'IP Address': 'IP Address', 'INSPEKSI LINGKUNGAN': 'INSPEKSI LINGKUNGAN', 'INSPEKSI LINGKUNGAN (APD) - specify': 'INSPEKSI LINGKUNGAN (APD) - specify', 'INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'INSPEKSI LINGKUNGAN (Kebersihan) - specify', 'INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify', 'INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'INSPEKSI LINGKUNGAN (Lainnya) - specify (1)', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'INSPEKSI LINGKUNGAN (Lainnya) - specify (2)', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'INSPEKSI LINGKUNGAN (Lainnya) - specify (3)', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'INSPEKSI LINGKUNGAN (Lainnya) - specify (4)', 'ID PEKERJAAN': 'ID PEKERJAAN', 'Kondisi Lapangan': 'Kondisi Lapangan', 'Lokasi Pekerjaan (latitude)': 'Lokasi Pekerjaan (latitude)', 'Lokasi Pekerjaan (longitude)': 'Lokasi Pekerjaan (longitude)', 'Lokasi Pekerjaan (method)': 'Lokasi Pekerjaan (method)', 'Lokasi Pekerjaan (administrative region)': 'Lokasi Pekerjaan (administrative region)', 'Lokasi Pekerjaan (accuracy)': 'Lokasi Pekerjaan (accuracy)', 'Lokasi Pekerjaan (altitude)': 'Lokasi Pekerjaan (altitude)', 'Catatan': 'Catatan', });
lyr_TITIK_JSDP_6.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'x': 'x', 'y': 'y', 'SURVEY JSDP PAKET 6  Submitted On': 'SURVEY JSDP PAKET 6  Submitted On', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL': 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (PIPA TERJACKING) - specify', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (DC) - specify': 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (DC) - specify', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (MANHOLE) - specify': 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (MANHOLE) - specify', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN': 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (SUDAH SELESAI) - specify', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (DALAM PROSES) - specify': 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (DALAM PROSES) - specify', 'SURVEY JSDP PAKET 6  FOTO KONDISI PEKERJAAN': 'SURVEY JSDP PAKET 6  FOTO KONDISI PEKERJAAN', 'SURVEY JSDP PAKET 6  FOTO KONDISI LAPANGAN': 'SURVEY JSDP PAKET 6  FOTO KONDISI LAPANGAN', 'SURVEY JSDP PAKET 6  CATATAN': 'SURVEY JSDP PAKET 6  CATATAN', 'Survey pemantauan lingkungaSubmitted On': 'Survey pemantauan lingkungaSubmitted On', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN': 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (APD) - specify': 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (APD) - specify', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Kebersihan) - specify': 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Kebersihan) - specify', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Rambu keselamatan) - specify', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (1)', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (2)', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (3)', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (4)', 'Survey pemantauan lingkungaKondisi Lapangan': 'Survey pemantauan lingkungaKondisi Lapangan', 'Survey pemantauan lingkungaCatatan': 'Survey pemantauan lingkungaCatatan', 'Survey Progres PekerjaanSubmitted On': 'Survey Progres PekerjaanSubmitted On', 'Survey Progres PekerjaanJenis Pekerjaan': 'Survey Progres PekerjaanJenis Pekerjaan', 'Survey Progres PekerjaanStatus Pekerjaan': 'Survey Progres PekerjaanStatus Pekerjaan', 'Survey Progres PekerjaanStatus Pekerjaan (Sudah selesai) - specify': 'Survey Progres PekerjaanStatus Pekerjaan (Sudah selesai) - specify', 'Survey Progres PekerjaanStatus Pekerjaan (Belum ada pekerjaan) - specify': 'Survey Progres PekerjaanStatus Pekerjaan (Belum ada pekerjaan) - specify', 'Survey Progres PekerjaanStatus Pekerjaan (Dalam Pekerjaan) - specify': 'Survey Progres PekerjaanStatus Pekerjaan (Dalam Pekerjaan) - specify', 'Survey Progres PekerjaanFoto pekerjaan': 'Survey Progres PekerjaanFoto pekerjaan', 'Survey Progres PekerjaanCatatan': 'Survey Progres PekerjaanCatatan', });
lyr_BatasWilayahJakartaUtara_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BatasWilayahJakartaBarat_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jaringan_Perpipaan_4.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', });
lyr_Pemantauanlingkunganpaket6_5.set('fieldImages', {'Deployment': 'TextEdit', 'Enumerator': 'TextEdit', 'Status': 'TextEdit', 'Response Code': 'TextEdit', 'Drafted On': 'TextEdit', 'Submitted On': 'TextEdit', 'Draft Name': 'TextEdit', 'Last Modified On': 'TextEdit', 'Last Modified By': 'TextEdit', 'Approval Level': 'TextEdit', 'Rejection message': 'TextEdit', 'Number of Rejections': 'CheckBox', 'Number of Edits': 'CheckBox', 'IP Address': 'TextEdit', 'INSPEKSI LINGKUNGAN': 'TextEdit', 'INSPEKSI LINGKUNGAN (APD) - specify': 'TextEdit', 'INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'TextEdit', 'INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'TextEdit', 'INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'TextEdit', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'TextEdit', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'TextEdit', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'TextEdit', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'TextEdit', 'ID PEKERJAAN': 'TextEdit', 'Kondisi Lapangan': 'TextEdit', 'Lokasi Pekerjaan (latitude)': 'TextEdit', 'Lokasi Pekerjaan (longitude)': 'TextEdit', 'Lokasi Pekerjaan (method)': 'TextEdit', 'Lokasi Pekerjaan (administrative region)': 'TextEdit', 'Lokasi Pekerjaan (accuracy)': 'TextEdit', 'Lokasi Pekerjaan (altitude)': 'TextEdit', 'Catatan': 'TextEdit', });
lyr_TITIK_JSDP_6.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'SURVEY JSDP PAKET 6  Submitted On': 'DateTime', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL': 'TextEdit', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (DC) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (MANHOLE) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN': 'TextEdit', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (DALAM PROSES) - specify': 'TextEdit', 'SURVEY JSDP PAKET 6  FOTO KONDISI PEKERJAAN': 'TextEdit', 'SURVEY JSDP PAKET 6  FOTO KONDISI LAPANGAN': 'TextEdit', 'SURVEY JSDP PAKET 6  CATATAN': 'TextEdit', 'Survey pemantauan lingkungaSubmitted On': 'DateTime', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN': 'TextEdit', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (APD) - specify': 'TextEdit', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Kebersihan) - specify': 'TextEdit', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'TextEdit', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'TextEdit', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'TextEdit', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'TextEdit', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'TextEdit', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'TextEdit', 'Survey pemantauan lingkungaKondisi Lapangan': 'TextEdit', 'Survey pemantauan lingkungaCatatan': 'TextEdit', 'Survey Progres PekerjaanSubmitted On': 'DateTime', 'Survey Progres PekerjaanJenis Pekerjaan': 'TextEdit', 'Survey Progres PekerjaanStatus Pekerjaan': 'TextEdit', 'Survey Progres PekerjaanStatus Pekerjaan (Sudah selesai) - specify': 'TextEdit', 'Survey Progres PekerjaanStatus Pekerjaan (Belum ada pekerjaan) - specify': 'TextEdit', 'Survey Progres PekerjaanStatus Pekerjaan (Dalam Pekerjaan) - specify': 'TextEdit', 'Survey Progres PekerjaanFoto pekerjaan': 'TextEdit', 'Survey Progres PekerjaanCatatan': 'TextEdit', });
lyr_BatasWilayahJakartaUtara_2.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BatasWilayahJakartaBarat_3.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jaringan_Perpipaan_4.set('fieldLabels', {'Name': 'header label - visible with data', 'FolderPath': 'no label', 'PopupInfo': 'no label', });
lyr_Pemantauanlingkunganpaket6_5.set('fieldLabels', {'Deployment': 'no label', 'Enumerator': 'no label', 'Status': 'no label', 'Response Code': 'no label', 'Drafted On': 'no label', 'Submitted On': 'inline label - visible with data', 'Draft Name': 'no label', 'Last Modified On': 'no label', 'Last Modified By': 'no label', 'Approval Level': 'no label', 'Rejection message': 'no label', 'Number of Rejections': 'no label', 'Number of Edits': 'no label', 'IP Address': 'no label', 'INSPEKSI LINGKUNGAN': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (APD) - specify': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'inline label - visible with data', 'ID PEKERJAAN': 'inline label - visible with data', 'Kondisi Lapangan': 'inline label - visible with data', 'Lokasi Pekerjaan (latitude)': 'inline label - visible with data', 'Lokasi Pekerjaan (longitude)': 'inline label - visible with data', 'Lokasi Pekerjaan (method)': 'no label', 'Lokasi Pekerjaan (administrative region)': 'no label', 'Lokasi Pekerjaan (accuracy)': 'no label', 'Lokasi Pekerjaan (altitude)': 'no label', 'Catatan': 'inline label - visible with data', });
lyr_TITIK_JSDP_6.set('fieldLabels', {'Name': 'header label - visible with data', 'FolderPath': 'header label - visible with data', 'PopupInfo': 'header label - visible with data', 'x': 'header label - visible with data', 'y': 'header label - visible with data', 'SURVEY JSDP PAKET 6  Submitted On': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (PIPA TERJACKING) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (DC) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PEKERJAAN DETAIL (MANHOLE) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (SUDAH SELESAI) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6  PROGRES PEKERJAAN (DALAM PROSES) - specify': 'header label - visible with data', 'SURVEY JSDP PAKET 6  FOTO KONDISI PEKERJAAN': 'header label - visible with data', 'SURVEY JSDP PAKET 6  FOTO KONDISI LAPANGAN': 'header label - visible with data', 'SURVEY JSDP PAKET 6  CATATAN': 'header label - visible with data', 'Survey pemantauan lingkungaSubmitted On': 'header label - visible with data', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN': 'header label - visible with data', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (APD) - specify': 'header label - visible with data', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Kebersihan) - specify': 'header label - visible with data', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'header label - visible with data', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'header label - visible with data', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'header label - visible with data', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'header label - visible with data', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'header label - visible with data', 'Survey pemantauan lingkungaINSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'header label - visible with data', 'Survey pemantauan lingkungaKondisi Lapangan': 'header label - visible with data', 'Survey pemantauan lingkungaCatatan': 'header label - visible with data', 'Survey Progres PekerjaanSubmitted On': 'header label - visible with data', 'Survey Progres PekerjaanJenis Pekerjaan': 'header label - visible with data', 'Survey Progres PekerjaanStatus Pekerjaan': 'header label - visible with data', 'Survey Progres PekerjaanStatus Pekerjaan (Sudah selesai) - specify': 'header label - visible with data', 'Survey Progres PekerjaanStatus Pekerjaan (Belum ada pekerjaan) - specify': 'header label - visible with data', 'Survey Progres PekerjaanStatus Pekerjaan (Dalam Pekerjaan) - specify': 'header label - visible with data', 'Survey Progres PekerjaanFoto pekerjaan': 'header label - visible with data', 'Survey Progres PekerjaanCatatan': 'header label - visible with data', });
lyr_TITIK_JSDP_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});