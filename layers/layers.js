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
var format_BatasWilayahJakartaPusat_4 = new ol.format.GeoJSON();
var features_BatasWilayahJakartaPusat_4 = format_BatasWilayahJakartaPusat_4.readFeatures(json_BatasWilayahJakartaPusat_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahJakartaPusat_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahJakartaPusat_4.addFeatures(features_BatasWilayahJakartaPusat_4);
var lyr_BatasWilayahJakartaPusat_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahJakartaPusat_4, 
                style: style_BatasWilayahJakartaPusat_4,
                popuplayertitle: 'Batas Wilayah Jakarta Pusat',
                interactive: true,
                title: '<img src="styles/legend/BatasWilayahJakartaPusat_4.png" /> Batas Wilayah Jakarta Pusat'
            });
var format_jaringanpipapaket5_5 = new ol.format.GeoJSON();
var features_jaringanpipapaket5_5 = format_jaringanpipapaket5_5.readFeatures(json_jaringanpipapaket5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jaringanpipapaket5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jaringanpipapaket5_5.addFeatures(features_jaringanpipapaket5_5);
var lyr_jaringanpipapaket5_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jaringanpipapaket5_5, 
                style: style_jaringanpipapaket5_5,
                popuplayertitle: 'jaringan pipa paket 5',
                interactive: true,
    title: 'jaringan pipa paket 5<br />\
    <img src="styles/legend/jaringanpipapaket5_5_0.png" /> Dia. 1200 mm<br />\
    <img src="styles/legend/jaringanpipapaket5_5_1.png" /> Dia. 1000 mm<br />\
    <img src="styles/legend/jaringanpipapaket5_5_2.png" /> Dia. 800 mm<br />\
    <img src="styles/legend/jaringanpipapaket5_5_3.png" /> Dia. 600 mm<br />\
    <img src="styles/legend/jaringanpipapaket5_5_4.png" /> Dia. 450 mm<br />\
    <img src="styles/legend/jaringanpipapaket5_5_5.png" /> Dia. 400 mm<br />' });
var format_jaringanpipapaket6_6 = new ol.format.GeoJSON();
var features_jaringanpipapaket6_6 = format_jaringanpipapaket6_6.readFeatures(json_jaringanpipapaket6_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jaringanpipapaket6_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jaringanpipapaket6_6.addFeatures(features_jaringanpipapaket6_6);
var lyr_jaringanpipapaket6_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jaringanpipapaket6_6, 
                style: style_jaringanpipapaket6_6,
                popuplayertitle: 'jaringan pipa paket 6',
                interactive: true,
    title: 'jaringan pipa paket 6<br />\
    <img src="styles/legend/jaringanpipapaket6_6_0.png" /> Dia. 1000mm<br />\
    <img src="styles/legend/jaringanpipapaket6_6_1.png" /> Dia. 800mm<br />\
    <img src="styles/legend/jaringanpipapaket6_6_2.png" /> Dia. 600mm<br />\
    <img src="styles/legend/jaringanpipapaket6_6_3.png" /> Dia. 450mm<br />\
    <img src="styles/legend/jaringanpipapaket6_6_4.png" /> Dia. 400mm<br />\
    <img src="styles/legend/jaringanpipapaket6_6_5.png" /> Pipa PK3<br />' });
var format_DCPaket5_7 = new ol.format.GeoJSON();
var features_DCPaket5_7 = format_DCPaket5_7.readFeatures(json_DCPaket5_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DCPaket5_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCPaket5_7.addFeatures(features_DCPaket5_7);
var lyr_DCPaket5_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCPaket5_7, 
                style: style_DCPaket5_7,
                popuplayertitle: 'DC Paket 5',
                interactive: true,
                title: '<img src="styles/legend/DCPaket5_7.png" /> DC Paket 5'
            });
var format_DCPaket6_8 = new ol.format.GeoJSON();
var features_DCPaket6_8 = format_DCPaket6_8.readFeatures(json_DCPaket6_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DCPaket6_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCPaket6_8.addFeatures(features_DCPaket6_8);
var lyr_DCPaket6_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCPaket6_8, 
                style: style_DCPaket6_8,
                popuplayertitle: 'DC Paket 6',
                interactive: true,
                title: '<img src="styles/legend/DCPaket6_8.png" /> DC Paket 6'
            });
var format_ShaftPaket5_9 = new ol.format.GeoJSON();
var features_ShaftPaket5_9 = format_ShaftPaket5_9.readFeatures(json_ShaftPaket5_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShaftPaket5_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShaftPaket5_9.addFeatures(features_ShaftPaket5_9);
var lyr_ShaftPaket5_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShaftPaket5_9, 
                style: style_ShaftPaket5_9,
                popuplayertitle: 'Shaft Paket 5',
                interactive: true,
                title: '<img src="styles/legend/ShaftPaket5_9.png" /> Shaft Paket 5'
            });
var format_ShaftPaket6_10 = new ol.format.GeoJSON();
var features_ShaftPaket6_10 = format_ShaftPaket6_10.readFeatures(json_ShaftPaket6_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShaftPaket6_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShaftPaket6_10.addFeatures(features_ShaftPaket6_10);
var lyr_ShaftPaket6_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShaftPaket6_10, 
                style: style_ShaftPaket6_10,
                popuplayertitle: 'Shaft Paket 6',
                interactive: true,
                title: '<img src="styles/legend/ShaftPaket6_10.png" /> Shaft Paket 6'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_BatasWilayahJakartaUtara_2.setVisible(true);lyr_BatasWilayahJakartaBarat_3.setVisible(true);lyr_BatasWilayahJakartaPusat_4.setVisible(true);lyr_jaringanpipapaket5_5.setVisible(true);lyr_jaringanpipapaket6_6.setVisible(true);lyr_DCPaket5_7.setVisible(true);lyr_DCPaket6_8.setVisible(true);lyr_ShaftPaket5_9.setVisible(true);lyr_ShaftPaket6_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleSatelliteHybrid_1,lyr_BatasWilayahJakartaUtara_2,lyr_BatasWilayahJakartaBarat_3,lyr_BatasWilayahJakartaPusat_4,lyr_jaringanpipapaket5_5,lyr_jaringanpipapaket6_6,lyr_DCPaket5_7,lyr_DCPaket6_8,lyr_ShaftPaket5_9,lyr_ShaftPaket6_10];
lyr_BatasWilayahJakartaUtara_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BatasWilayahJakartaBarat_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'NAMOBJ_2': 'NAMOBJ_2', });
lyr_BatasWilayahJakartaPusat_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', });
lyr_jaringanpipapaket5_5.set('fieldAliases', {'id': 'id', 'Diameter': 'Diameter', 'Item PEK': 'Item PEK', 'Panjang': 'Panjang', });
lyr_jaringanpipapaket6_6.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'PopupInfo': 'PopupInfo', 'panjang pi': 'panjang pi', });
lyr_DCPaket5_7.set('fieldAliases', {'No.': 'No.', 'Lokasi': 'Lokasi', 'ID Pekerjaan': 'ID Pekerjaan', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Item Pek. Diversion Chamber': 'Item Pek. Diversion Chamber', 'Status Pek. Diversion Chamber': 'Status Pek. Diversion Chamber', 'Keterangan': 'Keterangan', 'Dokumentasi': 'Dokumentasi', 'Pekerjaan Minggu Ke-': 'Pekerjaan Minggu Ke-', });
lyr_DCPaket6_8.set('fieldAliases', {'Lokasi': 'Lokasi', 'ID Pekerjaan': 'ID Pekerjaan', 'Longtitude': 'Longtitude', 'Latitude': 'Latitude', 'Pekerjaan Minggu Ke-': 'Pekerjaan Minggu Ke-', 'Pekerjaan Diversion Chamber': 'Pekerjaan Diversion Chamber', 'Status Pekerjaan Diversion Chamber': 'Status Pekerjaan Diversion Chamber', 'Deskripsi Pekerjaan': 'Deskripsi Pekerjaan', 'Dokumentasi': 'Dokumentasi', });
lyr_ShaftPaket5_9.set('fieldAliases', {'No.': 'No.', 'Lokasi': 'Lokasi', 'ID Manhole (Upstream)': 'ID Manhole (Upstream)', 'ID Manhole (Downstream)': 'ID Manhole (Downstream)', 'Item Pek. Pipa Jacking': 'Item Pek. Pipa Jacking', 'Panjang Jacking (m)': 'Panjang Jacking (m)', 'Status Pek. Pipa Jacking': 'Status Pek. Pipa Jacking', 'Item Pek. Konstruksi Shaft Vertikal': 'Item Pek. Konstruksi Shaft Vertikal', 'Status Pek. Konstruksi Shaft Vertikal': 'Status Pek. Konstruksi Shaft Vertikal', 'Item Pek. Manhole': 'Item Pek. Manhole', 'Status Pek. Manhole': 'Status Pek. Manhole', 'Item Pek. Perkerasan Kembali': 'Item Pek. Perkerasan Kembali', 'Status Pek. Perkerasan Kembali': 'Status Pek. Perkerasan Kembali', 'Keterangan': 'Keterangan', 'Dokumentasi': 'Dokumentasi', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_ShaftPaket6_10.set('fieldAliases', {'ID Pekerjaan': 'ID Pekerjaan', 'Longtitude': 'Longtitude', 'Latitude': 'Latitude', 'Pekerjaan Minggu Ke-': 'Pekerjaan Minggu Ke-', 'Konstruksi Shaft Vertikal': 'Konstruksi Shaft Vertikal', 'Status Pekerjaan Konstruksi Shaft Vertikal': 'Status Pekerjaan Konstruksi Shaft Vertikal', 'Status Pekerjaan Jacking': 'Status Pekerjaan Jacking', 'Panjang Jacking': 'Panjang Jacking', 'Downstream': 'Downstream', 'Pekerjaan Manhole': 'Pekerjaan Manhole', 'Status Pekerjaan Manhole': 'Status Pekerjaan Manhole', 'Perkerasan Kembali': 'Perkerasan Kembali', 'Status Perkerasan Kembali': 'Status Perkerasan Kembali', 'Deskripsi Pekerjaan': 'Deskripsi Pekerjaan', 'Dokumentasi': 'Dokumentasi', });
lyr_BatasWilayahJakartaUtara_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BatasWilayahJakartaBarat_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'NAMOBJ_2': 'TextEdit', });
lyr_BatasWilayahJakartaPusat_4.set('fieldImages', {'NAMOBJ': 'TextEdit', });
lyr_jaringanpipapaket5_5.set('fieldImages', {'id': 'TextEdit', 'Diameter': 'TextEdit', 'Item PEK': 'TextEdit', 'Panjang': 'TextEdit', });
lyr_jaringanpipapaket6_6.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'PopupInfo': 'TextEdit', 'panjang pi': 'TextEdit', });
lyr_DCPaket5_7.set('fieldImages', {'No.': 'Range', 'Lokasi': 'TextEdit', 'ID Pekerjaan': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Item Pek. Diversion Chamber': 'TextEdit', 'Status Pek. Diversion Chamber': 'TextEdit', 'Keterangan': 'TextEdit', 'Dokumentasi': 'TextEdit', 'Pekerjaan Minggu Ke-': 'Range', });
lyr_DCPaket6_8.set('fieldImages', {'Lokasi': 'TextEdit', 'ID Pekerjaan': 'TextEdit', 'Longtitude': 'TextEdit', 'Latitude': 'TextEdit', 'Pekerjaan Minggu Ke-': 'Range', 'Pekerjaan Diversion Chamber': 'TextEdit', 'Status Pekerjaan Diversion Chamber': 'TextEdit', 'Deskripsi Pekerjaan': 'TextEdit', 'Dokumentasi': 'TextEdit', });
lyr_ShaftPaket5_9.set('fieldImages', {'No.': 'Range', 'Lokasi': 'TextEdit', 'ID Manhole (Upstream)': 'TextEdit', 'ID Manhole (Downstream)': 'TextEdit', 'Item Pek. Pipa Jacking': 'TextEdit', 'Panjang Jacking (m)': 'TextEdit', 'Status Pek. Pipa Jacking': 'TextEdit', 'Item Pek. Konstruksi Shaft Vertikal': 'TextEdit', 'Status Pek. Konstruksi Shaft Vertikal': 'TextEdit', 'Item Pek. Manhole': 'TextEdit', 'Status Pek. Manhole': 'TextEdit', 'Item Pek. Perkerasan Kembali': 'TextEdit', 'Status Pek. Perkerasan Kembali': 'TextEdit', 'Keterangan': 'TextEdit', 'Dokumentasi': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_ShaftPaket6_10.set('fieldImages', {'ID Pekerjaan': 'TextEdit', 'Longtitude': 'TextEdit', 'Latitude': 'TextEdit', 'Pekerjaan Minggu Ke-': 'TextEdit', 'Konstruksi Shaft Vertikal': 'TextEdit', 'Status Pekerjaan Konstruksi Shaft Vertikal': 'TextEdit', 'Status Pekerjaan Jacking': 'TextEdit', 'Panjang Jacking': 'TextEdit', 'Downstream': 'TextEdit', 'Pekerjaan Manhole': 'TextEdit', 'Status Pekerjaan Manhole': 'TextEdit', 'Perkerasan Kembali': 'TextEdit', 'Status Perkerasan Kembali': 'TextEdit', 'Deskripsi Pekerjaan': 'TextEdit', 'Dokumentasi': 'TextEdit', });
lyr_BatasWilayahJakartaUtara_2.set('fieldLabels', {'NAMOBJ': 'header label - always visible', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BatasWilayahJakartaBarat_3.set('fieldLabels', {'NAMOBJ': 'header label - always visible', 'REMARK': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'NAMOBJ_2': 'no label', });
lyr_BatasWilayahJakartaPusat_4.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', });
lyr_jaringanpipapaket5_5.set('fieldLabels', {'id': 'hidden field', 'Diameter': 'header label - always visible', 'Item PEK': 'hidden field', 'Panjang': 'hidden field', });
lyr_jaringanpipapaket6_6.set('fieldLabels', {'Name': 'header label - always visible', 'FolderPath': 'hidden field', 'PopupInfo': 'hidden field', 'panjang pi': 'hidden field', });
lyr_DCPaket5_7.set('fieldLabels', {'No.': 'hidden field', 'Lokasi': 'hidden field', 'ID Pekerjaan': 'inline label - always visible', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'Item Pek. Diversion Chamber': 'inline label - always visible', 'Status Pek. Diversion Chamber': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Dokumentasi': 'inline label - always visible', 'Pekerjaan Minggu Ke-': 'inline label - always visible', });
lyr_DCPaket6_8.set('fieldLabels', {'Lokasi': 'hidden field', 'ID Pekerjaan': 'header label - always visible', 'Longtitude': 'hidden field', 'Latitude': 'hidden field', 'Pekerjaan Minggu Ke-': 'header label - always visible', 'Pekerjaan Diversion Chamber': 'header label - always visible', 'Status Pekerjaan Diversion Chamber': 'header label - always visible', 'Deskripsi Pekerjaan': 'header label - always visible', 'Dokumentasi': 'header label - always visible', });
lyr_ShaftPaket5_9.set('fieldLabels', {'No.': 'hidden field', 'Lokasi': 'hidden field', 'ID Manhole (Upstream)': 'header label - always visible', 'ID Manhole (Downstream)': 'hidden field', 'Item Pek. Pipa Jacking': 'header label - always visible', 'Panjang Jacking (m)': 'hidden field', 'Status Pek. Pipa Jacking': 'header label - always visible', 'Item Pek. Konstruksi Shaft Vertikal': 'header label - always visible', 'Status Pek. Konstruksi Shaft Vertikal': 'header label - always visible', 'Item Pek. Manhole': 'header label - always visible', 'Status Pek. Manhole': 'header label - always visible', 'Item Pek. Perkerasan Kembali': 'header label - always visible', 'Status Pek. Perkerasan Kembali': 'header label - always visible', 'Keterangan': 'header label - always visible', 'Dokumentasi': 'header label - always visible', 'Longitude': 'hidden field', 'Latitude': 'hidden field', });
lyr_ShaftPaket6_10.set('fieldLabels', {'ID Pekerjaan': 'header label - always visible', 'Longtitude': 'hidden field', 'Latitude': 'hidden field', 'Pekerjaan Minggu Ke-': 'header label - always visible', 'Konstruksi Shaft Vertikal': 'header label - always visible', 'Status Pekerjaan Konstruksi Shaft Vertikal': 'header label - always visible', 'Status Pekerjaan Jacking': 'header label - always visible', 'Panjang Jacking': 'hidden field', 'Downstream': 'hidden field', 'Pekerjaan Manhole': 'header label - always visible', 'Status Pekerjaan Manhole': 'header label - always visible', 'Perkerasan Kembali': 'header label - always visible', 'Status Perkerasan Kembali': 'header label - always visible', 'Deskripsi Pekerjaan': 'header label - always visible', 'Dokumentasi': 'header label - always visible', });
lyr_ShaftPaket6_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});