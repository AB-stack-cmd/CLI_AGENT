"use client"
import  LoginForm  from "./login-form"
import { useRouter } from "next/navigation"

export default function SignInPage() {


  return (
    <div className=" bg-transparent flex justify-center flex-col items-center ">
      <h1>
        <LoginForm />
      </h1>
    </div>
  )
}