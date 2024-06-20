'use client'
const SampleButton = ({label}:string) => {
  return (
    <div><button onClick={()=>{
        alert('hello')
    }}>{label}</button></div>
  )
}

export default SampleButton