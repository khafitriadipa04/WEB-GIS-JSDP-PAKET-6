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
var format_jakarta_utara_2 = new ol.format.GeoJSON();
var features_jakarta_utara_2 = format_jakarta_utara_2.readFeatures(json_jakarta_utara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jakarta_utara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jakarta_utara_2.addFeatures(features_jakarta_utara_2);
var lyr_jakarta_utara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jakarta_utara_2, 
                style: style_jakarta_utara_2,
                popuplayertitle: 'jakarta_utara',
                interactive: true,
                title: '<img src="styles/legend/jakarta_utara_2.png" /> jakarta_utara'
            });
var format_jakarta_barat_3 = new ol.format.GeoJSON();
var features_jakarta_barat_3 = format_jakarta_barat_3.readFeatures(json_jakarta_barat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jakarta_barat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jakarta_barat_3.addFeatures(features_jakarta_barat_3);
var lyr_jakarta_barat_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jakarta_barat_3, 
                style: style_jakarta_barat_3,
                popuplayertitle: 'jakarta_barat',
                interactive: true,
                title: '<img src="styles/legend/jakarta_barat_3.png" /> jakarta_barat'
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
    <img src="styles/legend/Jaringan_Perpipaan_4_1.png" /> Dia. 400mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_4_2.png" /> Dia. 450mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_4_3.png" /> Dia. 600mm<br />\
    <img src="styles/legend/Jaringan_Perpipaan_4_4.png" /> Dia. 800mm<br />\
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
                title: '<img src="styles/legend/TITIK_JSDP_5.png" /> TITIK_JSDP'
            });
var format_Pemantauanlingkunganpaket6_6 = new ol.format.GeoJSON();
var features_Pemantauanlingkunganpaket6_6 = format_Pemantauanlingkunganpaket6_6.readFeatures(json_Pemantauanlingkunganpaket6_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemantauanlingkunganpaket6_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemantauanlingkunganpaket6_6.addFeatures(features_Pemantauanlingkunganpaket6_6);
var lyr_Pemantauanlingkunganpaket6_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemantauanlingkunganpaket6_6, 
                style: style_Pemantauanlingkunganpaket6_6,
                popuplayertitle: 'Pemantauan lingkungan paket 6',
                interactive: true,
                title: '<img src="styles/legend/Pemantauanlingkunganpaket6_6.png" /> Pemantauan lingkungan paket 6'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_jakarta_utara_2.setVisible(true);lyr_jakarta_barat_3.setVisible(true);lyr_Jaringan_Perpipaan_4.setVisible(true);lyr_TITIK_JSDP_5.setVisible(true);lyr_Pemantauanlingkunganpaket6_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleSatelliteHybrid_1,lyr_jakarta_utara_2,lyr_jakarta_barat_3,lyr_Jaringan_Perpipaan_4,lyr_TITIK_JSDP_5,lyr_Pemantauanlingkunganpaket6_6];
lyr_jakarta_utara_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jakarta_barat_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Jaringan_Perpipaan_4.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_TITIK_JSDP_5.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'x': 'x', 'y': 'y', });
lyr_Pemantauanlingkunganpaket6_6.set('fieldAliases', {'Deployment': 'Deployment', 'Enumerator': 'Enumerator', 'Status': 'Status', 'Response Code': 'Response Code', 'Drafted On': 'Drafted On', 'Submitted On': 'Submitted On', 'Draft Name': 'Draft Name', 'Last Modified On': 'Last Modified On', 'Last Modified By': 'Last Modified By', 'Approval Level': 'Approval Level', 'Rejection message': 'Rejection message', 'Number of Rejections': 'Number of Rejections', 'Number of Edits': 'Number of Edits', 'IP Address': 'IP Address', 'INSPEKSI LINGKUNGAN': 'INSPEKSI LINGKUNGAN', 'INSPEKSI LINGKUNGAN (APD) - specify': 'INSPEKSI LINGKUNGAN (APD) - specify', 'INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'INSPEKSI LINGKUNGAN (Kebersihan) - specify', 'INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify', 'INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'INSPEKSI LINGKUNGAN (Lainnya) - specify (1)', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'INSPEKSI LINGKUNGAN (Lainnya) - specify (2)', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'INSPEKSI LINGKUNGAN (Lainnya) - specify (3)', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'INSPEKSI LINGKUNGAN (Lainnya) - specify (4)', 'ID PEKERJAAN': 'ID PEKERJAAN', 'Kondisi Lapangan': 'Kondisi Lapangan', 'Lokasi Pekerjaan (latitude)': 'Lokasi Pekerjaan (latitude)', 'Lokasi Pekerjaan (longitude)': 'Lokasi Pekerjaan (longitude)', 'Lokasi Pekerjaan (method)': 'Lokasi Pekerjaan (method)', 'Lokasi Pekerjaan (administrative region)': 'Lokasi Pekerjaan (administrative region)', 'Lokasi Pekerjaan (accuracy)': 'Lokasi Pekerjaan (accuracy)', 'Lokasi Pekerjaan (altitude)': 'Lokasi Pekerjaan (altitude)', 'Catatan': 'Catatan', });
lyr_jakarta_utara_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_jakarta_barat_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Jaringan_Perpipaan_4.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_TITIK_JSDP_5.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Pemantauanlingkunganpaket6_6.set('fieldImages', {'Deployment': 'TextEdit', 'Enumerator': 'TextEdit', 'Status': 'TextEdit', 'Response Code': 'TextEdit', 'Drafted On': 'TextEdit', 'Submitted On': 'TextEdit', 'Draft Name': 'TextEdit', 'Last Modified On': 'TextEdit', 'Last Modified By': 'TextEdit', 'Approval Level': 'TextEdit', 'Rejection message': 'TextEdit', 'Number of Rejections': 'CheckBox', 'Number of Edits': 'CheckBox', 'IP Address': 'TextEdit', 'INSPEKSI LINGKUNGAN': 'TextEdit', 'INSPEKSI LINGKUNGAN (APD) - specify': 'TextEdit', 'INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'TextEdit', 'INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'TextEdit', 'INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'TextEdit', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'TextEdit', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'TextEdit', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'TextEdit', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'TextEdit', 'ID PEKERJAAN': 'TextEdit', 'Kondisi Lapangan': 'TextEdit', 'Lokasi Pekerjaan (latitude)': 'TextEdit', 'Lokasi Pekerjaan (longitude)': 'TextEdit', 'Lokasi Pekerjaan (method)': 'TextEdit', 'Lokasi Pekerjaan (administrative region)': 'TextEdit', 'Lokasi Pekerjaan (accuracy)': 'TextEdit', 'Lokasi Pekerjaan (altitude)': 'TextEdit', 'Catatan': 'TextEdit', });
lyr_jakarta_utara_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jakarta_barat_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Jaringan_Perpipaan_4.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - visible with data', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_TITIK_JSDP_5.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - visible with data', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Pemantauanlingkunganpaket6_6.set('fieldLabels', {'Deployment': 'no label', 'Enumerator': 'no label', 'Status': 'no label', 'Response Code': 'no label', 'Drafted On': 'no label', 'Submitted On': 'inline label - visible with data', 'Draft Name': 'no label', 'Last Modified On': 'no label', 'Last Modified By': 'no label', 'Approval Level': 'no label', 'Rejection message': 'no label', 'Number of Rejections': 'no label', 'Number of Edits': 'no label', 'IP Address': 'no label', 'INSPEKSI LINGKUNGAN': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (APD) - specify': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'inline label - visible with data', 'ID PEKERJAAN': 'inline label - visible with data', 'Kondisi Lapangan': 'inline label - visible with data', 'Lokasi Pekerjaan (latitude)': 'inline label - visible with data', 'Lokasi Pekerjaan (longitude)': 'inline label - visible with data', 'Lokasi Pekerjaan (method)': 'no label', 'Lokasi Pekerjaan (administrative region)': 'no label', 'Lokasi Pekerjaan (accuracy)': 'no label', 'Lokasi Pekerjaan (altitude)': 'no label', 'Catatan': 'inline label - visible with data', });
lyr_Pemantauanlingkunganpaket6_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});