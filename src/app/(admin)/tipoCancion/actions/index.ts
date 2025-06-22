'use server'

import { supabase } from '../../../../../lib/supabaseClient'
import { log } from 'node:console';


/*
!antigua forma de obtener tonalidades
export async function getTonalidadesAction() {
  // Forzar que la función no sea cacheada por Next.js
  // @ts-ignore
  // eslint-disable-next-line
  if (typeof fetch !== 'undefined') {
    // @ts-ignore
    fetch.cache = 'no-store'
  }
  const { data: tbl_tonalidades, error } = await supabase
    .from('tbl_tonalidades')
    .select('*');

  if (error) {
    console.error('Error al obtener tonalidades:', error.message);
    return [];
  }

  return tbl_tonalidades;
}*/


export async function getTiposCancionAction() {
  const res = await fetch(
    'https://eupzkiaqefwxnkkvetol.supabase.co/rest/v1/tbl_tonalidades?select=*&order=id_tonalidad.asc',
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_KEY!}`,
      },
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    console.error('Error al obtener tonalidades:', res.statusText);
    return [];
  }

  const tbl_tonalidades = await res.json();
  return tbl_tonalidades;
}

export async function postTipoCancion( name: string) {
  const { data, error } = await supabase
  .from('tbl_tonalidades')
  .insert([
    { nombre_tono: name, id_grupo: 1  },
  ])
  .select()

  if (error) {
    console.error('Error al obtener tonalidades:', error.message)
    return []
  }

  return data
}

 export async function putTipoCancion( id: number, name: string) {

 const { data, error } = await supabase
   .from('tbl_tonalidades')
   .update({'nombre_tono' : name  })
   .eq('id_tonalidad',Number(id) )
   .select()

   if (error) {
     console.error('Error al obtener tonalidades:', error.message)
     return []
   }

   return data
 }

 export async function deleteTipoCancion( id: number,) {
   await supabase
  .from('tbl_tonalidades')
  .delete()
  .eq('id_tonalidad', id)


 }


//!antigua forma de obtener tonalidades
// export async function putTonalidad(id: number, name: string) {
//   log('putTonalidad recibe', id, name);
//   const res = await fetch(
//     `https://eupzkiaqefwxnkkvetol.supabase.co/rest/v1/tbl_tonalidades?id_tonalidad=eq.${id}`,
//     {
//       method: 'PATCH', // PATCH para update parcial, también puedes usar PUT
//       headers: {
//         apikey: process.env.NEXT_PUBLIC_SUPABASE_KEY!,
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_KEY!}`,
//         'Content-Type': 'application/json',
//         Prefer: 'return=representation', // Para que retorne el registro actualizado
//       },
//       body: JSON.stringify({ nombre_tono: name }),
//       cache: 'no-store',
//     }
//   );

//   const data = await res.json();
//   log('putTonalidad', data, res.status);
//   if (!res.ok) {
//     console.error('Error al actualizar tonalidad:', data);
//     return [];
//   }

//   return data;
// }