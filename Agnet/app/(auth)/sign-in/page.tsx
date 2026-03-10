"use client"
import  LoginForm  from "./form"
import { useRouter } from "next/navigation"

export default function SignInPage() {


  return (
    <div className="flex justify-center items-center ">
      <h1>
        <LoginForm />
      </h1>
    </div>
  )
}