import React, { useState, useEffect, FormEvent } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getData } from '@/services/student.service';
import { useRouter } from 'next/navigation';
export const SearchComp = () => {

  const [stds, setStds] = useState<any>([])
  const [inputValue, setInputValue] = useState('');
  const [val, setVal] = useState<any>();

  const router = useRouter();

  const getStudents = async () => {
    const s = await (await getData()).map((s) => {
      return { label: s.firstName + ' ' + s.lastName, id: s._id }
    })
    setStds(s)
  }

  useEffect(() => {
    getStudents()
  }, [])


  const OnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const s = stds.find((s: any) => s.label == inputValue)

    router.push(`/Student/${s.id}`)
  }

  return (
    <form onSubmit={OnSubmit}>
      <Autocomplete
        onChange={(event: any, newValue: string | null) => {
          setVal(newValue);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        inputValue={inputValue}
        disablePortal
        id="combo-box-demo"
        value={val || null}
        options={stds}
        sx={{ width: 300 }}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.id}>
              {option.label}
            </li>
          );
        }}
        renderInput={(params) => <TextField required {...params} label="students" />}
      />
    </form>
  )
}
