import React from 'react'
import { Footer, Header } from '../components'

export default function DefaultLayout({ children }: { children: React.ReactElement }) {
     return (
          <>
               <Header />
               {children}
               <Footer />
          </>
     )
}
