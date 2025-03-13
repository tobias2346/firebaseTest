'use client'
import React, { useEffect, useState } from 'react'
import { deleteCookie, setToken } from '@/app/actions/actions';
import { auth } from '@/firebase/client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const User = () => {

  const [loggedUser, setLoggedUser] = useState<{ name: string; admin: boolean, picture: string } | null>(null);

  useEffect(() => {
    const unSuscribe = auth.onAuthStateChanged(async (user: any) => {
      if (user) {
        try {
          const tokenResult = await user.getIdTokenResult();
          setLoggedUser({ name: user.displayName, admin: tokenResult.claims.admin, picture: tokenResult.claims.picture })
          await setToken(tokenResult.token)
        } catch (error) {
          console.log(error)
        }
      } else {
        setLoggedUser(null)
        await deleteCookie('session')
      }
    })

    return () => unSuscribe()
  }, [])

  return (
    <div className='text-white flex items-center gap-4'>
      {loggedUser?.admin && <span className='text-green-500 font-bold'>Admin</span>}
      <Avatar>
        <AvatarImage src={loggedUser?.picture} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default User