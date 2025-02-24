import React from 'react'
import { getCookie } from '@/app/components/actions'
import Cliente from './Cliente'

export default async function page() {

  const cookie = await getCookie('Cookie1')

  return (
    <>
      <div>{cookie ? 'Cookie obtenida en server' : 'cookie no obtenida en server'}</div>
      <Cliente />
    </>
  )
}