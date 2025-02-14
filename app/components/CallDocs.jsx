"use client"

import React from 'react'

const CallDocs = () => {

  const callDb = async () => {
    const db = firestore.getFirestore()
    let q = ( await db.collection('users').where('name', '!=', '').get()).docs.map(doc => doc.data())

    console.log(q)

    
  }

  return (
    <button type='button' onClick={callDb}>CallDocs</button>
  )
}

export default CallDocs