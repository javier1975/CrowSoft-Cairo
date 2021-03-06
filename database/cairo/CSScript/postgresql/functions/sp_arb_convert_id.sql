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
-- Function: sp_arbconvertid(character varying)

-- drop function sp_arbconvertid(character varying);

create or replace function sp_arbconvertid(in p_id character varying, out p_hoja_id integer, out p_ram_id integer)
  returns record as
$BODY$
declare
begin

   p_hoja_id := 0;

   p_ram_id := 0;

   if lower(SUBSTR(p_id, 1, 1)) = 'n' then-- esto significa que es un nodo
   
      p_ram_id := to_number(SUBSTR(p_id, 2, LENGTH(p_id) - 1));

   else
      p_hoja_id := to_number(p_id);

   end if;

end;
$BODY$
  language plpgsql volatile
  cost 100;
alter function sp_arbconvertid(character varying)
  owner to postgres;
