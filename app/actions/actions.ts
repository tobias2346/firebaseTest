"use server"
import { auth, firestore } from "@/firebase/server"
import { cookies } from "next/headers"

export const setToken = async (token: string) => {

  try {
    const verifiedToken = await auth.verifyIdToken(token)

    if (!verifiedToken)
      return 'error'

    const userRecord = await auth.getUser(verifiedToken.uid)

    if (!userRecord)
      return 'error'

    if(userRecord.email === process.env.ADMIN_EMAIL && !userRecord.customClaims?.admin){
      auth.setCustomUserClaims(userRecord.uid, {
        admin: true
      })
    }

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
    const cookie = cookieStore.get(cookieName)
    return cookie?.value;
  } catch (error) {
    return 'error'
  }

}

export const setCookie = async (name: string, value: string) => {

  try {
    const cookieStore = await cookies();
    cookieStore.set(name, value)
  } catch (error) {
    return null
  }

}

export const deleteCookie = async (cookieName: string) => {

  try {
    const cookieStore = await cookies();
    cookieStore.delete(cookieName);
    return 'eliminada'
  } catch (error) {
    return 'error'
  }

}

export const createUserAction = async (email: string, password: string, name: string) => {
  try {
    const create = await firestore.collection('users').add({
      email,
      password,
      name
    })

    return {
      id: create.id
    }

  } catch (error) {
    console.log(error)
    return false
  }
}

export const getUsers = async () => {
  const users = await firestore.collection('users').get()
  const plainUsers = users.docs.map((doc) => doc.data()).map(user => ({
    name: user.name,
    email: user.email,
  }));
  return JSON.stringify(plainUsers)
}

export const deleteUser = async (email: string) => {
  try {
    await firestore.collection('users').doc(email).delete()
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}


export const registerUser = async (email: string, password: string, name: string) => {

  try {
    await auth.createUser({
      email,
      password,
      displayName: name
    })

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
