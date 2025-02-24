'use client'
import React, { useEffect } from 'react'
import { setCookieE } from '../components/actions'

const page = () => {

  const fetchData = async () => await setCookieE('Cookie2', 'cookieCreadaEnComponenteClienteConExpiracion')
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>Coookie seteada en cliente con expiracion, viaja a S</div>
  )
}

export default page