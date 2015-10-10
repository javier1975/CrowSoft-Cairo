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
-- Function: sp_producto_get_tags()

-- drop function sp_producto_get_tags(integer);

create or replace function sp_producto_get_tags
(
  in p_pr_id integer,
  out rtn refcursor
)
  returns refcursor as
$BODY$
begin

   rtn := 'rtn';

   open rtn for
     select
            t.*,
            pr_nombrecompra,
            rubti_nombre as orden

     from ProductoTag t
     left join Producto pr on pr.pr_id = t.pr_id_tag
     left join RubroTablaItem rubti on pr.rubti_id7 = rubti.rubti_id
     where t.pr_id = p_pr_Id
     order by rubti_descrip;

end;
$BODY$
  language plpgsql volatile
  cost 100;
alter function sp_producto_get_tags(integer)
  owner to postgres;