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
var format_BatasWilayahJakartaPusat_3 = new ol.format.GeoJSON();
var features_BatasWilayahJakartaPusat_3 = format_BatasWilayahJakartaPusat_3.readFeatures(json_BatasWilayahJakartaPusat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahJakartaPusat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahJakartaPusat_3.addFeatures(features_BatasWilayahJakartaPusat_3);
var lyr_BatasWilayahJakartaPusat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahJakartaPusat_3, 
                style: style_BatasWilayahJakartaPusat_3,
                popuplayertitle: 'Batas Wilayah Jakarta Pusat',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahJakartaPusat_3.png" /> Batas Wilayah Jakarta Pusat'
            });
var format_jaringanpipapaket5_4 = new ol.format.GeoJSON();
var features_jaringanpipapaket5_4 = format_jaringanpipapaket5_4.readFeatures(json_jaringanpipapaket5_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jaringanpipapaket5_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jaringanpipapaket5_4.addFeatures(features_jaringanpipapaket5_4);
var lyr_jaringanpipapaket5_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jaringanpipapaket5_4, 
                style: style_jaringanpipapaket5_4,
                popuplayertitle: 'jaringan pipa paket 5',
                interactive: true,
    title: 'jaringan pipa paket 5<br />\
    <img src="styles/legend/jaringanpipapaket5_4_0.png" /> Dia. 1000 mm<br />\
    <img src="styles/legend/jaringanpipapaket5_4_1.png" /> Dia. 1200 mm<br />\
    <img src="styles/legend/jaringanpipapaket5_4_2.png" /> Dia. 400 mm<br />\
    <img src="styles/legend/jaringanpipapaket5_4_3.png" /> Dia. 450 mm<br />\
    <img src="styles/legend/jaringanpipapaket5_4_4.png" /> Dia. 600 mm<br />\
    <img src="styles/legend/jaringanpipapaket5_4_5.png" /> Dia. 800 mm<br />' });
var format_jaringanpipapaket6_5 = new ol.format.GeoJSON();
var features_jaringanpipapaket6_5 = format_jaringanpipapaket6_5.readFeatures(json_jaringanpipapaket6_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jaringanpipapaket6_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jaringanpipapaket6_5.addFeatures(features_jaringanpipapaket6_5);
var lyr_jaringanpipapaket6_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jaringanpipapaket6_5, 
                style: style_jaringanpipapaket6_5,
                popuplayertitle: 'jaringan pipa paket 6',
                interactive: true,
    title: 'jaringan pipa paket 6<br />\
    <img src="styles/legend/jaringanpipapaket6_5_0.png" /> Dia. 1000mm<br />\
    <img src="styles/legend/jaringanpipapaket6_5_1.png" /> Dia. 400mm<br />\
    <img src="styles/legend/jaringanpipapaket6_5_2.png" /> Dia. 450mm<br />\
    <img src="styles/legend/jaringanpipapaket6_5_3.png" /> Dia. 600mm<br />\
    <img src="styles/legend/jaringanpipapaket6_5_4.png" /> Dia. 800mm<br />\
    <img src="styles/legend/jaringanpipapaket6_5_5.png" /> Pipa PK3<br />' });
var format_DCPaket5_6 = new ol.format.GeoJSON();
var features_DCPaket5_6 = format_DCPaket5_6.readFeatures(json_DCPaket5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DCPaket5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCPaket5_6.addFeatures(features_DCPaket5_6);
var lyr_DCPaket5_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCPaket5_6, 
                style: style_DCPaket5_6,
                popuplayertitle: 'DC Paket 5',
                interactive: true,
                title: '<img src="styles/legend/DCPaket5_6.png" /> DC Paket 5'
            });
var format_DCPaket6_7 = new ol.format.GeoJSON();
var features_DCPaket6_7 = format_DCPaket6_7.readFeatures(json_DCPaket6_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DCPaket6_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCPaket6_7.addFeatures(features_DCPaket6_7);
var lyr_DCPaket6_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCPaket6_7, 
                style: style_DCPaket6_7,
                popuplayertitle: 'DC Paket 6',
                interactive: true,
                title: '<img src="styles/legend/DCPaket6_7.png" /> DC Paket 6'
            });
var format_ShaftPaket5_8 = new ol.format.GeoJSON();
var features_ShaftPaket5_8 = format_ShaftPaket5_8.readFeatures(json_ShaftPaket5_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShaftPaket5_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShaftPaket5_8.addFeatures(features_ShaftPaket5_8);
var lyr_ShaftPaket5_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShaftPaket5_8, 
                style: style_ShaftPaket5_8,
                popuplayertitle: 'Shaft Paket 5',
                interactive: true,
                title: '<img src="styles/legend/ShaftPaket5_8.png" /> Shaft Paket 5'
            });
var format_ShaftPaket6_9 = new ol.format.GeoJSON();
var features_ShaftPaket6_9 = format_ShaftPaket6_9.readFeatures(json_ShaftPaket6_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShaftPaket6_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShaftPaket6_9.addFeatures(features_ShaftPaket6_9);
var lyr_ShaftPaket6_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShaftPaket6_9, 
                style: style_ShaftPaket6_9,
                popuplayertitle: 'Shaft Paket 6',
                interactive: true,
                title: '<img src="styles/legend/ShaftPaket6_9.png" /> Shaft Paket 6'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BatasWilayahJakartaUtara_1.setVisible(true);lyr_BatasWilayahJakartaBarat_2.setVisible(true);lyr_BatasWilayahJakartaPusat_3.setVisible(true);lyr_jaringanpipapaket5_4.setVisible(true);lyr_jaringanpipapaket6_5.setVisible(true);lyr_DCPaket5_6.setVisible(true);lyr_DCPaket6_7.setVisible(true);lyr_ShaftPaket5_8.setVisible(true);lyr_ShaftPaket6_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BatasWilayahJakartaUtara_1,lyr_BatasWilayahJakartaBarat_2,lyr_BatasWilayahJakartaPusat_3,lyr_jaringanpipapaket5_4,lyr_jaringanpipapaket6_5,lyr_DCPaket5_6,lyr_DCPaket6_7,lyr_ShaftPaket5_8,lyr_ShaftPaket6_9];
lyr_BatasWilayahJakartaUtara_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BatasWilayahJakartaBarat_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'NAMOBJ_2': 'NAMOBJ_2', });
lyr_BatasWilayahJakartaPusat_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', });
lyr_jaringanpipapaket5_4.set('fieldAliases', {'id': 'id', 'Diameter': 'Diameter', 'Item PEK': 'Item PEK', 'Panjang': 'Panjang', });
lyr_jaringanpipapaket6_5.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'panjang pi': 'panjang pi', });
lyr_DCPaket5_6.set('fieldAliases', {'No.': 'No.', 'Lokasi': 'Lokasi', 'ID Pekerjaan': 'ID Pekerjaan', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Item Pek. Diversion Chamber': 'Item Pek. Diversion Chamber', 'Status Pek. Diversion Chamber': 'Status Pek. Diversion Chamber', 'Keterangan': 'Keterangan', 'Dokumentasi': 'Dokumentasi', 'Pekerjaan Minggu Ke-': 'Pekerjaan Minggu Ke-', });
lyr_DCPaket6_7.set('fieldAliases', {'Lokasi': 'Lokasi', 'ID Pekerjaan': 'ID Pekerjaan', 'Longtitude': 'Longtitude', 'Latitude': 'Latitude', 'Pekerjaan Minggu Ke-': 'Pekerjaan Minggu Ke-', 'Pekerjaan Diversion Chamber': 'Pekerjaan Diversion Chamber', 'Status Pekerjaan Diversion Chamber': 'Status Pekerjaan Diversion Chamber', 'Deskripsi Pekerjaan': 'Deskripsi Pekerjaan', 'Dokumentasi': 'Dokumentasi', });
lyr_ShaftPaket5_8.set('fieldAliases', {'No.': 'No.', 'Lokasi': 'Lokasi', 'ID Manhole (Upstream)': 'ID Manhole (Upstream)', 'ID Manhole (Downstream)': 'ID Manhole (Downstream)', 'Item Pek. Pipa Jacking': 'Item Pek. Pipa Jacking', 'Panjang Jacking (m)': 'Panjang Jacking (m)', 'Status Pek. Pipa Jacking': 'Status Pek. Pipa Jacking', 'Item Pek. Konstruksi Shaft Vertikal': 'Item Pek. Konstruksi Shaft Vertikal', 'Status Pek. Konstruksi Shaft Vertikal': 'Status Pek. Konstruksi Shaft Vertikal', 'Item Pek. Manhole': 'Item Pek. Manhole', 'Status Pek. Manhole': 'Status Pek. Manhole', 'Item Pek. Perkerasan Kembali': 'Item Pek. Perkerasan Kembali', 'Status Pek. Perkerasan Kembali': 'Status Pek. Perkerasan Kembali', 'Keterangan': 'Keterangan', 'Dokumentasi': 'Dokumentasi', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_ShaftPaket6_9.set('fieldAliases', {'ID Pekerjaan': 'ID Pekerjaan', 'Longtitude': 'Longtitude', 'Latitude': 'Latitude', 'Pekerjaan Minggu Ke-': 'Pekerjaan Minggu Ke-', 'Konstruksi Shaft Vertikal': 'Konstruksi Shaft Vertikal', 'Status Pekerjaan Konstruksi Shaft Vertikal': 'Status Pekerjaan Konstruksi Shaft Vertikal', 'Status Pekerjaan Jacking': 'Status Pekerjaan Jacking', 'Panjang Jacking': 'Panjang Jacking', 'Downstream': 'Downstream', 'Pekerjaan Manhole': 'Pekerjaan Manhole', 'Status Pekerjaan Manhole': 'Status Pekerjaan Manhole', 'Perkerasan Kembali': 'Perkerasan Kembali', 'Status Perkerasan Kembali': 'Status Perkerasan Kembali', 'Deskripsi Pekerjaan': 'Deskripsi Pekerjaan', 'Dokumentasi': 'Dokumentasi', });
lyr_BatasWilayahJakartaUtara_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BatasWilayahJakartaBarat_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'NAMOBJ_2': 'TextEdit', });
lyr_BatasWilayahJakartaPusat_3.set('fieldImages', {'NAMOBJ': 'TextEdit', });
lyr_jaringanpipapaket5_4.set('fieldImages', {'id': 'TextEdit', 'Diameter': 'TextEdit', 'Item PEK': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_jaringanpipapaket6_5.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'panjang pi': 'TextEdit', });
lyr_DCPaket5_6.set('fieldImages', {'No.': 'Range', 'Lokasi': 'TextEdit', 'ID Pekerjaan': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Item Pek. Diversion Chamber': 'TextEdit', 'Status Pek. Diversion Chamber': 'TextEdit', 'Keterangan': 'TextEdit', 'Dokumentasi': 'TextEdit', 'Pekerjaan Minggu Ke-': 'Range', });
lyr_DCPaket6_7.set('fieldImages', {'Lokasi': 'TextEdit', 'ID Pekerjaan': 'TextEdit', 'Longtitude': 'TextEdit', 'Latitude': 'TextEdit', 'Pekerjaan Minggu Ke-': 'Range', 'Pekerjaan Diversion Chamber': 'TextEdit', 'Status Pekerjaan Diversion Chamber': 'TextEdit', 'Deskripsi Pekerjaan': 'TextEdit', 'Dokumentasi': 'TextEdit', });
lyr_ShaftPaket5_8.set('fieldImages', {'No.': 'Range', 'Lokasi': 'TextEdit', 'ID Manhole (Upstream)': 'TextEdit', 'ID Manhole (Downstream)': 'TextEdit', 'Item Pek. Pipa Jacking': 'TextEdit', 'Panjang Jacking (m)': 'TextEdit', 'Status Pek. Pipa Jacking': 'TextEdit', 'Item Pek. Konstruksi Shaft Vertikal': 'TextEdit', 'Status Pek. Konstruksi Shaft Vertikal': 'TextEdit', 'Item Pek. Manhole': 'TextEdit', 'Status Pek. Manhole': 'TextEdit', 'Item Pek. Perkerasan Kembali': 'TextEdit', 'Status Pek. Perkerasan Kembali': 'TextEdit', 'Keterangan': 'TextEdit', 'Dokumentasi': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_ShaftPaket6_9.set('fieldImages', {'ID Pekerjaan': 'TextEdit', 'Longtitude': 'TextEdit', 'Latitude': 'TextEdit', 'Pekerjaan Minggu Ke-': 'TextEdit', 'Konstruksi Shaft Vertikal': 'TextEdit', 'Status Pekerjaan Konstruksi Shaft Vertikal': 'TextEdit', 'Status Pekerjaan Jacking': 'TextEdit', 'Panjang Jacking': 'TextEdit', 'Downstream': 'TextEdit', 'Pekerjaan Manhole': 'TextEdit', 'Status Pekerjaan Manhole': 'TextEdit', 'Perkerasan Kembali': 'TextEdit', 'Status Perkerasan Kembali': 'TextEdit', 'Deskripsi Pekerjaan': 'TextEdit', 'Dokumentasi': 'TextEdit', });
lyr_BatasWilayahJakartaUtara_1.set('fieldLabels', {'NAMOBJ': 'header label - visible with data', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BatasWilayahJakartaBarat_2.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'NAMOBJ_2': 'no label', });
lyr_BatasWilayahJakartaPusat_3.set('fieldLabels', {'NAMOBJ': 'no label', });
lyr_jaringanpipapaket5_4.set('fieldLabels', {'id': 'no label', 'Diameter': 'header label - always visible', 'Item PEK': 'header label - always visible', 'Panjang': 'header label - always visible', });
lyr_jaringanpipapaket6_5.set('fieldLabels', {'Name': 'header label - always visible', 'FolderPath': 'no label', 'PopupInfo': 'no label', 'panjang pi': 'header label - always visible', });
lyr_DCPaket5_6.set('fieldLabels', {'No.': 'no label', 'Lokasi': 'no label', 'ID Pekerjaan': 'inline label - always visible', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Item Pek. Diversion Chamber': 'inline label - always visible', 'Status Pek. Diversion Chamber': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Dokumentasi': 'inline label - always visible', 'Pekerjaan Minggu Ke-': 'inline label - always visible', });
lyr_DCPaket6_7.set('fieldLabels', {'Lokasi': 'no label', 'ID Pekerjaan': 'header label - always visible', 'Longtitude': 'header label - always visible', 'Latitude': 'header label - always visible', 'Pekerjaan Minggu Ke-': 'header label - always visible', 'Pekerjaan Diversion Chamber': 'header label - always visible', 'Status Pekerjaan Diversion Chamber': 'header label - always visible', 'Deskripsi Pekerjaan': 'header label - always visible', 'Dokumentasi': 'header label - always visible', });
lyr_ShaftPaket5_8.set('fieldLabels', {'No.': 'no label', 'Lokasi': 'no label', 'ID Manhole (Upstream)': 'header label - always visible', 'ID Manhole (Downstream)': 'header label - always visible', 'Item Pek. Pipa Jacking': 'header label - always visible', 'Panjang Jacking (m)': 'header label - always visible', 'Status Pek. Pipa Jacking': 'header label - always visible', 'Item Pek. Konstruksi Shaft Vertikal': 'header label - always visible', 'Status Pek. Konstruksi Shaft Vertikal': 'header label - always visible', 'Item Pek. Manhole': 'header label - always visible', 'Status Pek. Manhole': 'header label - always visible', 'Item Pek. Perkerasan Kembali': 'header label - always visible', 'Status Pek. Perkerasan Kembali': 'header label - always visible', 'Keterangan': 'header label - always visible', 'Dokumentasi': 'header label - always visible', 'Longitude': 'header label - always visible', 'Latitude': 'header label - always visible', });
lyr_ShaftPaket6_9.set('fieldLabels', {'ID Pekerjaan': 'header label - always visible', 'Longtitude': 'header label - always visible', 'Latitude': 'header label - always visible', 'Pekerjaan Minggu Ke-': 'header label - always visible', 'Konstruksi Shaft Vertikal': 'header label - always visible', 'Status Pekerjaan Konstruksi Shaft Vertikal': 'header label - always visible', 'Status Pekerjaan Jacking': 'header label - always visible', 'Panjang Jacking': 'header label - always visible', 'Downstream': 'header label - always visible', 'Pekerjaan Manhole': 'header label - always visible', 'Status Pekerjaan Manhole': 'header label - always visible', 'Perkerasan Kembali': 'header label - always visible', 'Status Perkerasan Kembali': 'header label - always visible', 'Deskripsi Pekerjaan': 'header label - always visible', 'Dokumentasi': 'header label - always visible', });
lyr_ShaftPaket6_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});