import { useState, useCallback, useRef, useEffect} from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowd] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");


  //useRef Hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(characterAllowed) str+="~`!@#$%^&*()?+=_-{}[]";

    for(let i=0; i<=length; i++){
      let char = Math.floor(Math.random()*str.length+1)
      // console.log(char)
      password += str.charAt(char)
      // console.log(password)
    }

    setPassword(password)
  },[numberAllowed, characterAllowed,length, setPassword])

const copyPasswordToClipboard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,999);
  window.navigator.clipboard.writeText(password)
},[password]);

useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref= {passwordRef} />
          <button className='px-3 py-0.5 shrink-0 outline-none bg-blue-700 text-white' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" id="numberInput" defaultChecked={numberAllowed} onChange={()=>{
              setNumberAllowd((prev)=>!prev);
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items center gap-x-1">
            <input type="checkbox" defaultChecked={characterAllowed} id="inputCharachter" onChange={()=>{setCharacterAllowed((prev)=>!prev)}} />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
