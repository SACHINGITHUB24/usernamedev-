// 'use client'
import Image from "next/image";
import Sign from '@/components/ui/SignUp'
import Onboarding from '@/app/onboarding/page'
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "@/pages/api/auth/[...nextauth]"


export default async function Home() {
   const session = await getServerSession(authOptions)



   

    if(session){
      redirect("/onboarding") //or /dashboard user
    }
 
      return (
    <Sign />


  );
}





