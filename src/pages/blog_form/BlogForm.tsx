import React, { useContext } from 'react'
import { Store } from '../../state/StoreProvider'
import '../../App.css'

const BlogForm = () => {
  const {state} = useContext(Store)
  
  return (
    <div className='main_content'>
      <h1>Blog form</h1>
    </div>
  )
}

export default BlogForm
