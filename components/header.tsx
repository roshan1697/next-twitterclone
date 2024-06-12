import React from 'react'
interface headerProps {
    label: string;
    
}
const Header  = ({label}: headerProps) => {
  return (
    <div className="border-b border-neutral-800 p-5">
    <div className="flex flex-row items-center gap-2">
       {/*back arrow */}
        <h1 className="text-white text-xl font-semibold">
            {label}
        </h1>
    </div>
</div>  )
}

export default Header 