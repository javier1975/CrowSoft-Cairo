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
-- Function: sp_doc_orden_compra_set_pendiente()

-- drop function sp_doc_orden_compra_set_pendiente(integer);

create or replace function sp_doc_orden_compra_set_pendiente
(
  in p_oc_id integer
)
  returns void as
$BODY$
declare
   v_oc_pendiente decimal(18,6);
begin

   SET TRANSACTION READ WRITE;

   perform sp_doc_orden_cpra_set_item_pendiente(p_oc_id);

   select sum(oci_pendientefac * (oci_importe / oci_cantidad))
     into v_oc_pendiente
   from OrdenCompraItem
   where oc_id = p_oc_id;

   v_oc_pendiente := coalesce(v_oc_pendiente, 0);

   update OrdenCompra
      set oc_pendiente = round(v_oc_pendiente, 2)
   where oc_id = p_oc_id;

exception
   when others then

   raise exception 'Ha ocurrido un error al actualizar el pendiente del Orden de compra. sp_doc_orden_compra_set_pendiente. %. %.',
                   sqlstate, sqlerrm;

end;
$BODY$
  language plpgsql volatile
  cost 100;
alter function sp_doc_orden_compra_set_pendiente(integer)
  owner to postgres;