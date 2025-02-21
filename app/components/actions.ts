"use server"
import { auth } from "@/firebase/server"
import { cookies } from "next/headers"

export const setToken = async (token: string ) => {

  try { 
    const verifiedToken = await auth.verifyIdToken(token)

    if (!verifiedToken)
      return 'error'

    const cookieStore = await cookies();
    cookieStore.set('session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    })

  } catch (error) {
    console.log(error)
    return 'error'
  }

}

export const getCookie = async ({ cookieName }: { cookieName: string }) => {

  try {
    const cookieStore = await cookies();
    const cookie = await cookieStore.get(cookieName)
    return cookie?.value;
  } catch (error) {
    return 'error'
  }

}

export const deleteCookie = async (cookieName : string) => {

  try {
    const cookieStore = await cookies();
    await cookieStore.delete(cookieName);
    return 'eliminada'
  } catch (error) {
    return 'error'
  }

}