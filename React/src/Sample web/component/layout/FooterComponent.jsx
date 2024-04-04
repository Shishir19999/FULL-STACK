import React from 'react'

function FooterComponent() {
  let date=new Date().getFullYear();
  return (
    <div className='mt-5'>
  <p>
    CopyRight &copy; {date} - All rights reserved
  </p> 
     </div>
  )
}

export default FooterComponent
