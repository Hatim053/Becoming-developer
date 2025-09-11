import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useForm} from 'react-hook-form'
import './App.css'

function App() {
const {register , handleSubmit , watch , formState:{errors , isSubmitting}} = useForm()
const onSubmit = (data) => console.log(data)

  return (
    <>
     <form action="" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder='username' {...register('username' , {required:{value : true , message:'this field is required'}})}/>
      {errors.username && <div>{errors.username.message}</div>}
      <br />
      <input type="password" placeholder='password' {...register('password' , {required:{value : true , message : 'this field is required'} , minLength:{value : 3 , message:"min-lenght is 3"} , maxLength:{value:8 , message : 'max-length is 8'}})}/>
      {errors.password && <div>{errors.password.message}</div>}
      <br />
      <input type="submit" value="submit" />
     </form>
    </>
  )
}

export default App
