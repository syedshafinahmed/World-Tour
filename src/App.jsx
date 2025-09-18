import { Suspense } from 'react'
import './App.css'
import Countries from './assets/Countries/countries'

function App() {
  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
    .then(res => res.json())

  return (
    <>
      <h1>hehei bhaya</h1>
      <Suspense fallback={<p>Countries loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
