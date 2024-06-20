'use client'

import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from "recoil"
import { Toaster } from "react-hot-toast"

const Provider = ({children}:{children:React.ReactNode}) => {
  return (
    <SessionProvider>
        <RecoilRoot>
        <Toaster toastOptions={{
            style:{background: '#333',
                color: '#fff',}
        }}/>
    {children}
        </RecoilRoot>
    </SessionProvider>
  )
}

export default Provider