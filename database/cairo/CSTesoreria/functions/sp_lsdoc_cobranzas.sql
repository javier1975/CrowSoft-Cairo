/*
CrowSoft-Cairo
==============

ERP application written in Scala Play Framework and Postgresql

Copyright (C) 2012  Javier Mariano Alvarez

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS for A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

========================================================================

Created by Javier

http://www.crowsoft.com.ar

javier at crowsoft.com.ar
*/
-- Function: sp_lsdoc_cobranzas()

-- drop function sp_lsdoc_cobranzas(integer, date, date, varchar, varchar, varchar, varchar, varchar, varchar, varchar);

create or replace function sp_lsdoc_cobranzas
/*
 select * from Cobranza

 select * from sp_lsdoc_cobranzas(
     1,
     '20000101'::date,
     '20150101'::date,
     '0',
     '0',
     '0',
     '0',
     '0',
     '0',
     '0');
 fetch all from rtn;
*/
(
  in p_us_id integer,
  in p_Fini date,
  in p_Ffin date,
  in p_cli_id varchar,
  in p_est_id varchar,
  in p_ccos_id varchar,
  in p_suc_id varchar,
  in p_cob_id varchar,  
  in p_doc_id varchar,
  in p_emp_id varchar,
  out rtn refcursor
)
  returns refcursor as
$BODY$
declare
   v_cli_id integer;
   v_ccos_id integer;
   v_suc_id integer;
   v_est_id integer;
   v_cob_id integer;
   v_doc_id integer;
   v_emp_id integer;
   v_ram_id_Cliente integer;
   v_ram_id_CentroCosto integer;
   v_ram_id_Sucursal integer;
   v_ram_id_Estado integer;
   v_ram_id_Cobrador integer;
   v_ram_id_Documento integer;
   v_ram_id_CondicionPago integer;
   v_ram_id_Empresa integer;
   v_clienteID integer;
   v_IsRaiz smallint;
begin

/*debug
p_us_id := 1;
p_Fini := '20000101'::date;
p_Ffin := '20150101'::date;
p_prov_id := '0';
p_est_id := '0';
p_ccos_id := '0';
p_suc_id := '0';
p_doc_id := '0';
p_cobz_id := '0';
p_emp_id := '0';
end debug*/

   rtn := 'rtn';

   /*- ///////////////////////////////////////////////////////////////////////
    INICIO PRIMERA PARTE DE ARBOLES
   /////////////////////////////////////////////////////////////////////// */

   select * from sp_ArbConvertId(p_cli_id) into v_cli_id, v_ram_id_Cliente;

   select * from sp_ArbConvertId(p_ccos_id) into v_ccos_id, v_ram_id_CentroCosto;

   select * from sp_ArbConvertId(p_suc_id) into v_suc_id, v_ram_id_Sucursal;

   select * from sp_ArbConvertId(p_est_id) into v_est_id, v_ram_id_Estado;

   select * from sp_ArbConvertId(p_cob_id) into v_cob_id, v_ram_id_Cobrador;

   select * from sp_ArbConvertId(p_doc_id) into v_doc_id, v_ram_id_Documento;

   select * from sp_ArbConvertId(p_emp_id) into v_emp_id, v_ram_id_empresa;

   select * from  sp_GetRptId() into v_clienteID;

   if v_ram_id_Cliente <> 0 then
   begin
      --	exec sp_ArbGetGroups @ram_id_Cliente, @clienteID, @@us_id
      select sp_ArbIsRaiz(v_ram_id_Cliente) into v_IsRaiz;

      if v_IsRaiz = 0 then
      begin
         perform sp_ArbGetAllHojas(v_ram_id_Cliente,
                           v_clienteID);

      end;
      else
         v_ram_id_Cliente := 0;

      end if;

   end;
   end if;

   if v_ram_id_CentroCosto <> 0 then
   begin
      --	exec sp_ArbGetGroups @ram_id_CentroCosto, @clienteID, @@us_id
      select sp_ArbIsRaiz(v_ram_id_CentroCosto) into v_IsRaiz;

      if v_IsRaiz = 0 then
      begin
         perform sp_ArbGetAllHojas(v_ram_id_CentroCosto,
                           v_clienteID);

      end;
      else
         v_ram_id_CentroCosto := 0;

      end if;

   end;
   end if;

   if v_ram_id_Estado <> 0 then
   begin
      --	exec sp_ArbGetGroups @ram_id_Estado, @clienteID, @@us_id
      select sp_ArbIsRaiz(v_ram_id_Estado) into v_IsRaiz;

      if v_IsRaiz = 0 then
      begin
         perform sp_ArbGetAllHojas(v_ram_id_Estado,
                           v_clienteID);

      end;
      else
         v_ram_id_Estado := 0;

      end if;

   end;
   end if;

   if v_ram_id_Sucursal <> 0 then
   begin
      --	exec sp_ArbGetGroups @ram_id_Sucursal, @clienteID, @@us_id
      select sp_ArbIsRaiz(v_ram_id_Sucursal) into v_IsRaiz;

      if v_IsRaiz = 0 then
      begin
         perform sp_ArbGetAllHojas(v_ram_id_Sucursal,
                           v_clienteID);

      end;
      else
         v_ram_id_Sucursal := 0;

      end if;

   end;
   end if;

   if v_ram_id_Cobrador <> 0 then
   begin
      --	exec sp_ArbGetGroups @ram_id_Cobrador, @clienteID, @@us_id
      select sp_ArbIsRaiz(v_ram_id_Cobrador) into v_IsRaiz;

      if v_IsRaiz = 0 then
      begin
         perform sp_ArbGetAllHojas(v_ram_id_Cobrador,
                           v_clienteID);

      end;
      else
         v_ram_id_Cobrador := 0;

      end if;

   end;
   end if;

   if v_ram_id_Documento <> 0 then
   begin
      --	exec sp_ArbGetGroups @ram_id_Documento, @clienteID, @@us_id
      select sp_ArbIsRaiz(v_ram_id_Documento) into v_IsRaiz;

      if v_IsRaiz = 0 then
      begin
         perform sp_ArbGetAllHojas(v_ram_id_Documento,
                           v_clienteID);

      end;
      else
         v_ram_id_Documento := 0;

      end if;

   end;
   end if;

   if v_ram_id_CondicionPago <> 0 then
   begin
      --	exec sp_ArbGetGroups @ram_id_CondicionPago, @clienteID, @@us_id
      select sp_ArbIsRaiz(v_ram_id_CondicionPago) into v_IsRaiz;

      if v_IsRaiz = 0 then
      begin
         perform sp_ArbGetAllHojas(v_ram_id_CondicionPago,
                           v_clienteID);

      end;
      else
         v_ram_id_CondicionPago := 0;

      end if;

   end;
   end if;

   if v_ram_id_empresa <> 0 then
   begin
      --	exec sp_ArbGetGroups @ram_id_empresa, @clienteID, @@us_id
      select sp_ArbIsRaiz(v_ram_id_empresa) into v_IsRaiz;

      if v_IsRaiz = 0 then
      begin
         perform sp_ArbGetAllHojas(v_ram_id_empresa,
                           v_clienteID);

      end;
      else
         v_ram_id_empresa := 0;

      end if;

   end;
   end if;

   /*- ///////////////////////////////////////////////////////////////////////
    FIN PRIMERA PARTE DE ARBOLES
   /////////////////////////////////////////////////////////////////////// */

   open rtn for

      select cobz_id,
             '' TypeTask,
             cobz_numero as "Número",
             cobz_nrodoc Comprobante,
             cli_nombre Cliente,
             doc_nombre Documento,
             est_nombre Estado,
             cobz_fecha Fecha,
             cobz_neto Neto,
             cobz_total Total,
             cobz_pendiente Pendiente,
             case cobz_firmado
                when 0 then 'No'
                else 'Si'
             end Firmado,
             ccos_nombre Centro_de_costo,
             suc_nombre Sucursal,
             emp_nombre Empresa,
             Cobranza.creado,
             Cobranza.modificado,
             us_nombre Modifico,
             cobz_descrip Observaciones
      from Cobranza
      join Documento
       on Cobranza.doc_id = Documento.doc_id
      join Empresa
       on Documento.emp_id = Empresa.emp_id
      join Estado
       on Cobranza.est_id = Estado.est_id
      join Sucursal
       on Cobranza.suc_id = Sucursal.suc_id
      join Cliente
       on Cobranza.cli_id = Cliente.cli_id
      join Usuario
       on Cobranza.modifico = Usuario.us_id
      left join Cobrador
       on Cobranza.cob_id = Cobrador.cob_id
      left join CentroCosto
       on Cobranza.ccos_id = CentroCosto.ccos_id
      where p_Fini <= cobz_fecha
        and p_Ffin >= cobz_fecha

      /* -///////////////////////////////////////////////////////////////////////
      INICIO SEGUNDA PARTE DE ARBOLES
      /////////////////////////////////////////////////////////////////////// */

        and ( Cliente.cli_id = v_cli_id
        or v_cli_id = 0 )
        and ( Estado.est_id = v_est_id
        or v_est_id = 0 )
        and ( Sucursal.suc_id = v_suc_id
        or v_suc_id = 0 )
        and ( Documento.doc_id = v_doc_id
        or v_doc_id = 0 )
        and ( CentroCosto.ccos_id = v_ccos_id
        or v_ccos_id = 0 )
        and ( Cobrador.cob_id = v_cob_id
        or v_cob_id = 0 )
        and ( Empresa.emp_id = v_emp_id
        or v_emp_id = 0 )
        -- Arboles
        and ( ( exists ( select rptarb_hojaid
                         from rptArbolRamaHoja
                            where rptarb_cliente = v_clienteID
                                    and tbl_id = 28

                                    and rptarb_hojaid = Cliente.cli_id ) )
        or ( v_ram_id_Cliente = 0 ) )
        and ( ( exists ( select rptarb_hojaid
                         from rptArbolRamaHoja
                            where rptarb_cliente = v_clienteID
                                    and tbl_id = 21

                                    and rptarb_hojaid = CentroCosto.ccos_id ) )
        or ( v_ram_id_CentroCosto = 0 ) )
        and ( ( exists ( select rptarb_hojaid
                         from rptArbolRamaHoja
                            where rptarb_cliente = v_clienteID
                                    and tbl_id = 4005

                                    and rptarb_hojaid = Estado.est_id ) )
        or ( v_ram_id_Estado = 0 ) )
        and ( ( exists ( select rptarb_hojaid
                         from rptArbolRamaHoja
                            where rptarb_cliente = v_clienteID
                                    and tbl_id = 1007

                                    and rptarb_hojaid = Sucursal.suc_id ) )
        or ( v_ram_id_Sucursal = 0 ) )
        and ( ( exists ( select rptarb_hojaid
                         from rptArbolRamaHoja
                            where rptarb_cliente = v_clienteID
                                    and tbl_id = 25

                                    and rptarb_hojaid = Cobrador.cob_id ) )
        or ( v_ram_id_Cobrador = 0 ) )
        and ( ( exists ( select rptarb_hojaid
                         from rptArbolRamaHoja
                            where rptarb_cliente = v_clienteID
                                    and tbl_id = 4001

                                    and rptarb_hojaid = Documento.doc_id ) )
        or ( v_ram_id_Documento = 0 ) )
        and ( ( exists ( select rptarb_hojaid
                         from rptArbolRamaHoja
                            where rptarb_cliente = v_clienteID
                                    and tbl_id = 1018

                                    and rptarb_hojaid = Empresa.emp_id ) )
        or ( v_ram_id_empresa = 0 ) )

      order by cobz_fecha;

end;
$BODY$
  language plpgsql volatile
  cost 100;
alter function sp_lsdoc_cobranzas(integer, date, date, varchar, varchar, varchar, varchar, varchar, varchar, varchar)
  owner to postgres;