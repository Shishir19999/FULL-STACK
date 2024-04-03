import React from 'react'
import Logo from './Logo'

function Header(props) {
  console.log(props);
  return (
    <div>
        <Logo/>

        <h1>{props.logo}</h1>
        <h1>{props.est_date}</h1>
      <h1>Header</h1>
    </div>
  )
}

export default Header
