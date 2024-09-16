import React from 'react'
import WardrobeContext from '../contexts/WardrobeContext'


const User = () => {

    const {txCompletedCount} = React.useContext(WardrobeContext)
    console.log("userContext: ", txCompletedCount)
    
  return (
    <div>User</div>
  )
}

export default User