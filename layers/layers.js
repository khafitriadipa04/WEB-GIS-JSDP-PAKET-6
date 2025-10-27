var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_jakarta_utara_1 = new ol.format.GeoJSON();
var features_jakarta_utara_1 = format_jakarta_utara_1.readFeatures(json_jakarta_utara_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jakarta_utara_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jakarta_utara_1.addFeatures(features_jakarta_utara_1);
var lyr_jakarta_utara_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jakarta_utara_1, 
                style: style_jakarta_utara_1,
                popuplayertitle: 'jakarta_utara',
                interactive: true,
                title: '<img src="styles/legend/jakarta_utara_1.png" /> jakarta_utara'
            });
var format_jakarta_barat_2 = new ol.format.GeoJSON();
var features_jakarta_barat_2 = format_jakarta_barat_2.readFeatures(json_jakarta_barat_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jakarta_barat_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jakarta_barat_2.addFeatures(features_jakarta_barat_2);
var lyr_jakarta_barat_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jakarta_barat_2, 
                style: style_jakarta_barat_2,
                popuplayertitle: 'jakarta_barat',
                interactive: true,
                title: '<img src="styles/legend/jakarta_barat_2.png" /> jakarta_barat'
            });
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
                title: '<img src="styles/legend/TITIK_JSDP_3.png" /> TITIK_JSDP'
            });
var format_Pemantauanlingkunganpaket6_4 = new ol.format.GeoJSON();
var features_Pemantauanlingkunganpaket6_4 = format_Pemantauanlingkunganpaket6_4.readFeatures(json_Pemantauanlingkunganpaket6_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemantauanlingkunganpaket6_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemantauanlingkunganpaket6_4.addFeatures(features_Pemantauanlingkunganpaket6_4);
var lyr_Pemantauanlingkunganpaket6_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemantauanlingkunganpaket6_4, 
                style: style_Pemantauanlingkunganpaket6_4,
                popuplayertitle: 'Pemantauan lingkungan paket 6',
                interactive: true,
                title: '<img src="styles/legend/Pemantauanlingkunganpaket6_4.png" /> Pemantauan lingkungan paket 6'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_jakarta_utara_1.setVisible(true);lyr_jakarta_barat_2.setVisible(true);lyr_TITIK_JSDP_3.setVisible(true);lyr_Pemantauanlingkunganpaket6_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_jakarta_utara_1,lyr_jakarta_barat_2,lyr_TITIK_JSDP_3,lyr_Pemantauanlingkunganpaket6_4];
lyr_jakarta_utara_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jakarta_barat_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TITIK_JSDP_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'x': 'x', 'y': 'y', });
lyr_Pemantauanlingkunganpaket6_4.set('fieldAliases', {'Deployment': 'Deployment', 'Enumerator': 'Enumerator', 'Status': 'Status', 'Response Code': 'Response Code', 'Drafted On': 'Drafted On', 'Submitted On': 'Submitted On', 'Draft Name': 'Draft Name', 'Last Modified On': 'Last Modified On', 'Last Modified By': 'Last Modified By', 'Approval Level': 'Approval Level', 'Rejection message': 'Rejection message', 'Number of Rejections': 'Number of Rejections', 'Number of Edits': 'Number of Edits', 'IP Address': 'IP Address', 'INSPEKSI LINGKUNGAN': 'INSPEKSI LINGKUNGAN', 'INSPEKSI LINGKUNGAN (APD) - specify': 'INSPEKSI LINGKUNGAN (APD) - specify', 'INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'INSPEKSI LINGKUNGAN (Kebersihan) - specify', 'INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify', 'INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'INSPEKSI LINGKUNGAN (Lainnya) - specify (1)', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'INSPEKSI LINGKUNGAN (Lainnya) - specify (2)', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'INSPEKSI LINGKUNGAN (Lainnya) - specify (3)', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'INSPEKSI LINGKUNGAN (Lainnya) - specify (4)', 'ID PEKERJAAN': 'ID PEKERJAAN', 'Kondisi Lapangan': 'Kondisi Lapangan', 'Lokasi Pekerjaan (latitude)': 'Lokasi Pekerjaan (latitude)', 'Lokasi Pekerjaan (longitude)': 'Lokasi Pekerjaan (longitude)', 'Lokasi Pekerjaan (method)': 'Lokasi Pekerjaan (method)', 'Lokasi Pekerjaan (administrative region)': 'Lokasi Pekerjaan (administrative region)', 'Lokasi Pekerjaan (accuracy)': 'Lokasi Pekerjaan (accuracy)', 'Lokasi Pekerjaan (altitude)': 'Lokasi Pekerjaan (altitude)', 'Catatan': 'Catatan', });
lyr_jakarta_utara_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_jakarta_barat_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TITIK_JSDP_3.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Pemantauanlingkunganpaket6_4.set('fieldImages', {'Deployment': '', 'Enumerator': '', 'Status': '', 'Response Code': '', 'Drafted On': '', 'Submitted On': '', 'Draft Name': '', 'Last Modified On': '', 'Last Modified By': '', 'Approval Level': '', 'Rejection message': '', 'Number of Rejections': '', 'Number of Edits': '', 'IP Address': '', 'INSPEKSI LINGKUNGAN': '', 'INSPEKSI LINGKUNGAN (APD) - specify': '', 'INSPEKSI LINGKUNGAN (Kebersihan) - specify': '', 'INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': '', 'INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': '', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': '', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': '', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': '', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': '', 'ID PEKERJAAN': '', 'Kondisi Lapangan': '', 'Lokasi Pekerjaan (latitude)': '', 'Lokasi Pekerjaan (longitude)': '', 'Lokasi Pekerjaan (method)': '', 'Lokasi Pekerjaan (administrative region)': '', 'Lokasi Pekerjaan (accuracy)': '', 'Lokasi Pekerjaan (altitude)': '', 'Catatan': '', });
lyr_jakarta_utara_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jakarta_barat_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TITIK_JSDP_3.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - visible with data', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', 'x': 'no label', 'y': 'no label', });
lyr_Pemantauanlingkunganpaket6_4.set('fieldLabels', {'Deployment': 'no label', 'Enumerator': 'no label', 'Status': 'no label', 'Response Code': 'no label', 'Drafted On': 'no label', 'Submitted On': 'inline label - visible with data', 'Draft Name': 'no label', 'Last Modified On': 'no label', 'Last Modified By': 'no label', 'Approval Level': 'no label', 'Rejection message': 'no label', 'Number of Rejections': 'no label', 'Number of Edits': 'no label', 'IP Address': 'no label', 'INSPEKSI LINGKUNGAN': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (APD) - specify': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Kebersihan) - specify': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Rambu keselamatan) - specify': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Tempat Buangan Limbah) - specify': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (1)': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (2)': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (3)': 'inline label - visible with data', 'INSPEKSI LINGKUNGAN (Lainnya) - specify (4)': 'inline label - visible with data', 'ID PEKERJAAN': 'inline label - visible with data', 'Kondisi Lapangan': 'inline label - visible with data', 'Lokasi Pekerjaan (latitude)': 'inline label - visible with data', 'Lokasi Pekerjaan (longitude)': 'inline label - visible with data', 'Lokasi Pekerjaan (method)': 'no label', 'Lokasi Pekerjaan (administrative region)': 'no label', 'Lokasi Pekerjaan (accuracy)': 'no label', 'Lokasi Pekerjaan (altitude)': 'no label', 'Catatan': 'inline label - visible with data', });
lyr_Pemantauanlingkunganpaket6_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});