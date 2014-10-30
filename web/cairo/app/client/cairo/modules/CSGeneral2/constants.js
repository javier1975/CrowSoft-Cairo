(function() {
  "use strict";

  Cairo.General = {

    Constants: {
      PRO_NAME:     "pro_name",
      PRO_CODE:     "pro_code",
      PRO_DESCRIP:  "pro_descrip",
      PRO_ID:       "pro_id",

      PA_ID:        "pa_id",
      PA_NAME:      "pa_nombre"
    }

  };

  Cairo.Security.Actions.General = {

    NEW_DEPOSITOLOGICO: 1016,
    EDIT_DEPOSITOLOGICO: 1017,
    DELETE_DEPOSITOLOGICO: 1018,
    LIST_DEPOSITOLOGICO: 1019,

    NEW_UNIDAD: 1020,
    EDIT_UNIDAD: 1021,
    DELETE_UNIDAD: 1022,
    LIST_UNIDAD: 1023,

    NEW_SUCURSALCLIENTE: 1024,
    EDIT_SUCURSALCLIENTE: 1025,
    DELETE_SUCURSALCLIENTE: 1026,
    LIST_SUCURSALCLIENTE: 1027,

    NEW_BANCO: 1032,
    EDIT_BANCO: 1033,
    DELETE_BANCO: 1034,
    LIST_BANCO: 1035,

    NEW_VENDEDORES: 1036,
    EDIT_VENDEDORES: 1037,
    DELETE_VENDEDORES: 1038,
    LIST_VENDEDORES: 1039,

    NEW_TARJETACREDITO: 1040,
    EDIT_TARJETACREDITO: 1041,
    DELETE_TARJETACREDITO: 1042,
    LIST_TARJETACREDITO: 1043,

    NEW_CUENTA: 1044,
    EDIT_CUENTA: 1045,
    DELETE_CUENTA: 1046,
    LIST_CUENTA: 1047,

    NEW_LEYENDA: 1048,
    EDIT_LEYENDA: 1049,
    DELETE_LEYENDA: 1050,
    LIST_LEYENDA: 1051,

    NEW_CENTROCOSTO: 1052,
    EDIT_CENTROCOSTO: 1053,
    DELETE_CENTROCOSTO: 1054,
    LIST_CENTROCOSTO: 1055,

    NEW_COBRADOR: 1056,
    EDIT_COBRADOR: 1057,
    DELETE_COBRADOR: 1058,
    LIST_COBRADOR: 1059,

    NEW_REGLALIQUIDACION: 1060,
    EDIT_REGLALIQUIDACION: 1061,
    DELETE_REGLALIQUIDACION: 1062,
    LIST_REGLALIQUIDACION: 1063,

    NEW_CLEARING: 1064,
    EDIT_CLEARING: 1065,
    DELETE_CLEARING: 1066,
    LIST_CLEARING: 1067,

    NEW_CLIENTE: 1068,
    EDIT_CLIENTE: 1069,
    DELETE_CLIENTE: 1070,
    LIST_CLIENTE: 1071,

    NEW_PROVEEDOR: 1072,
    EDIT_PROVEEDOR: 1073,
    DELETE_PROVEEDOR: 1074,
    LIST_PROVEEDOR: 1075,

    NEW_PRODUCTO: 1076,
    EDIT_PRODUCTO: 1077,
    DELETE_PRODUCTO: 1078,
    LIST_PRODUCTO: 1079,

    NEW_RUBRO: 1080,
    EDIT_RUBRO: 1081,
    DELETE_RUBRO: 1082,
    LIST_RUBRO: 1083,

    NEW_ESCALA: 1084,
    EDIT_ESCALA: 1085,
    DELETE_ESCALA: 1086,
    LIST_ESCALA: 1087,

    NEW_TRANSPORTE: 1088,
    EDIT_TRANSPORTE: 1089,
    DELETE_TRANSPORTE: 1090,
    LIST_TRANSPORTE: 1091,

    NEW_PAIS: 1104,
    EDIT_PAIS: 1105,
    DELETE_PAIS: 1106,
    LIST_PAIS: 1107,

    NEW_CIUDAD: 1108,
    EDIT_CIUDAD: 1109,
    DELETE_CIUDAD: 1110,
    LIST_CIUDAD: 1111,

    NEW_PROVINCIA: 1112,
    EDIT_PROVINCIA: 1113,
    DELETE_PROVINCIA: 1114,
    LIST_PROVINCIA: 1115,

    NEW_ZONA: 1116,
    EDIT_ZONA: 1117,
    DELETE_ZONA: 1118,
    LIST_ZONA: 1119,

    NEW_TASAIMPOSITIVA: 1120,
    EDIT_TASAIMPOSITIVA: 1121,
    DELETE_TASAIMPOSITIVA: 1122,
    LIST_TASAIMPOSITIVA: 1123,

    NEW_DEPOSITOFISICO: 1124,
    EDIT_DEPOSITOFISICO: 1125,
    DELETE_DEPOSITOFISICO: 1126,
    LIST_DEPOSITOFISICO: 1127,

    NEW_CALIDAD: 1132,
    EDIT_CALIDAD: 1133,
    DELETE_CALIDAD: 1134,
    LIST_CALIDAD: 1135,

    NEW_MARCA: 1136,
    EDIT_MARCA: 1137,
    DELETE_MARCA: 1138,
    LIST_MARCA: 1139,

    NEW_CAMION: 1140,
    EDIT_CAMION: 1141,
    DELETE_CAMION: 1142,
    LIST_CAMION: 1143,

    NEW_CHOFER: 1144,
    EDIT_CHOFER: 1145,
    DELETE_CHOFER: 1146,
    LIST_CHOFER: 1147,

    NEW_CONDICIONPAGO: 1148,
    EDIT_CONDICIONPAGO: 1149,
    DELETE_CONDICIONPAGO: 1150,
    LIST_CONDICIONPAGO: 1151,

    NEW_SUCURSAL: 1157,
    EDIT_SUCURSAL: 1158,
    DELETE_SUCURSAL: 1159,
    LIST_SUCURSAL: 1160,

    NEW_RUBROTABLA: 1161,
    EDIT_RUBROTABLA: 1162,
    DELETE_RUBROTABLA: 1163,
    LIST_RUBROTABLA: 1164,

    NEW_GASTO: 1165,
    EDIT_GASTO: 1166,
    DELETE_GASTO: 1167,
    LIST_GASTO: 1168,

    NEW_CUENTAGRUPO: 1169,
    EDIT_CUENTAGRUPO: 1170,
    DELETE_CUENTAGRUPO: 1171,
    LIST_CUENTAGRUPO: 1172,

    NEW_PERCEPCION: 1176,
    DELETE_PERCEPCION: 1178,
    EDIT_PERCEPCION: 1179,
    LIST_PERCEPCION: 1180,

    NEW_PERCEPCIONTIPO: 1181,
    DELETE_PERCEPCIONTIPO: 1182,
    EDIT_PERCEPCIONTIPO: 1183,
    LIST_PERCEPCIONTIPO: 1184,

    NEW_RETENCION: 1185,
    DELETE_RETENCION: 1186,
    EDIT_RETENCION: 1187,
    LIST_RETENCION: 1188,

    NEW_RETENCIONTIPO: 1189,
    DELETE_RETENCIONTIPO: 1190,
    EDIT_RETENCIONTIPO: 1191,
    LIST_RETENCIONTIPO: 1192,

    NEW_DEPARTAMENTO: 1193,
    DELETE_DEPARTAMENTO: 1194,
    EDIT_DEPARTAMENTO: 1195,
    LIST_DEPARTAMENTO: 1196,

    NEW_CIRCUITOCONTABLE: 1197,
    EDIT_CIRCUITOCONTABLE: 1198,
    DELETE_CIRCUITOCONTABLE: 1199,
    LIST_CIRCUITOCONTABLE: 1200,

    NEW_EMPRESA: 1201,
    EDIT_EMPRESA: 1202,
    DELETE_EMPRESA: 1203,
    LIST_EMPRESA: 1204,

    NEW_PERSONA: 1205,
    EDIT_PERSONA: 1206,
    DELETE_PERSONA: 1207,
    LIST_PERSONA: 1208,

    NEW_WEBARTICULO: 1209,
    EDIT_WEBARTICULO: 1210,
    DELETE_WEBARTICULO: 1211,
    LIST_WEBARTICULO: 1212,

    NEW_IDIOMA: 1213,
    EDIT_IDIOMA: 1214,
    DELETE_IDIOMA: 1215,
    LIST_IDIOMA: 1216,

    NEW_TIPOOPERACION: 1218,
    EDIT_TIPOOPERACION: 1219,
    DELETE_TIPOOPERACION: 1220,
    LIST_TIPOOPERACION: 1221,

    NEW_EMBALAJE: 1222,
    EDIT_EMBALAJE: 1223,
    DELETE_EMBALAJE: 1224,
    LIST_EMBALAJE: 1225,

    NEW_PRODUCTOFKIT: 1226,
    EDIT_PRODUCTOFKIT: 1227,
    DELETE_PRODUCTOFKIT: 1228,
    LIST_PRODUCTOFKIT: 1229,

    LIST_INDICECORP: 1230,

    NEW_FERIADO: 1235,
    EDIT_FERIADO: 1236,
    DELETE_FERIADO: 1237,
    LIST_FERIADO: 1238,

    NEW_CAJA: 1239,
    EDIT_CAJA: 1240,
    DELETE_CAJA: 1241,
    LIST_CAJA: 1242,

    NEW_LISTAPRECIOMARCADO: 1243,
    EDIT_LISTAPRECIOMARCADO: 1244,
    DELETE_LISTAPRECIOMARCADO: 1245,
    LIST_LISTAPRECIOMARCADO: 1246,

    NEW_CATALOGOWEB: 1247,
    EDIT_CATALOGOWEB: 1248,
    DELETE_CATALOGOWEB: 1249,
    LIST_CATALOGOWEB: 1250,

    NEW_AJUSTEINFLACION: 1251,
    EDIT_AJUSTEINFLACION: 1252,
    DELETE_AJUSTEINFLACION: 1253,
    LIST_AJUSTEINFLACION: 1254,

    EDIT_AJUSTEINFLACIONINDICE: 1255,

    NEW_PRODUCTOHELPCONFIG: 1256,
    EDIT_PRODUCTOHELPCONFIG: 1257,
    DELETE_PRODUCTOHELPCONFIG: 1258,
    LIST_PRODUCTOHELPCONFIG: 1259,

    NEW_CALLE: 1260,
    EDIT_CALLE: 1261,
    DELETE_CALLE: 1262,
    LIST_CALLE: 1263,

    NEW_CATALOGOWEBCATEGORIA: 1264,
    EDIT_CATALOGOWEBCATEGORIA: 1265,
    DELETE_CATALOGOWEBCATEGORIA: 1266,
    LIST_CATALOGOWEBCATEGORIA: 1267,

    NEW_CLIENTECONTACTOTIPO: 1268,
    EDIT_CLIENTECONTACTOTIPO: 1269,
    DELETE_CLIENTECONTACTOTIPO: 1270,
    LIST_CLIENTECONTACTOTIPO: 1271,

    NEW_PERSONADOCUMENTOTIPO: 1272,
    EDIT_PERSONADOCUMENTOTIPO: 1273,
    DELETE_PERSONADOCUMENTOTIPO: 1274,
    LIST_PERSONADOCUMENTOTIPO: 1275,

    NEW_POSICIONARANCEL: 1276,
    EDIT_POSICIONARANCEL: 1277,
    DELETE_POSICIONARANCEL: 1278,
    LIST_POSICIONARANCEL: 1279,

    NEW_TARIFARIO: 1280,
    EDIT_TARIFARIO: 1281,
    DELETE_TARIFARIO: 1282,
    LIST_TARIFARIO: 1283,

    NEW_FORMAPAGO: 1284,
    EDIT_FORMAPAGO: 1285,
    DELETE_FORMAPAGO: 1286,
    LIST_FORMAPAGO: 1287,

    NEW_VENTAMODO: 1288,
    EDIT_VENTAMODO: 1289,
    DELETE_VENTAMODO: 1290,
    LIST_VENTAMODO: 1291

  }                                                                    
                                                                        
}());