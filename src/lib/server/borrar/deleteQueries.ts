import { db } from '$lib/server/database';
import { articulos } from '$lib/server/database/schema';
import { eq } from 'drizzle-orm';

export async function deleteArticulo(articuloId: number) {
  const deleted = await db.delete(articulos).where(eq(articulos.id, articuloId)).returning();
  return deleted;
}
