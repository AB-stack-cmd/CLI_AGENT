"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
// import { SignInPage } from "./(auth)/sign-in/page";
export default function Home() {

    const Router = useRouter();
    function LogPage(){
      Router.push('/sign-in')
             };

    return (
      <div className="flex min-h-screen borderitems-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <div>
          home
          <button onClick={e =>{LogPage()}}>Login</button>
        </div>
      </div>
    );
  };
