import admin, { initializeApp, ServiceAccount } from "firebase-admin";
import { Firestore, getFirestore } from "firebase-admin/firestore";
import { getApps } from "firebase/app";
import { FirebaseStorage, getStorage } from "firebase/storage";

const serviceAccount = {
    "type": "service_account",
    "project_id": "fir-test-581dd",
    "private_key_id": "ca053848e781d60369126c16d484be2e11669679",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCp3uy5j5pJMpiF\nrE10vge37pY4X5c9MDfefKd+5kPfgJfMaVmufkw4N/Qfo8Q9wLhuZh4K+AaoT/SB\nvfrCDMZxhut5KQE/mjdTnrWagDw54438nT4eJyVK9R0t7+bWJKMjL3YrySCVSUnF\n0uK3W+tfaWxsVc0Kp4Z3lppNEcdWLiFxMShwoWUzMKNxnFlqOxbifzVVbVcS9bcs\nc9d2t6DRRqkPVMVNFruMB9ZDr2NX1Q42Tj1XlS0Yu+IHVLafLvt7UawFis6Zgc3y\n+kzZL13MnjjtdXGfTV9ViXQsbXEdVUY52iv8mqEFLlx6Vvv2/V2prBMltz/7UYX4\n92ScuB8NAgMBAAECggEAHf6S5iEJKSuZ6uCFvLthOYUTWVjnp5JACzUPjkSyb2CR\nbTKc90atxq96l6ufFxhUeInnfCBXbJjRn6cgA+uljp44Leijo8tjQYygnGtQNxiL\nFbPeKAzZdObbBCV8KQvHEotq3khhTHroX9ng1meQpARFdMuhrOPvxmX9UOZ2wCyT\nWkLZQURHen016exPrBMecY+j6EIEVFzpNniMXpTmBs5872fILTB/DCJ+wIZIGgsV\nFuovKjUXPHe9ELs2xYuoLvgrqhi6mFjDpi5dcVGQ0GYw0XvwG3b5n8IIpFjKVaY/\ndg64eV5fn8SrV9WfzLmUNw3qxDmUMkLzB7iswtf3MQKBgQDaW00xjnVKzLKDgO8a\nsWSpUFdpa6WIrl+BKi4swH3atC4LWyCqZjtkJIoswg9UFUlfOSmy0NxgB4xl5a+4\n7A1nYWQog6uM1LFpFRwCuxRIzn4aMykU0h48/BaYcqB+/Tdpn1DRCGycLx7gZ8wi\nZdqyD1bfVgq930t4SbpVqTLeGwKBgQDHJ84eQjzmTqx7/QQbOq2qymN+k19JhIEG\n8jdyGQpUf+1wWv2ELsiqN2gvDwIuOVxcYk1gktbbA5Su01M83Uly8rgYpn9++s6J\nK7HJo03qkBEMxYUMjgXfvrAsMtKMwEUJuf2TDd4AoTnNYhKwdLMnHsEehsA7aPCc\nRTwTCEyp9wKBgQC6+W9SPgAlur4paOBVZQ0jBk6zUKAAOABDpBDB9VpPSfYbdz6z\narL0f21qAgoKH+giB9qy6bGq8QvBvToJCOg5W+Xd41GkWARKTO8dT4CBD4Bfguts\njreh1OKsS4su8jje0rLrK2GFI7w2v+rGkZ0A1621tAGisG/5YniSHT4XfQKBgG9D\nd85D504sCgVDN/YWdEwEwk1G/GdQVd2RmRRvlOvchMTOsPAWSxl91wDje65jcYxT\nhzM7FjpJ59k8Szan0o8bt2peKsDAUn8kIDGswK0ZS8081LZM6k80c6xdwG/OQ0PJ\n2zc6+hqT+H0cG6DlselbLz1kvyTx3esQax2e92XFAoGBAJ6n4CxpBcLCElFB8rrH\nLCFEnZuHdzALNdLnpvu+OVHNKmwwfJPJwIwHnZupMfJDucF2prjqE5YrV/Olvult\n9fjAkBw6ZVJLL0S3D4pVZ13j515QboFPPffFAnxMq7B04x6kjZy6MBZmxQZh66Wz\ng7zbdK1aAwIjCJWl68Aka9qm\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-fbsvc@fir-test-581dd.iam.gserviceaccount.com",
    "client_id": "102680817027129972597",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40fir-test-581dd.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  
const currentApps = getApps()

let firebase: Firestore;

if(!currentApps.length){
  const app = initializeApp({
    credential : admin.credential.cert(serviceAccount as ServiceAccount)
  });
  firebase = getFirestore(app)
}else{
  const app = currentApps[0]
  firebase = getFirestore(app)
}

export {firebase};