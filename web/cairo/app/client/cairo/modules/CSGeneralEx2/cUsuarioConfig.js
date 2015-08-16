(function() {
  "use strict";

  Cairo.module("UsuarioConfig.Edit", function(Edit, Cairo, Backbone, Marionette, $, _) {

    var UserConfigSection = {
      purchases: 1,
      stock: 2,
      sales: 3,
      general: 4,
      treasury: 5,
      services: 6,
      preferences: 7
    };

    var createObject = function() {

      var self = {};

      var Dialogs = Cairo.Dialogs;

      var C_MODULE = "cUsuarioConfig";

      var K_INFORMAR_ANTICIPOS = 1;
      var K_DOC_ID_PREV = 2;
      var K_DOC_ID_PV = 3;
      var K_DOC_ID_RV = 4;
      var K_DOC_ID_RV_C = 104;
      var K_DOC_ID_FV = 5;
      var K_DOC_ID_COBZ = 106;
      var K_DOC_ID_OS = 100;
      var K_DOC_ID_PRP = 101;
      var K_PTD_FECHAINI = 102;
      var K_USE_PRINTER_SIZE = 103;

      var K_DOC_ID_PC = 6;
      var K_DOC_ID_PREC = 7;
      var K_DOC_ID_COT = 8;
      var K_DOC_ID_OC = 9;
      var K_DOC_ID_RC = 10;
      var K_DOC_ID_FC = 11;

      var K_DOC_ID_MF = 20;
      var K_DOC_ID_DBCO = 21;

      var K_DOC_ID_LIQ = 22;

      var K_DEPL_ID = 12;
      var K_DEPL_ID_SRV = 14;

      var K_DESKTOP = 13;
      var K_LENGUAJE = 200;
      var K_AUTO_SIZE_COLS = 202;
      var K_MULTI_SELECT = 203;
      var K_SHOW_SAVE_AS = 204;
      var K_SHOW_ALL_IN_WIZARD = 205;
      var K_FOLDER_TO_EXPORT_PDF = 206;

      var K_CLIENTE_X_DEFECTO = 305;
      var K_CUENTA_FVO_X_DEFECTO = 306;
      var K_NUEVO_AL_GRABAR = 307;
      var K_NUEVO_PTD_AL_GRABAR = 311;

      var K_PRINT_IN_NEW_FV = 312;
      var K_PRINT_IN_NEW_COBZ_CDO = 313;

      var K_CLOSE_WIZARD = 24;
      var K_NO_ASK_IN_PRINT = 25;

      var K_SHOW_BARCODE_INPUT_CTRLS = 201;

      var K_SHOWDATAADIC_IN_VENTAS = 308;
      var K_SHOWDATAADIC_IN_COMPRAS = 309;

      var K_PARTE_REPARACION_ESTADO_DEFAULT = 310;

      var K_VIEW_NAMES_IN_TOOLBAR = 320;

      var K_ESTADO_EN_HOJA_RUTA = 330;
      var K_ESTADO_EN_PICKING_LIST = 331;

      var K_DEBE_HABER_MF = 350;

      var K_USAR_COLORES_EN_DOCUMENTOS = 351;

      var K_PICKINLIST_DOC_ID_FACTURA = 360;
      var K_PICKINLIST_DOC_ID_INTERNO = 361;

      // Color en Empresa
      //
      var K_COLOR_BACKGROUND = 370;

      //
      // sales
      //
      var GRUPO_USUARIO_CONFIG = "Usuario-Config";
      var INFORMAR_ANTICIPOS = "Informar Anticipos";

      var CLIENTE_X_DEFECTO = "Cliente por Defecto";
      var CUENTA_FVO_X_DEFECTO = "Cuenta Efvo x Defecto";
      var NUEVO_AL_GRABAR = "Nuevo al Grabar";
      var SHOW_DATA_ADD_IN_VENTAS = "Mostrar Data en Ventas";
      var SHOW_DATA_ADD_IN_COMPRAS = "Mostrar Data en Compras";

      var NUEVO_PTD_AL_GRABAR = "Nuevo PTD al Grabar";
      var PRINT_IN_NEW_FV = "Imprimir en Nueva Factura";
      var PRINT_IN_NEW_COBZ_CDO = "Imprimir en Cobranza Cdo";

      var ESTADO_HOJA_RUTA = "Estado en Hoja de Ruta";
      var ESTADO_PICKING_LIST = "Estado en Picking List";

      var CLOSE_WIZARD = "Cerrar el Asistente al Finalizar";
      var NO_ASK_IN_PRINT = "No Pedir Confirmar al Imprimir";

      //
      // sale documents
      //
      var DOC_PREV = "Documento de Presupuesto";
      var DOC_PV = "Documento de Pedido";
      var DOC_RV = "Documento de Remito";
      var DOC_FV = "Documento de Factura";
      var DOC_COBZ = "Documento de Cobranza Contado";

      var DOC_RV_C = "Documento Cancelacion de Remito";

      //
      // purchase documents
      //
      var DOC_PC = "Documento de Pedido";
      var DOC_PREC = "Documento de Presupuesto";
      var DOC_OC = "Documento de Orden de Compra";
      var DOC_COT = "Documento de Cotizacion";
      var DOC_RC = "Documento de Remito";
      var DOC_FC = "Documento de Factura";

      //
      // treasury
      //
      var DEBE_HABER_MF = "Usar Debe Haber en Movimiento de Fondos";

      //
      // treasury documents
      //
      var DOC_MF = "Documento de Movimiento de Fondos";
      var DOC_DBCO = "Documento de Deposito Bancario";
      var DOC_LIQ = "Documento de Liquidacion";

      //
      // service documents
      //
      var DOC_OS = "Documento de Orden de Servicios";
      var DOC_PRP = "Documento de Parte de Reparacion";
      var PRP_ESTADO_X_DEF = "Usar Rep. y Aprob. x Defecto en P.Rep.";

      //
      // picking list
      //
      var PKL_DOC_FACTURA = "Documento Factura Despachos";
      var PKL_DOC_INTERNO = "Documento Interno Despachos";

      //
      // journal notes
      //
      var PTD_FECHA = "Cambiar Fecha Fin en Partes Diarios";

      //
      // printing
      //
      var USE_PRINTER_SIZE = "Usar el Tamaño de Papel que Reporta la Impresora";

      //
      // stock
      //
      var DEPOSITO = "Deposito";
      var DEPOSITO_SRV = "Deposito Servicios";

      //
      // language
      //
      var LENGUAJE = "Lenguaje";

      //
      // desktop
      //
      var DESKTOP = "Escritorio";

      //
      // grid columns
      //
      var AUTO_SIZE_COLS = "Autoajustar Columnas";

      //
      // selection
      //
      var MULTI_SELECT = "Usar Multiple Seleccion";

      //
      // barcode
      //
      var SHOW_BARCODE_INPUT_CTRLS = "Mostar Controles para Codigos de Barras";

      //
      // toolbar
      //
      var VIEW_NAMES_IN_TOOLBAR = "Ver Nombre en Toolbar";

      //
      // saving
      //
      var SHOW_SAVE_AS = "Mostrar Guardar Como";

      //
      // wizards
      //
      var SHOW_ALL_IN_WIZARD = "Mostrar todos los comprobantes en asistentes";

      //
      // export
      //
      var FOLDER_TO_EXPORT_PDF = "Carpeta destino de exportación PDF";

      //
      // colors
      //
      var USAR_COLORES_EN_DOC = "Usar colores en doc";
      var COLOR_EN_EMPRESA = "Color Empresa";

      var CONFIG_KEY = "cfg_aspecto";
      var CONFIG_VALUE = "cfg_valor";

      var m_userId = Cairo.Database.NO_ID;

      var m_informarAnticipos;

      var m_docIdAs = 0;
      var m_docAsNombre = "";

      var m_docIdPc = 0;
      var m_docPcNombre = "";
      var m_docIdPrec = 0;
      var m_docPrecNombre = "";
      var m_docIdCot = 0;
      var m_docCotNombre = "";
      var m_docIdOc = 0;
      var m_docOcNombre = "";
      var m_docIdRc = 0;
      var m_docRcNombre = "";
      var m_docIdFc = 0;
      var m_docFcNombre = "";

      var m_lengId = 0;
      var m_lengName = "";
      var m_autoSizeCols;
      var m_multiSelect;
      var m_usePrinterSize;
      var m_showSaveAs;
      var m_showAllInWizard;
      var m_folderToExportPDF = "";

      var m_deplId = 0;
      var m_deplNombre = "";
      var m_deplRamId = "";

      var m_deplIdSrv = 0;
      var m_deplNombreSrv = "";
      var m_deplRamIdSrv = "";

      var m_docIdPrev = 0;
      var m_docPrevNombre = "";
      var m_docIdPv = 0;
      var m_docPvNombre = "";
      var m_docIdRv = 0;
      var m_docRvNombre = "";
      var m_docIdRvC = 0;
      var m_docRvNombreC = "";
      var m_docIdFv = 0;
      var m_docFvNombre = "";
      var m_docIdCobz = 0;
      var m_docCobzNombre = "";

      var m_docIdOs = 0;
      var m_docOSNombre = "";
      var m_docIdPrp = 0;
      var m_docPRPNombre = "";

      var m_docIdLiq = 0;
      var m_docLiqNombre = "";

      var m_pklDocIdFactura = 0;
      var m_pklDocFactura = "";

      var m_pklDocIdInterno = 0;
      var m_pklDocInterno = "";

      var m_ptdFecha;

      var m_PrpEstadoDef;

      var m_docIdMf = 0;
      var m_docMfNombre = "";
      var m_docIdDbco = 0;
      var m_docDbcoNombre = "";
      var m_debeHaberMf;

      var m_desktop = "";

      var m_showBarcodeInputCtrls;

      var m_cliIdXDefecto = 0;
      var m_clienteXDefecto = "";

      var m_cueIdFvoXDefecto = 0;
      var m_cuentaFvoXDefecto = "";

      var m_nuevoAlGrabar;
      var m_printInNewFV;
      var m_printInNewCobzCdo;
      var m_closeWizard;
      var m_noAskInPrint;

      var m_showDataAddInVentas;
      var m_showDataAddInCompras;

      var m_nuevoPtdAlGrabar;

      var m_viewNamesInToolbar;
      var m_usarColoresEnDocumentos;

      var m_estIdHojaRuta = "";
      var m_estadoHojaRuta = "";

      var m_estIdPickinglist = "";
      var m_estadoPickingList = "";

      var m_colorEnEmpresa = 0;

      var m_editing;

      var m_dialog;
      var m_listController = null;

      var valField = Cairo.Database.valField;
      var getValue = Cairo.Database.getValue;
      var val = Cairo.Util.val;
      var sq = Cairo.Database.sqlString;
      var ucs = UserConfigSection;

      var CFG_GRUPO = Cairo.General.Constants.CFG_GRUPO;
      var EMP_ID = Cairo.Constants.EMP_ID;
      var TEXT = Cairo.Constants.Types.text;
      var ID = Cairo.Constants.Types.id;

      self.getShowBarcodeInputCtrls = function() {
        return m_showBarcodeInputCtrls;
      };

      self.getInformarAnticipos = function() {
        return m_informarAnticipos;
      };
      /*
       self.getDocPreeId = function() {

       };
      */
       self.getDocAsId = function() {
         return m_docIdAs;
       };
      /*
       self.getDocStId = function() {

       };

       self.getDocRsId = function() {

       };

       self.getDocPpkId = function() {

       };

       self.getDocOpkId = function() {

       };

       self.getDocPembId = function() {

       };

       self.getDocMfcId = function() {

       };

       self.getDocImptId = function() {

       };

       self.getDocPklstId = function() {

       };
       */
      self.getDocDbcoId = function() {
        return m_docIdDbco;
      };
      /*
       self.getDocDcupId = function() {

       };
       */
      self.getDocMfId = function() {
        return m_docIdMf;
      };

      self.getDocPcId = function() {
        return m_docIdPc;
      };

      self.getDocPrecId = function() {
        return m_docIdPrec;
      };

      self.getDocCotId = function() {
        return m_docIdCot;
      };

      self.getDocOcId = function() {
        return m_docIdOc;
      };

      self.getDocRcId = function() {
        return m_docIdRc;
      };

      self.getDocFcId = function() {
        return m_docIdFc;
      };

      self.getDocPrevId = function() {
        return m_docIdPrev;
      };

      self.getDocPvId = function() {
        return m_docIdPv;
      };

      self.getDocRvId = function() {
        return m_docIdRv;
      };

      self.getDocRvId_C = function() {
        return m_docIdRvC;
      };

      self.getDocFvId = function() {
        return m_docIdFv;
      };

      self.getPklDocIdFactura = function() {
        return m_pklDocIdFactura;
      };

      self.getPklDocIdInerno = function() {
        return m_pklDocIdInterno;
      };

      self.getDocCobzId = function() {
        return m_docIdCobz;
      };

      self.getDocOsId = function() {
        return m_docIdOs;
      };

      self.getDocPrpId = function() {
        return m_docIdPrp;
      };

      self.getDocLIQId = function() {
        return m_docIdLiq;
      };

      self.getPtdFecha = function() {
        return m_ptdFecha;
      };

      self.getPrpEstadoDef = function() {
        return m_PrpEstadoDef;
      };

      self.getDeplId = function() {
        return m_deplId;
      };

      self.getDeplIdSrv = function() {
        return m_deplIdSrv;
      };

      self.getLengId = function() {
        return m_lengId;
      };

      self.getAutoSizeCols = function() {
        return m_autoSizeCols;
      };

      self.getMultiSelect = function() {
        return m_multiSelect;
      };

      self.getUsePrinterSize = function() {
        return m_usePrinterSize;
      };

      self.getShowSaveAs = function() {
        return m_showSaveAs;
      };

      self.getShowAllInWizard = function() {
        return m_showAllInWizard;
      };

      self.getDeplRamId = function() {
        return m_deplRamId;
      };

      self.getDeplRamIdSrv = function() {
        return m_deplRamIdSrv;
      };
      /*
       self.getDocPreeNombre = function() {

       };
      */
       self.getDocAsNombre = function() {
         return m_docAsNombre;
       };
      /*
       self.getDocStNombre = function() {

       };

       self.getDocRsNombre = function() {

       };

       self.getDocPpkNombre = function() {

       };

       self.getDocOpkNombre = function() {

       };

       self.getDocPembNombre = function() {

       };

       self.getDocMfcNombre = function() {

       };

       self.getDocImptNombre = function() {

       };

       self.getDocPklstNombre = function() {

       };
       */
      self.getDocDbcoNombre = function() {
        return m_docDbcoNombre;
      };
      /*
       self.getDocDcupNombre = function() {

       };
       */
      self.getDocMfNombre = function() {
        return m_docMfNombre;
      };

      self.getDocPcNombre = function() {
        return m_docPcNombre;
      };

      self.getDocPrecNombre = function() {
        return m_docPrecNombre;
      };

      self.getDocCotNombre = function() {
        return m_docCotNombre;
      };

      self.getDocOcNombre = function() {
        return m_docOcNombre;
      };

      self.getDocRcNombre = function() {
        return m_docRcNombre;
      };

      self.getDocFcNombre = function() {
        return m_docFcNombre;
      };

      self.getDocPrevNombre = function() {
        return m_docPrevNombre;
      };

      self.getDocPvNombre = function() {
        return m_docPvNombre;
      };

      self.getDocRvNombre = function() {
        return m_docRvNombre;
      };

      self.getDocRvNombreC = function() {
        return m_docRvNombreC;
      };

      self.getDocFvNombre = function() {
        return m_docFvNombre;
      };

      self.getPklDocFactura = function() {
        return m_pklDocFactura;
      };

      self.getPklDocInterno = function() {
        return m_pklDocInterno;
      };

      self.getDocCobzNombre = function() {
        return m_docCobzNombre;
      };

      self.getDocOsNombre = function() {
        return m_docOSNombre;
      };

      self.getDocPrpNombre = function() {
        return m_docPRPNombre;
      };

      self.getDocLIQNombre = function() {
        return m_docLiqNombre;
      };

      self.getDeplNombre = function() {
        return m_deplNombre;
      };

      self.getDeplNombreSrv = function() {
        return m_deplNombreSrv;
      };

      self.getDesktop = function() {
        return m_desktop;
      };

      self.getFolderToExportPDF = function() {
        return m_folderToExportPDF;
      };

      self.getViewNamesInToolbar = function() {
        return m_viewNamesInToolbar;
      };

      self.getUsarColoresEnDocumentos = function() {
        return m_usarColoresEnDocumentos;
      };

      self.getColorEnEmpresa = function() {
        return m_colorEnEmpresa;
      };

      self.getCueIdFvoXDefecto = function() {
        return m_cueIdFvoXDefecto;
      };

      self.getCuentaFvoXDefecto = function() {
        return m_cuentaFvoXDefecto;
      };

      self.getCliIdxDefecto = function() {
        return m_cliIdXDefecto;
      };

      self.getClienteXDefecto = function() {
        return m_clienteXDefecto;
      };

      self.getNuevoAlGrabar = function() {
        return m_nuevoAlGrabar;
      };

      self.getPrintInNewFv = function() {
        return m_printInNewFV;
      };

      self.getPrintInNewCobzCdo = function() {
        return m_printInNewCobzCdo;
      };

      self.getNuevoPTDAlGrabar = function() {
        return m_nuevoPtdAlGrabar;
      };

      self.getShowDataAddInVentas = function() {
        return m_showDataAddInVentas;
      };

      self.getShowDataAddInCompras = function() {
        return m_showDataAddInCompras;
      };

      self.getEstIdHojaRuta = function() {
        return m_estIdHojaRuta;
      };

      self.getEstadoHojaRuta = function() {
        return m_estadoHojaRuta;
      };

      self.getEstIdPickinglist = function() {
        return m_estIdPickinglist;
      };

      self.getEstadoPickingList = function() {
        return m_estadoPickingList;
      };

      self.getDebeHaberMf = function() {
        return m_debeHaberMf;
      };

      self.getCloseWizard = function() {
        return m_closeWizard;
      };

      self.getNoAskInPrint = function() {
        return m_noAskInPrint;
      };


      self.copy = function() {

      };

      self.editNew = function() {

      };

      self.getApplication = function() {
        return Cairo.Application.getName();
      };

      self.editDocumentsEnabled = function() {
        return false;
      };

      self.copyEnabled = function() {
        return false;
      };

      self.addEnabled = function() {
        return false;
      };

      self.showDocDigital = function() {
        return false;
      };

      self.messageEx = function(messageId,  info) {
        return true;
      };

      self.discardChanges = function() {
        return Cairo.Promises.resolvedPromise(refreshCollection());
      };

      self.propertyChange = function(key) {
        return Cairo.Promises.resolvedPromise(false);
      };

      self.save = function() {

        var bAutoSize = null;
        var register = null;

        var mainRegister = new Cairo.Database.Register();
        var transaction = Cairo.Database.createTransaction();

        var companyId = Cairo.Company.getId().toString();

        transaction.setTable(Cairo.General.Constants.CONFIGURACION)

        var createRegister = function() {
          var register = new Cairo.Database.Register();
          register.setTable(Cairo.General.Constants.CONFIGURACION);
          return register;
        };

        var _count = m_dialog.getProperties().size();
        for (var _i = 0; _i < _count; _i++) {

          var property = m_dialog.getProperties().item(_i);

          switch (property.getKey()) {

            //
            // purchase
            //  

            case K_DOC_ID_PC:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_PC, ucs.purchases)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_PC, ucs.purchases), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DOC_ID_PREC:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_PREC, ucs.purchases)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_PREC, ucs.purchases), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DOC_ID_COT:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_COT, ucs.purchases)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_COT, ucs.purchases), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DOC_ID_OC:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_OC, ucs.purchases)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_OC, ucs.purchases), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DOC_ID_RC:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_RC, ucs.purchases)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_RC, ucs.purchases), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DOC_ID_FC:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_FC, ucs.purchases)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_FC, ucs.purchases), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_SHOWDATAADIC_IN_COMPRAS:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(SHOW_DATA_ADD_IN_COMPRAS, ucs.purchases)));

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(SHOW_DATA_ADD_IN_COMPRAS, ucs.purchases), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);

              transaction.addRegister(register);
              break;

            //
            // stock
            //
            case K_DEPL_ID:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DEPOSITO, ucs.stock)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DEPOSITO, ucs.stock), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DEPL_ID_SRV:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DEPOSITO_SRV, ucs.stock)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DEPOSITO_SRV, ucs.stock), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            //
            // sales
            //
            case K_INFORMAR_ANTICIPOS:

              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(INFORMAR_ANTICIPOS, ucs.sales)));

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(INFORMAR_ANTICIPOS, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()) ? 1 : 0, TEXT);

              transaction.addRegister(register);
              break;

            case K_DOC_ID_PREV:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_PREV, ucs.sales)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_PREV, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DOC_ID_PV:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_PV, ucs.sales)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_PV, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DOC_ID_RV:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_RV, ucs.sales)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_RV, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DOC_ID_RV_C:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_RV_C, ucs.sales)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_RV_C, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DOC_ID_FV:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_FV, ucs.sales)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_FV, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DOC_ID_COBZ:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_COBZ, ucs.sales)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_COBZ, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_VIEW_NAMES_IN_TOOLBAR:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(VIEW_NAMES_IN_TOOLBAR, ucs.general)));

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(VIEW_NAMES_IN_TOOLBAR, ucs.general), TEXT);
              w_fields.add(CONFIG_VALUE, property.getValue(), TEXT);

              transaction.addRegister(register);
              break;

            case K_PARTE_REPARACION_ESTADO_DEFAULT:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(PRP_ESTADO_X_DEF, ucs.services)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(PRP_ESTADO_X_DEF, ucs.services), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_SHOWDATAADIC_IN_VENTAS:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(SHOW_DATA_ADD_IN_VENTAS, ucs.sales)));

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(SHOW_DATA_ADD_IN_VENTAS, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);

              transaction.addRegister(register);
              break;

            case K_SHOW_BARCODE_INPUT_CTRLS:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(SHOW_BARCODE_INPUT_CTRLS) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, SHOW_BARCODE_INPUT_CTRLS, TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_ESTADO_EN_HOJA_RUTA:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(ESTADO_HOJA_RUTA, ucs.sales)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(ESTADO_HOJA_RUTA, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectIntValue(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            //
            // Picking List
            //  

            case K_PICKINLIST_DOC_ID_FACTURA:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(PKL_DOC_FACTURA, ucs.sales)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(PKL_DOC_FACTURA, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_PICKINLIST_DOC_ID_INTERNO:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(PKL_DOC_INTERNO, ucs.sales)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(PKL_DOC_INTERNO, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_ESTADO_EN_PICKING_LIST:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(ESTADO_PICKING_LIST, ucs.sales)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(ESTADO_PICKING_LIST, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectIntValue(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            //
            // general
            //

            case K_DESKTOP:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DESKTOP, ucs.general)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DESKTOP, ucs.general), TEXT);
              w_fields.add(CONFIG_VALUE, property.getValue(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_USAR_COLORES_EN_DOCUMENTOS:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(USAR_COLORES_EN_DOC, ucs.general)));

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(USAR_COLORES_EN_DOC, ucs.general), TEXT);
              w_fields.add(CONFIG_VALUE, property.getValue(), TEXT);

              transaction.addRegister(register);
              break;

            case K_COLOR_BACKGROUND:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(COLOR_EN_EMPRESA, ucs.general)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(COLOR_EN_EMPRESA, ucs.general), TEXT);
              w_fields.add(CONFIG_VALUE, property.getValue(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_FOLDER_TO_EXPORT_PDF:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(FOLDER_TO_EXPORT_PDF, ucs.general)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(FOLDER_TO_EXPORT_PDF, ucs.general), TEXT);
              w_fields.add(CONFIG_VALUE, property.getValue(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_LENGUAJE:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(LENGUAJE, ucs.general)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(LENGUAJE, ucs.general), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_AUTO_SIZE_COLS:

              bAutoSize = val(property.getValue());

              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(AUTO_SIZE_COLS, ucs.general)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(AUTO_SIZE_COLS, ucs.general), TEXT);
              w_fields.add(CONFIG_VALUE, bAutoSize, TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_MULTI_SELECT:

              bAutoSize = val(property.getValue());

              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(MULTI_SELECT, ucs.general)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(MULTI_SELECT, ucs.general), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_SHOW_SAVE_AS:

              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(SHOW_SAVE_AS, ucs.general)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(SHOW_SAVE_AS, ucs.general), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_SHOW_ALL_IN_WIZARD:

              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(SHOW_ALL_IN_WIZARD, ucs.general)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(SHOW_ALL_IN_WIZARD, ucs.general), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            //
            // tresaury
            //

            case K_DOC_ID_MF:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_MF, ucs.treasury)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_MF, ucs.treasury), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DOC_ID_DBCO:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_DBCO, ucs.treasury)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_DBCO, ucs.treasury), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DEBE_HABER_MF:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DEBE_HABER_MF, ucs.treasury)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DEBE_HABER_MF, ucs.treasury), TEXT);
              w_fields.add(CONFIG_VALUE, property.getValue(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            //
            // services
            //

            case K_DOC_ID_OS:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_OS, ucs.services)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_OS, ucs.services), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_DOC_ID_PRP:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_PRP, ucs.services)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_PRP, ucs.services), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            //
            // preferences
            //

            case K_DOC_ID_LIQ:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(DOC_LIQ, ucs.preferences)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(DOC_LIQ, ucs.preferences), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_USE_PRINTER_SIZE:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(USE_PRINTER_SIZE, ucs.general)));

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(USE_PRINTER_SIZE, ucs.general), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);

              transaction.addRegister(register);
              break;

            case K_PTD_FECHAINI:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(PTD_FECHA, ucs.services)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(PTD_FECHA, ucs.services), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_NUEVO_AL_GRABAR:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(NUEVO_AL_GRABAR, ucs.sales)));

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(NUEVO_AL_GRABAR, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);

              transaction.addRegister(register);
              break;

            case K_NUEVO_PTD_AL_GRABAR:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(NUEVO_PTD_AL_GRABAR, ucs.sales)));

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(NUEVO_PTD_AL_GRABAR, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);

              transaction.addRegister(register);
              break;

            case K_PRINT_IN_NEW_FV:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(PRINT_IN_NEW_FV, ucs.sales)));

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(PRINT_IN_NEW_FV, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);

              transaction.addRegister(register);
              break;

            case K_PRINT_IN_NEW_COBZ_CDO:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(PRINT_IN_NEW_COBZ_CDO, ucs.sales)));

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(PRINT_IN_NEW_COBZ_CDO, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);

              transaction.addRegister(register);
              break;

            case K_CLIENTE_X_DEFECTO:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(CLIENTE_X_DEFECTO, ucs.sales)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(CLIENTE_X_DEFECTO, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_CUENTA_FVO_X_DEFECTO:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(CUENTA_FVO_X_DEFECTO, ucs.sales)) + ", emp_id:" + companyId);

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(CUENTA_FVO_X_DEFECTO, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, property.getSelectId(), TEXT);
              w_fields.add(EMP_ID, Cairo.Company.getId(), ID);

              transaction.addRegister(register);
              break;

            case K_CLOSE_WIZARD:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(CLOSE_WIZARD, ucs.sales)));

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(CLOSE_WIZARD, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);

              transaction.addRegister(register);
              break;

            case K_NO_ASK_IN_PRINT:
              register = createRegister();

              register.setFilter("cfg_grupo:" + sq(GRUPO_USUARIO_CONFIG) + ", cfg_aspecto:" + sq(ck(NO_ASK_IN_PRINT, ucs.sales)));

              var w_fields = register.getFields();
              w_fields.add(CFG_GRUPO, GRUPO_USUARIO_CONFIG, TEXT);
              w_fields.add(CONFIG_KEY, ck(NO_ASK_IN_PRINT, ucs.sales), TEXT);
              w_fields.add(CONFIG_VALUE, val(property.getValue()), TEXT);

              transaction.addRegister(register);
              break;
          }
        }

        mainRegister.addTransaction(transaction);

        Cairo.UserConfig.setAutoSizeCols(bAutoSize);

        return Cairo.Database.saveTransaction(
          register,
          false,
          "",
          Cairo.Constants.CLIENT_SAVE_FUNCTION,
          C_MODULE,
          Cairo.Language.getText(2938, "") // Error al grabar la Configuración del Usuario

        ).then(

          function(result) {
            if(result.success) {
              return load().then(
                function (success) {
                  if(success) {
                    setColorInCompany();
                  };
                  return success;
                }
              );
            }
            else {
              return false;
            }
          }
        );
      };

      var setColorInCompany = function() {
        // TODO: implement this.
      };

      self.getPath = function() {
        return "#general/usuarioconfig";
      };

      self.getEditorName = function() {
        return "usuarioconfig" + m_userId.toString();
      };

      self.getTitle = function() {
        return Cairo.Language.getText(2933, ""); // Configuración del Usuario
      };

      self.validate = function() {
        return Cairo.Promises.resolvedPromise(true);
      };

      self.validatePREE = function() {

      };

      self.validateIMPT = function() {

      };

      self.validateMFC = function() {

      };

      self.validatePKLST = function() {

      };

      self.validatePEMB = function() {

      };

      self.validateDCUP = function() {

      };

      self.validateMF = function() {
        pValidate(m_docIdMf, m_docMfNombre).then(
          function(info) {
            m_docMfNombre = info.name;
            m_docIdMf = info.id;
          }
        );
      };

      self.validateDBCO = function() {
        pValidate(m_docIdDbco, m_docDbcoNombre).then(
          function(info) {
            m_docDbcoNombre = info.name;
            m_docIdDbco = info.id;
          }
        );
      };

      self.validatePPK = function() {
        self.validateDepl();
      };

      self.validateOPK = function() {
        self.validateDepl();
      };

      self.validateRS = function() {

      };

      self.validateST = function() {

      };

      self.validateAS = function() {

      };

      self.validatePC = function() {
        pValidate(m_docIdPc, m_docPcNombre).then(
          function(info) {
            m_docPcNombre = info.name;
            m_docIdPc = info.id;
          }
        );
      };

      self.validateOC = function() {
        pValidate(m_docIdOc, m_docOcNombre).then(
          function(info) {
            m_docOcNombre = info.name;
            m_docIdOc = info.id;
          }
        );
      };

      self.validateRC = function() {
        pValidate(m_docIdRc, m_docRcNombre).then(
          function(info) {
            m_docRcNombre = info.name;
            m_docIdRc = info.id;
          }
        );
        self.validateDepl();
      };

      self.validateFC = function() {
        pValidate(m_docIdFc, m_docFcNombre).then(
          function(info) {
            m_docFcNombre = info.name;
            m_docIdFc = info.id;
          }
        );
        self.validateDepl();
      };

      self.validatePV = function() {
        pValidate(m_docIdPv, m_docPvNombre).then(
          function(info) {
            m_docPvNombre = info.name;
            m_docIdPv = info.id;
          }
        );
        self.validateDepl();
      };

      self.validateRV = function() {
        pValidate(m_docIdRv, m_docRvNombre).then(
          function(info) {
            m_docRvNombre = info.name;
            m_docIdRv = info.id;
          }
        );
        self.validateDepl();
      };

      self.validateRVC = function() {
        pValidate(m_docIdRvC, m_docRvNombreC).then(
          function(info) {
            m_docRvNombreC = info.name;
            m_docIdRvC = info.id;
          }
        );
        self.validateDepl();
      };

      self.validateOS = function() {
        pValidate(m_docIdOs, m_docOSNombre).then(
          function(info) {
            m_docOSNombre = info.name;
            m_docIdOs = info.id;
          }
        );
        self.validateDepl();
      };

      self.validatePRP = function() {
        pValidate(m_docIdPrp, m_docPRPNombre).then(
          function(info) {
            m_docPRPNombre = info.name;
            m_docIdPrp = info.id;
          }
        );
        self.validateDepl();
      };

      self.validateFV = function() {
        pValidate(m_docIdFv, m_docFvNombre).then(
          function(info) {
            m_docFvNombre = info.name;
            m_docIdFv = info.id;
          }
        );
        self.validateDepl();
      };

      self.validatePklFactura = function() {
        pValidate(m_pklDocIdFactura, m_pklDocFactura).then(
          function(info) {
            m_pklDocFactura = info.name;
            m_pklDocIdFactura = info.id;
          }
        );
      };

      self.validatePklInterno = function() {
        pValidate(m_pklDocIdInterno, m_pklDocInterno).then(
          function(info) {
            m_pklDocInterno = info.name;
            m_pklDocIdInterno = info.id;
          }
        );
      };

      self.validateLIQ = function() {
        pValidate(m_docIdLiq, m_docLiqNombre).then(
          function(info) {
            m_docLiqNombre = info.name;
            m_docIdLiq = info.id;
          }
        );
      };

      self.validateDepl = function() {
        return Cairo.Select.Controller.validate(Cairo.Tables.DEPOSITO_LOGICO, m_deplNombre, m_deplId).then(
          function(result) {
            if(result.success) {
              m_deplNombre = result.info.name;
              m_deplId = Cairo.Util.val(result.info.id);
            }
            else {
              m_deplNombre = "";
              m_deplId = Cairo.Constants.NO_ID;
            }
          }
        );
      };

      var pValidate = function(id,  name) {
        return Cairo.Select.Controller.validate(Cairo.Tables.DOCUMENTO, name, id).then(
          function(result) {
            if(result.success) {
              return {
                name: result.info.name,
                id: Cairo.Util.val(result.info.id)
              }
            }
            else {
              return {
                name: "",
                id: Cairo.Constants.NO_ID
              };
            }
          }
        );
      };

      var load = function(id) {

        m_userId = id;

        var apiPath = Cairo.Database.getAPIVersion();
        return Cairo.Database.getData("load[" + apiPath + "general/usuarioconfig]", m_userId).then(
          function (response) {

            if(response.success === true) {

              m_informarAnticipos = false;

              var keyInfAnticipos = ck(INFORMAR_ANTICIPOS, ucs.sales);
              var keyNuevoAlGrabar = ck(NUEVO_AL_GRABAR, ucs.sales);
              var keyPrintInNewFv = ck(PRINT_IN_NEW_FV, ucs.sales);
              var keyPrintInNewCobzCdo = ck(PRINT_IN_NEW_COBZ_CDO, ucs.sales);
              var keyNuevoPTDAlGrabar = ck(NUEVO_PTD_AL_GRABAR, ucs.sales);
              var keyUsePrinterSize = ck(USE_PRINTER_SIZE, ucs.general);

              var keyShowDataAddInVentas = ck(SHOW_DATA_ADD_IN_VENTAS, ucs.sales);
              var keyShowDataAddInCompras = ck(SHOW_DATA_ADD_IN_COMPRAS, ucs.purchases);

              var keyViewNamesInTb = ck(VIEW_NAMES_IN_TOOLBAR, ucs.general);
              var keyUsarColoresEnDoc = ck(USAR_COLORES_EN_DOC, ucs.general);

              var keyCloseWizard = ck(CLOSE_WIZARD, ucs.sales);
              var keyNoAskInPrint = ck(NO_ASK_IN_PRINT, ucs.sales);

              var keyDocPc = ck(DOC_PC, ucs.purchases);
              var keyDocCot = ck(DOC_COT, ucs.purchases);
              var keyDocOc = ck(DOC_OC, ucs.purchases);
              var keyDocRc = ck(DOC_RC, ucs.purchases);
              var keyDocFc = ck(DOC_FC, ucs.purchases);

              var keyDocPv = ck(DOC_PV, ucs.sales);
              var keyDocPrev = ck(DOC_PREV, ucs.sales);
              var keyDocRv = ck(DOC_RV, ucs.sales);
              var keyDocRvC = ck(DOC_RV_C, ucs.sales);
              var keyDocFv = ck(DOC_FV, ucs.sales);
              var keyDocCobz = ck(DOC_COBZ, ucs.sales);

              var keyPklDocFac = ck(PKL_DOC_FACTURA, ucs.sales);
              var keyPklDocInt = ck(PKL_DOC_INTERNO, ucs.sales);

              var keyDocOs = ck(DOC_OS, ucs.services);
              var keyDocPrp = ck(DOC_PRP, ucs.services);
              var keyPtdFecha = ck(PTD_FECHA, ucs.services);
              var keyPrpEstadoDef = ck(PRP_ESTADO_X_DEF, ucs.services);

              var keyDocMF = ck(DOC_MF, ucs.treasury);
              var keyDocDBCO = ck(DOC_DBCO, ucs.treasury);
              var keyDebeHaberMf = ck(DEBE_HABER_MF, ucs.treasury);

              var keyDocLIQ = ck(DOC_LIQ, ucs.preferences);

              var keyDepl = ck(DEPOSITO, ucs.stock);
              var keyDeplSrv = ck(DEPOSITO_SRV, ucs.stock);

              var keyDesktop = ck(DESKTOP, ucs.general);
              var keyLenguaje = ck(LENGUAJE, ucs.general);
              var keyAutoSizeCols = ck(AUTO_SIZE_COLS, ucs.general);
              var keyMultiSelect = ck(MULTI_SELECT, ucs.general);
              var keyShowSaveAs = ck(SHOW_SAVE_AS, ucs.general);
              var keyShowAllInWizard = ck(SHOW_ALL_IN_WIZARD, ucs.general);
              var keyFolderToExportPDF = ck(FOLDER_TO_EXPORT_PDF, ucs.general);

              var keyCuentaFvo = ck(CUENTA_FVO_X_DEFECTO, ucs.sales);
              var keyCliente = ck(CLIENTE_X_DEFECTO, ucs.sales);

              var keyEstadoHojaRuta = ck(ESTADO_HOJA_RUTA, ucs.sales);
              var keyEstadoPickingList = ck(ESTADO_PICKING_LIST, ucs.sales);

              var keyColorEmpresa = ck(COLOR_EN_EMPRESA, ucs.general);

              m_showBarcodeInputCtrls = false;

              m_docIdPv = Cairo.Constants.NO_ID;
              m_docPvNombre = "";
              
              var settings = response.data.get('settings')

              for (var _i = 0; _i < settings.length; _i += 1) {
                switch (getValue(settings[_i], CONFIG_KEY)) {
                  case keyInfAnticipos:
                    m_informarAnticipos = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyNuevoAlGrabar:
                    m_nuevoAlGrabar = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyNuevoPTDAlGrabar:
                    m_nuevoPtdAlGrabar = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyPrintInNewFv:
                    m_printInNewFV = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyPrintInNewCobzCdo:
                    m_printInNewCobzCdo = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyUsePrinterSize:
                    m_usePrinterSize = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyShowDataAddInVentas:
                    m_showDataAddInVentas = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyShowDataAddInCompras:
                    m_showDataAddInCompras = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyViewNamesInTb:
                    m_viewNamesInToolbar = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyUsarColoresEnDoc:
                    m_usarColoresEnDocumentos = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyCloseWizard:
                    m_closeWizard = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyNoAskInPrint:
                    m_noAskInPrint = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyDocPc:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdPc = doc.id;
                    m_docPcNombre = doc.name;
                    break;

                  case keyDocPrev:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdPrev = doc.id;
                    m_docPrevNombre = doc.name;
                    break;

                  case keyDocCot:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdCot = doc.id;
                    m_docCotNombre = doc.name;
                    break;

                  case keyDocOc:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdOc = doc.id;
                    m_docOcNombre = doc.name;
                    break;

                  case keyDocRc:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdRc = doc.id;
                    m_docRcNombre = doc.name;
                    break;

                  case keyDocFc:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdFc = doc.id;
                    m_docFcNombre = doc.name;
                    break;

                  case keyDocPv:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdPv = doc.id;
                    m_docPvNombre = doc.name;
                    break;

                  case keyDocPrev:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdPrev = doc.id;
                    m_docPrevNombre = doc.name;
                    break;

                  case keyDocRv:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdRv = doc.id;
                    m_docRvNombre = doc.name;
                    break;

                  case keyDocRvC:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdRvC = doc.id;
                    m_docRvNombreC = doc.name;
                    break;

                  case keyDocFv:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdFv = doc.id;
                    m_docFvNombre = doc.name;
                    break;

                  case keyPklDocFac:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_pklDocIdFactura = doc.id;
                    m_pklDocFactura = doc.name;
                    break;

                  case keyPklDocInt:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_pklDocIdInterno = doc.id;
                    m_pklDocInterno = doc.name;
                    break;

                  case keyDocCobz:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdCobz = doc.id;
                    m_docCobzNombre = doc.name;
                    break;

                  case SHOW_BARCODE_INPUT_CTRLS:
                    m_showBarcodeInputCtrls = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyDocOs:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdOs = doc.id;
                    m_docOSNombre = doc.name;
                    break;

                  case keyDocPrp:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdPrp = doc.id;
                    m_docPRPNombre = doc.name;
                    break;

                  case keyPtdFecha:
                    m_ptdFecha = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyPrpEstadoDef:
                    m_PrpEstadoDef = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyDocMF:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdMf = doc.id;
                    m_docMfNombre = doc.name;
                    break;

                  case keyDocDBCO:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdDbco = doc.id;
                    m_docDbcoNombre = doc.name;
                    break;

                  case keyDebeHaberMf:
                    m_debeHaberMf = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyDocLIQ:
                    var doc = getValue(settings[_i], CONFIG_VALUE);
                    m_docIdLiq = doc.id;
                    m_docLiqNombre = doc.name;
                    break;

                  case keyDepl:
                    var value = getValue(settings[_i], CONFIG_VALUE);
                    m_deplId = value.id;
                    m_deplNombre = value.name;
                    break;

                  case keyDeplSrv:
                    var value = getValue(settings[_i], CONFIG_VALUE);
                    m_deplIdSrv = value.id;
                    m_deplNombreSrv = value.name;
                    break;

                  case keyDesktop:
                    m_desktop = getValue(settings[_i], CONFIG_VALUE);
                    break;

                  case keyFolderToExportPDF:
                    m_folderToExportPDF = getValue(settings[_i], CONFIG_VALUE);
                    break;

                  case keyLenguaje:
                    var language = getValue(settings[_i], CONFIG_VALUE);
                    m_lengId = language.id;
                    m_lengName = language.name;
                    break;

                  case keyAutoSizeCols:
                    m_autoSizeCols = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyMultiSelect:
                    m_multiSelect = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyShowSaveAs:
                    m_showSaveAs = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyShowAllInWizard:
                    m_showAllInWizard = val(getValue(settings[_i], CONFIG_VALUE));
                    break;

                  case keyCliente:
                    var customer = getValue(settings[_i], CONFIG_VALUE);
                    m_cliIdXDefecto = customer.id;
                    m_clienteXDefecto = customer.name;
                    break;

                  case keyCuentaFvo:
                    var account = getValue(settings[_i], CONFIG_VALUE);
                    m_cueIdFvoXDefecto = account.id;
                    m_cuentaFvoXDefecto = account.name;
                    break;

                  case keyEstadoHojaRuta:
                    var status = getValue(settings[_i], CONFIG_VALUE);
                    m_estIdHojaRuta = status.id;
                    m_estadoHojaRuta = status.name;
                    break;

                  case keyEstadoPickingList:
                    var status = getValue(settings[_i], CONFIG_VALUE);
                    m_estIdPickinglist = status.id;
                    m_estadoPickingList = status.name;
                    break;

                  case keyColorEmpresa:
                    m_colorEnEmpresa = val(getValue(settings[_i], CONFIG_VALUE));
                    break;
                }
              }
              return true;
            }
            else {
              return false;
            }
          }
        );
      };

      self.load = load;

      self.setDialog = function(value) {
        m_dialog = value;
      };

      self.edit = function(id, inModalWindow) {
        var p = Cairo.Promises.resolvedPromise(false);
        try {

          if(!Cairo.Security.hasPermissionTo(Cairo.Security.Actions.General.MODIFY_CONFIG_USUARIO)) { return p; }

          m_dialog.setInModalWindow(inModalWindow);

          p = load(id).then(
            function(success) {
              if(success) {

                if(!loadCollection()) { return false; }

                m_editing = true;
              }
              return true;
            });
        }
        catch(ex) {
          Cairo.manageErrorEx(ex.message, ex, Cairo.Constants.EDIT_FUNCTION, "cUsuarioConfig", "");
        }

        return p;
      };

      self.setTree = function(value) {
        m_listController = value;
      };

      var loadCollection = function() {

        m_dialog.setUseSelectIntValue(true);

        var TAB_GENERAL = 0;
        var TAB_COMPRAS = 1;
        var TAB_STOCK = 2;
        var TAB_VENTAS = 3;
        var TAB_TESORERIA = 4;
        var TAB_SERVICIOS = 5;
        var TAB_PERSONAL = 6;
        var TAB_DESPACHO = 7;
        var TAB_CANCELACION = 8;

        var w_tabs = m_dialog.getTabs();
        w_tabs.clear();

        var tab = w_tabs.add(null);
        tab.setIndex(TAB_GENERAL);
        tab.setName(Cairo.Constants.TAB_GENERAL);

        var tab = w_tabs.add(null);
        tab.setIndex(TAB_COMPRAS);
        tab.setName(Cairo.Language.getText(1489, "")); // Compras

        var tab = w_tabs.add(null);
        tab.setIndex(TAB_STOCK);
        tab.setName(Cairo.Language.getText(1298, "")); // Stock

        var tab = w_tabs.add(null);
        tab.setIndex(TAB_VENTAS);
        tab.setName(Cairo.Language.getText(1488, "")); // Ventas

        var tab = w_tabs.add(null);
        tab.setIndex(TAB_TESORERIA);
        tab.setName(Cairo.Language.getText(2935, "")); // Tesoreria

        var tab = w_tabs.add(null);
        tab.setIndex(TAB_SERVICIOS);
        tab.setName(Cairo.Language.getText(2676, "")); // Servicios

        var tab = w_tabs.add(null);
        tab.setIndex(TAB_PERSONAL);
        tab.setName(Cairo.Language.getText(3880, "")); // Personal

        var tab = w_tabs.add(null);
        tab.setIndex(TAB_DESPACHO);
        tab.setName(Cairo.Language.getText(4885, "")); // Depachos

        var tab = w_tabs.add(null);
        tab.setIndex(TAB_CANCELACION);
        tab.setName(Cairo.Language.getText(4959, "")); // Cancelacion

        var properties = m_dialog.getProperties();

        properties.clear();

        //
        // general
        //

        var elem = properties.add(null, DESKTOP);
        elem.setType(Dialogs.PropertyType.file);
        elem.setSelectFilter(Cairo.Language.getText(2936, "")); // Archivos de Escritorio|*.csd
        elem.setName(DESKTOP);
        elem.setKey(K_DESKTOP);
        elem.setValue(m_desktop);
        elem.setTabIndex(TAB_GENERAL);

        var elem = properties.add(null, LENGUAJE);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.LENGUAJE);
        elem.setName(LENGUAJE);
        elem.setKey(K_LENGUAJE);
        elem.setSelectId(m_lengId);
        elem.setValue(m_lengName);
        elem.setTabIndex(TAB_GENERAL);

        var elem = properties.add(null, AUTO_SIZE_COLS);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(AUTO_SIZE_COLS);
        elem.setKey(K_AUTO_SIZE_COLS);
        elem.setValue(Cairo.Util.boolToInt(m_autoSizeCols));
        elem.setTabIndex(TAB_GENERAL);

        var elem = properties.add(null, MULTI_SELECT);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(MULTI_SELECT);
        elem.setKey(K_MULTI_SELECT);
        elem.setValue(Cairo.Util.boolToInt(m_multiSelect));
        elem.setTabIndex(TAB_GENERAL);

        var elem = properties.add(null, USE_PRINTER_SIZE);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(USE_PRINTER_SIZE);
        elem.setKey(K_USE_PRINTER_SIZE);
        elem.setValue(Cairo.Util.boolToInt(m_usePrinterSize));
        elem.setTabIndex(TAB_GENERAL);

        var elem = properties.add(null, VIEW_NAMES_IN_TOOLBAR);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName("Ver el nombre de los bótones en las barras de herramientas");
        elem.setKey(K_VIEW_NAMES_IN_TOOLBAR);
        elem.setValue(Cairo.Util.boolToInt(m_viewNamesInToolbar));
        elem.setTabIndex(TAB_GENERAL);

        var elem = properties.add(null, SHOW_SAVE_AS);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(SHOW_SAVE_AS);
        elem.setKey(K_SHOW_SAVE_AS);
        elem.setValue(Cairo.Util.boolToInt(m_showSaveAs));
        elem.setTabIndex(TAB_GENERAL);

        var elem = properties.add(null, SHOW_ALL_IN_WIZARD);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(SHOW_ALL_IN_WIZARD);
        elem.setKey(K_SHOW_ALL_IN_WIZARD);
        elem.setValue(Cairo.Util.boolToInt(m_showAllInWizard));
        elem.setTabIndex(TAB_GENERAL);

        var elem = properties.add(null, FOLDER_TO_EXPORT_PDF);
        elem.setType(Dialogs.PropertyType.folder);
        elem.setName(FOLDER_TO_EXPORT_PDF);
        elem.setKey(K_FOLDER_TO_EXPORT_PDF);
        elem.setValue(m_folderToExportPDF);
        elem.setTabIndex(TAB_GENERAL);

        var elem = properties.add(null, USAR_COLORES_EN_DOC);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(Cairo.Language.getText(4821, "")); // Usar colores en documentos
        elem.setKey(K_USAR_COLORES_EN_DOCUMENTOS);
        elem.setValue(m_usarColoresEnDocumentos);
        elem.setTabIndex(TAB_GENERAL);

        var elem = properties.add(null, COLOR_EN_EMPRESA);
        elem.setType(Dialogs.PropertyType.numeric);
        elem.setSubType(Dialogs.PropertySubType.Integer);
        elem.setName(Cairo.Language.getText(4915, "")); // Color en Empresa
        elem.setKey(K_COLOR_BACKGROUND);
        elem.setValue(m_colorEnEmpresa);
        elem.setTabIndex(TAB_GENERAL);

        //
        // purchase
        //

        var elem = properties.add(null, DOC_PC);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_PC);
        elem.setKey(K_DOC_ID_PC);
        elem.setSelectId(m_docIdPc);
        elem.setSelectFilter("'doctId = 6'");
        elem.setValue(m_docPcNombre);
        elem.setTabIndex(TAB_COMPRAS);

        var elem = properties.add(null, DOC_PREC);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_PREC);
        elem.setKey(K_DOC_ID_PREC);
        elem.setSelectId(m_docIdPrec);
        elem.setSelectFilter("'doctId = 12'");
        elem.setValue(m_docPrecNombre);
        elem.setTabIndex(TAB_COMPRAS);

        var elem = properties.add(null, DOC_COT);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_COT);
        elem.setKey(K_DOC_ID_COT);
        elem.setSelectId(m_docIdCot);
        elem.setSelectFilter("'doctId = 37'");
        elem.setValue(m_docCotNombre);
        elem.setTabIndex(TAB_COMPRAS);

        var elem = properties.add(null, DOC_OC);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_OC);
        elem.setKey(K_DOC_ID_OC);
        elem.setSelectId(m_docIdOc);
        elem.setSelectFilter("'doctId = 35'");
        elem.setValue(m_docOcNombre);
        elem.setTabIndex(TAB_COMPRAS);

        var elem = properties.add(null, DOC_RC);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_RC);
        elem.setKey(K_DOC_ID_RC);
        elem.setSelectId(m_docIdRc);
        elem.setSelectFilter("'doctId = 4'");
        elem.setValue(m_docRcNombre);
        elem.setTabIndex(TAB_COMPRAS);

        var elem = properties.add(null, DOC_FC);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_FC);
        elem.setKey(K_DOC_ID_FC);
        elem.setSelectId(m_docIdFc);
        elem.setSelectFilter("'doctId = 2'");
        elem.setValue(m_docFcNombre);
        elem.setTabIndex(TAB_COMPRAS);

        var elem = properties.add(null, SHOW_DATA_ADD_IN_COMPRAS);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(Cairo.Language.getText(3914, "")); // Ver datos del proveedor
        elem.setKey(K_SHOWDATAADIC_IN_COMPRAS);
        elem.setValue(Cairo.Util.boolToInt(m_showDataAddInCompras));
        elem.setTabIndex(TAB_COMPRAS);

        //
        // stock
        //

        var elem = properties.add(null, DEPOSITO);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DEPOSITO_LOGICO);
        elem.setName(DEPOSITO);
        elem.setKey(K_DEPL_ID);
        elem.setSelectId(m_deplId);
        elem.setValue(m_deplNombre);
        elem.setTabIndex(TAB_STOCK);

        var elem = properties.add(null, DEPOSITO_SRV);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DEPOSITO_LOGICO);
        elem.setName(DEPOSITO_SRV);
        elem.setKey(K_DEPL_ID_SRV);
        elem.setSelectId(m_deplIdSrv);
        elem.setValue(m_deplNombreSrv);
        elem.setTabIndex(TAB_STOCK);

        //
        // sales
        //

        var elem = properties.add(null, INFORMAR_ANTICIPOS);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(Cairo.Language.getText(2937, "")); // Mostrar un mensaje al grabar las Facturas de venta informando si el cliente(tiene anticipos)
        elem.setKey(K_INFORMAR_ANTICIPOS);
        elem.setValue(Cairo.Util.boolToInt(m_informarAnticipos));
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, DOC_PREV + "v");
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_PREV);
        elem.setKey(K_DOC_ID_PREV);
        elem.setSelectId(m_docIdPrev);
        elem.setSelectFilter("'doctId = 11'");
        elem.setValue(m_docPrevNombre);
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, DOC_PV + "v");
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_PV);
        elem.setKey(K_DOC_ID_PV);
        elem.setSelectId(m_docIdPv);
        elem.setSelectFilter("'doctId = 5'");
        elem.setValue(m_docPvNombre);
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, DOC_RV + "v");
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_RV);
        elem.setKey(K_DOC_ID_RV);
        elem.setSelectId(m_docIdRv);
        elem.setSelectFilter("'doctId = 3'");
        elem.setValue(m_docRvNombre);
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, DOC_FV + "v");
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_FV);
        elem.setKey(K_DOC_ID_FV);
        elem.setSelectId(m_docIdFv);
        elem.setSelectFilter("'doctId = 1'");
        elem.setValue(m_docFvNombre);
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, DOC_COBZ);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_COBZ);
        elem.setKey(K_DOC_ID_COBZ);
        elem.setSelectId(m_docIdCobz);
        elem.setSelectFilter("'doctId = 13'");
        elem.setValue(m_docCobzNombre);
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, SHOW_BARCODE_INPUT_CTRLS);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(SHOW_BARCODE_INPUT_CTRLS);
        elem.setKey(K_SHOW_BARCODE_INPUT_CTRLS);
        elem.setValue(Cairo.Util.boolToInt(m_showBarcodeInputCtrls));
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, CUENTA_FVO_X_DEFECTO);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.CUENTA);
        elem.setName(Cairo.Language.getText(3554, "")); // Cuenta efectivo de cobranza contado
        elem.setKey(K_CUENTA_FVO_X_DEFECTO);
        elem.setSelectId(m_cueIdFvoXDefecto);
        elem.setValue(m_cuentaFvoXDefecto);
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, CLIENTE_X_DEFECTO);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.CLIENTE);
        elem.setName(Cairo.Language.getText(3556, "")); // Cliente por defecto
        elem.setKey(K_CLIENTE_X_DEFECTO);
        elem.setSelectId(m_cliIdXDefecto);
        elem.setValue(m_clienteXDefecto);
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, NUEVO_AL_GRABAR);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(Cairo.Language.getText(3555, "")); // Presentar un nuevo documento despues de grabar
        elem.setKey(K_NUEVO_AL_GRABAR);
        elem.setValue(Cairo.Util.boolToInt(m_nuevoAlGrabar));
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, PRINT_IN_NEW_FV);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(Cairo.Language.getText(4837, "")); // Imprimir al grabar una nueva factura
        elem.setKey(K_PRINT_IN_NEW_FV);
        elem.setValue(Cairo.Util.boolToInt(m_printInNewFV));
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, PRINT_IN_NEW_COBZ_CDO);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(Cairo.Language.getText(4838, "")); // Imprimir recibo en cobranza contado
        elem.setKey(K_PRINT_IN_NEW_COBZ_CDO);
        elem.setValue(Cairo.Util.boolToInt(m_printInNewCobzCdo));
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, NUEVO_PTD_AL_GRABAR);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(Cairo.Language.getText(4836, "")); // Presentar un nuevo parte despues de grabar
        elem.setKey(K_NUEVO_PTD_AL_GRABAR);
        elem.setValue(Cairo.Util.boolToInt(m_nuevoPtdAlGrabar));
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, SHOW_DATA_ADD_IN_VENTAS);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(Cairo.Language.getText(3913, "")); // Ver datos del cliente
        elem.setKey(K_SHOWDATAADIC_IN_VENTAS);
        elem.setValue(Cairo.Util.boolToInt(m_showDataAddInVentas));
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, CLOSE_WIZARD);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(Cairo.Language.getText(5079, "")); // Cerrar Asistente al Finalizar
        elem.setKey(K_CLOSE_WIZARD);
        elem.setValue(Cairo.Util.boolToInt(m_closeWizard));
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, NO_ASK_IN_PRINT);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(Cairo.Language.getText(5080, "")); // No Pedir Confirmar al Imprimir
        elem.setKey(K_NO_ASK_IN_PRINT);
        elem.setValue(Cairo.Util.boolToInt(m_noAskInPrint));
        elem.setTabIndex(TAB_VENTAS);

        var elem = properties.add(null, ESTADO_HOJA_RUTA);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.ESTADOS);
        elem.setName(Cairo.Language.getText(4549, "")); // Estado en hojas de ruta
        elem.setKey(K_ESTADO_EN_HOJA_RUTA);
        elem.setSelectId(val(m_estIdHojaRuta));
        elem.setSelectIntValue(m_estIdHojaRuta);
        elem.setValue(m_estadoHojaRuta);
        elem.setTabIndex(TAB_VENTAS);

        elem.setSelectType(Cairo.Select.SelectType.tree);
        elem.setIsEditProperty(false);

        //
        // treasury
        //

        var elem = properties.add(null, DOC_MF);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_MF);
        elem.setKey(K_DOC_ID_MF);
        elem.setSelectId(m_docIdMf);
        elem.setSelectFilter("'doctId = 26'");
        elem.setValue(m_docMfNombre);
        elem.setTabIndex(TAB_TESORERIA);

        var elem = properties.add(null, DOC_DBCO);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_DBCO);
        elem.setKey(K_DOC_ID_DBCO);
        elem.setSelectId(m_docIdDbco);
        elem.setSelectFilter("'doctId = 17'");
        elem.setValue(m_docDbcoNombre);
        elem.setTabIndex(TAB_TESORERIA);

        var elem = properties.add(null, DEBE_HABER_MF);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(DEBE_HABER_MF);
        elem.setKey(K_DEBE_HABER_MF);
        elem.setValue(m_debeHaberMf);
        elem.setTabIndex(TAB_TESORERIA);

        //
        // services
        //

        var elem = properties.add(null, DOC_OS);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_OS);
        elem.setKey(K_DOC_ID_OS);
        elem.setSelectId(m_docIdOs);
        elem.setSelectFilter("'doctId = 42'");
        elem.setValue(m_docOSNombre);
        elem.setTabIndex(TAB_SERVICIOS);

        var elem = properties.add(null, DOC_PRP);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_PRP);
        elem.setKey(K_DOC_ID_PRP);
        elem.setSelectId(m_docIdPrp);
        elem.setSelectFilter("'doctId = 43'");
        elem.setValue(m_docPRPNombre);
        elem.setTabIndex(TAB_SERVICIOS);

        var elem = properties.add(null, PTD_FECHA);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(PTD_FECHA);
        elem.setKey(K_PTD_FECHAINI);
        elem.setValue(Cairo.Util.boolToInt(m_ptdFecha));
        elem.setTabIndex(TAB_SERVICIOS);

        var elem = properties.add(null, PRP_ESTADO_X_DEF);
        elem.setType(Dialogs.PropertyType.check);
        elem.setName(Cairo.Language.getText(3918, "")); // Estado Default en Parte Reparacion
        elem.setKey(K_PARTE_REPARACION_ESTADO_DEFAULT);
        elem.setValue(Cairo.Util.boolToInt(m_PrpEstadoDef));
        elem.setTabIndex(TAB_SERVICIOS);

        //
        // personal
        //
        
        var elem = properties.add(null, DOC_LIQ);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_LIQ);
        elem.setKey(K_DOC_ID_LIQ);
        elem.setSelectId(m_docIdLiq);
        elem.setSelectFilter("'doctId = 47'");
        elem.setValue(m_docLiqNombre);
        elem.setTabIndex(TAB_PERSONAL);

        //
        // picking
        //

        var elem = properties.add(null, PKL_DOC_FACTURA);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(PKL_DOC_FACTURA);
        elem.setKey(K_PICKINLIST_DOC_ID_FACTURA);
        elem.setSelectId(m_pklDocIdFactura);
        elem.setSelectFilter("'doctId = 1'");
        elem.setValue(m_pklDocFactura);
        elem.setTabIndex(TAB_DESPACHO);

        var elem = properties.add(null, PKL_DOC_INTERNO);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(PKL_DOC_INTERNO);
        elem.setKey(K_PICKINLIST_DOC_ID_INTERNO);
        elem.setSelectId(m_pklDocIdInterno);
        elem.setSelectFilter("'doctId = 1'");
        elem.setValue(m_pklDocInterno);
        elem.setTabIndex(TAB_DESPACHO);

        var elem = properties.add(null, ESTADO_PICKING_LIST);
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.ESTADOS);
        elem.setName(Cairo.Language.getText(4861, "")); // Estado en picking list
        elem.setKey(K_ESTADO_EN_PICKING_LIST);
        elem.setSelectId(val(m_estIdPickinglist));
        elem.setSelectIntValue(m_estIdPickinglist);
        elem.setValue(m_estadoPickingList);
        elem.setTabIndex(TAB_DESPACHO);

        elem.setSelectType(Cairo.Select.SelectType.tree);
        elem.setIsEditProperty(false);

        var elem = properties.add(null, DOC_RV_C + "v");
        elem.setType(Dialogs.PropertyType.select);
        elem.setSelectTable(Cairo.Tables.DOCUMENTO);
        elem.setName(DOC_RV_C);
        elem.setKey(K_DOC_ID_RV_C);
        elem.setSelectId(m_docIdRvC);
        elem.setSelectFilter("'doctId = 24'");
        elem.setValue(m_docRvNombreC);
        elem.setTabIndex(TAB_CANCELACION);

        if(!m_dialog.show(self)) { return false; }

        return true;
      };

      var refreshCollection = function() {

        var properties = m_dialog.getProperties();

        var elem = properties.item(DESKTOP);
        elem.setValue(m_desktop);

        var elem = properties.item(LENGUAJE);
        elem.setSelectId(m_lengId);
        elem.setValue(m_lengName);

        var elem = properties.item(AUTO_SIZE_COLS);
        elem.setValue(Cairo.Util.boolToInt(m_autoSizeCols));

        var elem = properties.item(MULTI_SELECT);
        elem.setValue(Cairo.Util.boolToInt(m_multiSelect));

        var elem = properties.item(USE_PRINTER_SIZE);
        elem.setValue(Cairo.Util.boolToInt(m_usePrinterSize));

        var elem = properties.item(VIEW_NAMES_IN_TOOLBAR);
        elem.setValue(Cairo.Util.boolToInt(m_viewNamesInToolbar));

        var elem = properties.item(SHOW_SAVE_AS);
        elem.setValue(Cairo.Util.boolToInt(m_showSaveAs));

        var elem = properties.item(SHOW_ALL_IN_WIZARD);
        elem.setValue(Cairo.Util.boolToInt(m_showAllInWizard));

        var elem = properties.item(FOLDER_TO_EXPORT_PDF);
        elem.setValue(m_folderToExportPDF);

        var elem = properties.item(USAR_COLORES_EN_DOC);
        elem.setValue(m_usarColoresEnDocumentos);

        var elem = properties.item(COLOR_EN_EMPRESA);
        elem.setValue(m_colorEnEmpresa);

        var elem = properties.item(DOC_PC);
        elem.setSelectId(m_docIdPc);
        elem.setValue(m_docPcNombre);

        var elem = properties.item(DOC_PREC);
        elem.setSelectId(m_docIdPrec);
        elem.setValue(m_docPrecNombre);

        var elem = properties.item(DOC_COT);
        elem.setSelectId(m_docIdCot);
        elem.setValue(m_docCotNombre);

        var elem = properties.item(DOC_OC);
        elem.setSelectId(m_docIdOc);
        elem.setValue(m_docOcNombre);

        var elem = properties.item(DOC_RC);
        elem.setSelectId(m_docIdRc);
        elem.setValue(m_docRcNombre);

        var elem = properties.item(DOC_FC);
        elem.setSelectId(m_docIdFc);
        elem.setValue(m_docFcNombre);

        var elem = properties.item(SHOW_DATA_ADD_IN_COMPRAS);
        elem.setValue(Cairo.Util.boolToInt(m_showDataAddInCompras));

        var elem = properties.item(DEPOSITO);
        elem.setSelectId(m_deplId);
        elem.setValue(m_deplNombre);

        var elem = properties.item(DEPOSITO_SRV);
        elem.setSelectId(m_deplIdSrv);
        elem.setValue(m_deplNombreSrv);

        var elem = properties.item(INFORMAR_ANTICIPOS);
        elem.setValue(Cairo.Util.boolToInt(m_informarAnticipos));

        var elem = properties.item(DOC_PREV + "v");
        elem.setSelectId(m_docIdPrev);
        elem.setValue(m_docPrevNombre);

        var elem = properties.item(DOC_PV + "v");
        elem.setSelectId(m_docIdPv);
        elem.setValue(m_docPvNombre);

        var elem = properties.item(DOC_RV + "v");
        elem.setSelectId(m_docIdRv);
        elem.setValue(m_docRvNombre);

        var elem = properties.item(DOC_FV + "v");
        elem.setSelectId(m_docIdFv);
        elem.setValue(m_docFvNombre);

        var elem = properties.item(DOC_COBZ);
        elem.setSelectId(m_docIdCobz);
        elem.setValue(m_docCobzNombre);

        var elem = properties.item(SHOW_BARCODE_INPUT_CTRLS);
        elem.setValue(Cairo.Util.boolToInt(m_showBarcodeInputCtrls));

        var elem = properties.item(CUENTA_FVO_X_DEFECTO);
        elem.setSelectId(m_cueIdFvoXDefecto);
        elem.setValue(m_cuentaFvoXDefecto);

        var elem = properties.item(CLIENTE_X_DEFECTO);
        elem.setSelectId(m_cliIdXDefecto);
        elem.setValue(m_clienteXDefecto);

        var elem = properties.item(NUEVO_AL_GRABAR);
        elem.setValue(Cairo.Util.boolToInt(m_nuevoAlGrabar));

        var elem = properties.item(PRINT_IN_NEW_FV);
        elem.setValue(Cairo.Util.boolToInt(m_printInNewFV));

        var elem = properties.item(PRINT_IN_NEW_COBZ_CDO);
        elem.setValue(Cairo.Util.boolToInt(m_printInNewCobzCdo));

        var elem = properties.item(NUEVO_PTD_AL_GRABAR);
        elem.setValue(Cairo.Util.boolToInt(m_nuevoPtdAlGrabar));

        var elem = properties.item(SHOW_DATA_ADD_IN_VENTAS);
        elem.setValue(Cairo.Util.boolToInt(m_showDataAddInVentas));

        var elem = properties.item(CLOSE_WIZARD);
        elem.setValue(Cairo.Util.boolToInt(m_closeWizard));

        var elem = properties.item(NO_ASK_IN_PRINT);
        elem.setValue(Cairo.Util.boolToInt(m_noAskInPrint));

        var elem = properties.item(DOC_MF);
        elem.setSelectId(m_docIdMf);
        elem.setValue(m_docMfNombre);

        var elem = properties.item(DOC_DBCO);
        elem.setSelectId(m_docIdDbco);
        elem.setValue(m_docDbcoNombre);

        var elem = properties.item(DEBE_HABER_MF);
        elem.setValue(m_debeHaberMf);

        var elem = properties.item(DOC_OS);
        elem.setSelectId(m_docIdOs);
        elem.setValue(m_docOSNombre);

        var elem = properties.item(DOC_PRP);
        elem.setSelectId(m_docIdPrp);
        elem.setValue(m_docPRPNombre);

        var elem = properties.item(PTD_FECHA);
        elem.setValue(Cairo.Util.boolToInt(m_ptdFecha));

        var elem = properties.item(PRP_ESTADO_X_DEF);
        elem.setValue(Cairo.Util.boolToInt(m_PrpEstadoDef));

        var elem = properties.item(DOC_LIQ);
        elem.setSelectId(m_docIdLiq);
        elem.setValue(m_docLiqNombre);

        var elem = properties.item(PKL_DOC_FACTURA);
        elem.setSelectId(m_pklDocIdFactura);
        elem.setValue(m_pklDocFactura);

        var elem = properties.item(PKL_DOC_INTERNO);
        elem.setSelectId(m_pklDocIdInterno);
        elem.setValue(m_pklDocInterno);

        var elem = properties.item(DOC_RV_C + "v");
        elem.setSelectId(m_docIdRvC);
        elem.setValue(m_docRvNombreC);

        return m_dialog.showValues(properties);
      };

      var ck = function(key,  iModule) {

        switch (iModule) {
          case ucs.purchases:
            key = key + " Cpra_" + m_userId;
            break;

          case ucs.stock:
            key = key + "_" + m_userId;
            break;

          case ucs.sales:
            key = key + " Vta_" + m_userId;
            break;

          case ucs.general:
            key = key + " Gral_" + m_userId;
            break;

          case ucs.treasury:
            key = key + " Tsr_" + m_userId;
            break;

          case ucs.services:
            key = key + " Srv_" + m_userId;
            break;
        }
        return key;
      };

      var initialize = function() {

      };

      var destroy = function() {
        m_dialog = null;
        m_listController = null;
      };

      self.terminate = function() {
        m_editing = false;

        try {
          if(m_listController !== null) {
            m_listController.removeEditor(self);
          }
        }
        catch(ex) {
          Cairo.manageErrorEx(ex.message, "terminate", C_MODULE, "");
        }

        try {
          destroy();
        }
        catch(ex) {
          Cairo.manageErrorEx(ex.message, "terminate", C_MODULE, "");
        }
      };

      return self;
    };

    var showEditor = function() {
      var editor = Cairo.UsuarioConfig.Edit.Controller.getEditor();
      var dialog = Cairo.Dialogs.Views.Controller.newDialog();

      editor.setDialog(dialog);
      editor.edit(Cairo.User.getId());
    };

    Edit.Controller = { getEditor: createObject, edit: showEditor };

  });

  Cairo.module("UsuarioConfig.List", function(List, Cairo, Backbone, Marionette, $, _) {
    List.Controller = {
      list: function() {

        var self = this;

        /*
         this function will be called by the tab manager every time the
         view must be created. when the tab is not visible the tab manager
         will not call this function but only make the tab visible
         */
        var createTreeDialog = function(tabId) {

          var editors = Cairo.Editors.usuarioConfigEditors || Cairo.Collections.createCollection(null);
          Cairo.Editors.usuarioConfigEditors = editors;

          // ListController properties and methods
          //
          self.entityInfo = new Backbone.Model({
            entitiesTitle: "User Settings",
            entityName: "user settings",
            entitiesName: "users settings"
          });

          self.showBranch = function(branchId) {
            Cairo.log("Loading nodeId: " + branchId);
            Cairo.Tree.List.Controller.listBranch(branchId, Cairo.Tree.List.Controller.showItems, self);
          };

          self.addLeave = function(id, branchId) {
            try {
              Cairo.Tree.List.Controller.addLeave(branchId, id, self);
            }
            catch(ignore) {
              Cairo.log("Error when adding this item to the branch\n\n" + ignore.message);
            }
          };

          self.refreshBranch = function(id, branchId) {
            try {
              Cairo.Tree.List.Controller.refreshBranchIfActive(branchId, id, self);
            }
            catch(ignore) {
              Cairo.log("Error when refreshing a branch\n\n" + ignore.message);
            }
          };

          var getIndexFromEditor = function(editor) {
            var count = editors.count();
            for(var i = 0; i < count; i += 1) {
              if(editors.item(i).editor === editor) {
                return i;
              }
            }
            return -1;
          };

          self.removeEditor = function(editor) {
            var index = getIndexFromEditor(editor);
            if(index >= 0) {
              editors.remove(index);
            }
          };

          var getKey = function(id) {
            if(id === Cairo.Constants.NO_ID) {
              return "new-id:" + (new Date).getTime().toString()
            }
            else {
              return "k:" + id.toString();
            }
          };

          self.updateEditorKey = function(editor, newId) {
            var index = getIndexFromEditor(editor);
            if(index >= 0) {
              var editor = editors.item(index);
              editors.remove(index);
              var key = getKey(newId);
              editors.add(editor, key);
            }
          };

          self.edit = function(id, treeId, branchId) {
            var key = getKey(id);
            if(editors.contains(key)) {
              editors.item(key).dialog.showDialog();
            }
            else {
              var editor = Cairo.UsuarioConfig.Edit.Controller.getEditor();
              var dialog = Cairo.Dialogs.Views.Controller.newDialog();

              editor.setDialog(dialog);
              editor.edit(id);

              editors.add({editor: editor, dialog: dialog}, key);
            }
          };

          self.destroy = function(id, treeId, branchId) {

          };

          // progress message
          //
          Cairo.LoadingMessage.show("UsuarioConfigs", "Loading User Settings from CrowSoft Cairo server.");

          // create the tree region
          //
          Cairo.addRegions({ usuarioConfigTreeRegion: tabId });

          // create the dialog
          //
          Cairo.Tree.List.Controller.list(
            Cairo.Tables.USUARIO,
            new Cairo.Tree.List.TreeLayout({ model: self.entityInfo }),
            Cairo.usuarioConfigTreeRegion,
            self);

        };

        var showTreeDialog = function() {
          Cairo.Tree.List.Controller.showTreeDialog(self);
        };

        var closeTreeDialog = function() {

        }

        // create the tab
        //
        Cairo.mainTab.showTab("UsuarioConfigs", "usuarioConfigTreeRegion", "#general/usuarioconfigs", createTreeDialog, closeTreeDialog, showTreeDialog);

      }
    };
  });

  var createUserConfig = function() {
    var userConfig = Cairo.UsuarioConfig.Edit.Controller.getEditor();
    userConfig.load(Cairo.User.getId());
    return userConfig;
  };

  Cairo.UserConfig = createUserConfig();

}());