"use client"
import  LoginForm  from "./login-form"
import { useRouter } from "next/navigation"

export default function SignInPage() {


  return (
    <div className=" items-center flex justify-center p-6">
    <div className="   p-30 flex justify-center  items-center cneter ">
     
        <LoginForm />
   
    </div>
    </div>
  )
}