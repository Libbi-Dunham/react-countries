import { checkError, client } from './client';

export async function getCountries(sort) {
  const params = new URLSearchParams();
  params.set('direction', sort);
  const response = await client.from('countries').select();
  return checkError(response);
}
