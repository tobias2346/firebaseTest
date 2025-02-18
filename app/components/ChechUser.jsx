'use client'
import { auth } from '@/firebase/client';
import React, { useEffect, useState } from 'react'

const ChechUser = () => {

    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        const unSuscribe = auth.onAuthStateChanged(user => {
            setLoggedUser(user?.displayName || null)
        })

        return () => unSuscribe()
    }, [])

    return (
    <div>
        {
            loggedUser ? loggedUser : 'deslogrado'
        }
    </div>
    )
}

export default ChechUser