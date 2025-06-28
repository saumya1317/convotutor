import { Link } from 'lucide-react'
import React from 'react'
const navItems = [
    {label:'Home', href:'/'},
    {label:'Companions', href:'/companions'},
    {label:'My Journey', href:'/my-journey'},
    {label:'Subscription', href:'/subscription'},
]
const Navitem = () => {
  return (
    <nav className='flex item-center gap-4'>
        {navItems.map(({label,href}) =>(
            <Link href={href} key={label}>{label}</Link>
        )
    )}
    </nav>
  )
}

export default Navitem