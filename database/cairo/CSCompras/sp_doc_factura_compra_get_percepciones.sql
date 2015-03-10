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
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License along
with this program; if not, write to the Free Software Foundation, Inc.,
51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.

========================================================================

Created by Javier

http://www.crowsoft.com.ar

javier at crowsoft.com.ar
*/
-- Function: sp_doc_factura_compra_get_percepciones()

-- DROP FUNCTION sp_doc_factura_compra_get_percepciones(integer);
/*
select * from sp_doc_factura_compra_get_percepciones(1);
fetch all from rtn;
fetch all from rtn_serie;
*/
CREATE OR REPLACE FUNCTION sp_doc_factura_compra_get_percepciones
/*
sp_DocFacCpraGetPercepcionesones 1
*/
(
  IN p_fc_id integer,
  OUT rtn refcursor
)
  RETURNS refcursor AS
$BODY$
BEGIN

   OPEN rtn FOR
      SELECT FacturaCompraPercepcion.*,
             perc_nombre,
             ccos.ccos_nombre
      FROM FacturaCompraPercepcion
        JOIN Percepcion
                ON FacturaCompraPercepcion.perc_id = Percepcion.perc_id
        LEFT JOIN CentroCosto ccos
                ON FacturaCompraPercepcion.ccos_id = ccos.ccos_id
      WHERE fc_id = p_fc_id
      ORDER BY fcperc_orden;

END;
$BODY$
  LANGUAGE plpgsql VOLATILE
  COST 100;
ALTER FUNCTION sp_doc_factura_compra_get_percepciones(integer)
  OWNER TO postgres;