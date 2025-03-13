import React from 'react'
import CreateUser from './CreateUser'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getUsers } from '../actions/actions'
import DeleteButton from './DeleteButton'

export default async function page() {

  const users = await getUsers();
  const parsedUsers = JSON.parse(users)
  return (
    <div className='text-white flex flex-col items-center justify-center h-auto my-10'>
      <h1 className='text-2xl font-bold'>Cracion de usuario</h1>
      <section className='w-1/2'>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className='text-right'>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {parsedUsers.map((user: {name: string, email: string}) => (
              <TableRow key={user.email}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className='text-right'>
                  <DeleteButton email={user.email} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <CreateUser />
    </div>
  )
}
