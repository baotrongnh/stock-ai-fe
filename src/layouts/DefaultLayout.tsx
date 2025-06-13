import React from 'react'

export default function DefaultLayout({ children }: { children: React.ReactElement }) {
     return (
          <>
               <h1>Header</h1>
               {children}
               <h1>Footer</h1>
          </>
     )
}
