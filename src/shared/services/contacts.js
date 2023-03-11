import { instance } from "./auth";



export const getAllContacts = async () => {
  const { data } = await instance.get("/contacts")
  console.log(data);
  return data;
}

export const addContact = async (info) => {
  const { data: result } = await instance.post("/contacts", info);
  console.log(result);
  return result;
}

export const deleteContact = async id => {
  const { data: result } = await instance.delete(`/contacts/${id}`);
  console.log(result);
  return result;
};