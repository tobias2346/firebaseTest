"use server"
import { auth } from "@/firebase/server"
import { cookies } from "next/headers"

export const setToken = async (token: string) => {

  try {
    const verifiedToken = await auth.verifyIdToken(token)

    if (!verifiedToken)
      return 'error'

    const cookieStore = await cookies();
    cookieStore.set('session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      expires: new Date('2025-02-25T12:00:00Z')
    })

  } catch (error) {
    console.log(error)
    return 'error'
  }

}

export const getCookie = async (cookieName: string) => {

  try {
    const cookieStore = await cookies();
    const cookie = await cookieStore.get(cookieName)
    return cookie?.value;
  } catch (error) {
    return 'error'
  }

}

export const setCookie = async (name: string, value: string) => {

  try {
    const cookieStore = await cookies();
    await cookieStore.set(name, value)
  } catch (error) {
    return null
  }

}

export const setCookieE = async (name: string, value: string) => {

  try {
    const cookieStore = await cookies();
    await cookieStore.set(name, value, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge : 3600
    }
    )
  } catch (error) {
    return null
  }

}

export const deleteCookie = async (cookieName: string) => {

  try {
    const cookieStore = await cookies();
    await cookieStore.delete(cookieName);
    return 'eliminada'
  } catch (error) {
    return 'error'
  }

}