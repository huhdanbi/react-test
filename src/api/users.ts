import { axiosInstance } from '@/api/axios';

import { GetListType } from '@/types/UserTypes'; 

export const fetchUsers = async (params?: GetListType) => {

  try {
    const url = params?.q ? `/users/search?q=${params?.q}` : '/users';
    delete params?.q;

    const res = await axiosInstance.get(url, {params});
    return res.data;

  } catch (error) {
    throw error
  }
}