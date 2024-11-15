import { redirect } from "@sveltejs/kit"
import type { User } from "$lib/server/database/schema"
import { articulosPorEscritor} from "$lib/server/consultas/selectQueries"
import { deleteArticulo } from "$lib/server/borrar/deleteQueries"


export const load = async ({locals}:{locals:{user:User}})=>{
  if(!locals.user) redirect(302, '/')
  const posts = await articulosPorEscritor(locals.user.id)
  return {
    posts
  }
}


export const actions = {
  eliminar: async ({ request }:{request:Request})=>{
    const formData = await request.formData()
    const id = formData.get('id')
    if(!id || !(typeof id )) return {status: 400, body: 'No se pudo eliminar el articulo'}
    const articulo = await deleteArticulo(Number(id))
    console.log(articulo)
  }
}
