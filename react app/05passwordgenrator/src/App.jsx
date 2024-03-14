import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] = useState(false)
  const [character, setcharacter] = useState(false)
  const [Password,setpassword] = useState("")

  const PasswordGenerator =useCallback(() =>{
    let pass =""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str +="0123456789"
    if(character) str+="!@#$%^&*()"

    for (let i = 1; i <= array.length; i++) {

      let char =Math.floor(Math.random()*str.length+1)
      pass=str.charAt(char)
      
    }
    setpassword(pass)

  },[length,number,character,setpassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-12 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center'>Password Generator</h1>
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">

          <input type="text" 
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          />
          <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

        </div>
      </div>
    </>
  )
}

export default App
