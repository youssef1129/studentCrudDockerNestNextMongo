'use client'
import { Istudent } from "@/interfaces/Istudent"
import { getStudent } from "@/services/student.service"
import Link from "next/link"
import { useEffect, useState } from 'react'

const page = ({ params, }: { params: { id: string } }) => {

  const [student, setStudent] = useState<Istudent>({ birthday: '', email: '', firstName: '', lastName: '' })

  useEffect(() => {
    const getStud = async () => {
      const std = await getStudent(params.id)
      setStudent(std)
    }
    getStud()
  }, [])

  return (
    <div className="student">
      <Link href="">Back</Link>
      <label>{student.firstName} {student.lastName}</label>
      <label>{student.birthday}</label>
      <label>{student.email}</label>
    </div>
  )
}

export default page
