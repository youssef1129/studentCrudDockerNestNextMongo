import axiosUri from "@/functions/axiosUri";
import { Istudent } from "@/interfaces/Istudent";

export const getData = async (p = 0) => {
  const res = await axiosUri.get(`?p=${p}`);
  return (await res.data) as Array<Istudent>;
};
export const deleteStudent = async (id: string) => {
  await axiosUri.delete("?id=" + id);
};

export const addStudent = async (student: Istudent) => {
  await axiosUri.post("", student);
};

export const updateStudent = async (id: string, student: Istudent) => {
  await axiosUri.put("?id=" + id, student);
};

export const getCountStudents = async () => {
  return await (
    await axiosUri.get("count/students")
  ).data;
};

export const getStudent = async (id: string) => {
  return await (await axiosUri.get(id)).data as Istudent
};
