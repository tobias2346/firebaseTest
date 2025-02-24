'use client'
import React, { useEffect, useState } from 'react'
import { getCookie } from '@/app/components/actions'

const Cliente = () => {

    const [cook, setCook] = useState<string | undefined>(undefined)

    const fetchData = async () => {
        const cookie = await getCookie('Cookie1')
        setCook(cookie)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>{cook ? 'Cookie obtenida en cliente' : 'cookie no obtenida en cliente'}</div>
    )
}

export default Cliente