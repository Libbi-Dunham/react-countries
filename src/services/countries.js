import { checkError, client } from './client';

export async function countries() {
  const response = await client.from('countries').select();
  return checkError(response);
}
