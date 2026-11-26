import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import Preloader from './components/common/Preloader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <RouterProvider router={router} />
    </>
  )
}

export default App
