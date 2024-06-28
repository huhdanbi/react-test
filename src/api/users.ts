import { axiosInstance } from '@/api/axios';

import { getListType } from '@/types/UserTypes'; 

export const fetchUsers = async (params?: getListType) => {
  try {
    const res = await axiosInstance.get('/users', {params});
    return res.data;

  } catch (error) {
    throw error
  }
}