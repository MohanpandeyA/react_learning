import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setamount] = useState(0)
  const [from, setfrom] =useState('usd')
  const [to, setTo] =useState('inr')
  const [convertedAmount, setConvertedAmount] =useState('')

  const CurrencyInfo =useCurrencyInfo(from)

  const options =Object.keys(CurrencyInfo)

  const swap =()=>{
    setfrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setamount(convertedAmount)
  }

  return (
    <>
      <h1 className='text-3xl bg-orange-400'>Currency Name</h1>
    </>
  )
}

export default App
