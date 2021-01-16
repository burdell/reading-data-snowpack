import React from 'react'

import { ReadBooks } from '~/components/ReadBooks'
import { Header } from '~/components/Header'

export function App() {
  return (
    <div>
      <Header />
      <ReadBooks />
    </div>
  )
}
