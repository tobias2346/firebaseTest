'use client'
import React, { useEffect } from 'react'
import { setCookie } from '../components/actions'

const page = () => {

  const fetchData = async () => await setCookie('Cookie1', 'cookieCreadaEnComponenteCliente')
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>Coookie seteada en cliente, viaja a S</div>
  )
}

export default page