'use server'

import { supabase } from '../../../../../lib/supabaseClient'

export async function getTonalidadesAction() {
  const { data, error } = await supabase
    .from('tbl_tonalidades')
    .select('*')

  if (error) {
    console.error('Error al obtener tonalidades:', error.message)
    return []
  }

  return data
}