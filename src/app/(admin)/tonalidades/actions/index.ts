'use server'

import { supabase } from '../../../../../lib/supabaseClient'


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


export async function getTonalidadesAction() {
  const res = await fetch(
    'https://eupzkiaqefwxnkkvetol.supabase.co/rest/v1/tbl_tonalidades?select=*',
    {
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_KEY!}`,
      },
      cache: 'no-store', // Forzar que no se cachee la respuesta
    }
  );
  console.log('res', res  
  );
  
  if (!res.ok) {
    console.error('Error al obtener tonalidades:', res.statusText);
    return [];
  }

  const tbl_tonalidades = await res.json();
  return tbl_tonalidades;
}
export async function postTonalidadAction( name: string) {
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


