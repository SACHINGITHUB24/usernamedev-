
"use client"  

import React, { useTransition } from "react"
import { LuGithub } from "react-icons/lu"
import { signIn } from "next-auth/react"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"

const SignUp =  () => {
  const [isPending, startTransition] = useTransition()
  const session =  getServerSession(authOptions)

  const handleGithubSignIn = () => {
    startTransition(() => {
      signIn("github", {
        callbackUrl: `/onboarding`, // change later if needed
      })
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-6">

        <h1 className="text-5xl font-mono font-bold">
          dev/username
        </h1>

        <h3 className="text-base md:text-xl text-muted-foreground">
          Create your public developer identity in minutes.
        </h3>

        <button
          onClick={handleGithubSignIn}
          disabled={isPending}
          className="w-full sm:w-auto mx-auto flex items-center justify-center gap-2 rounded bg-black px-4 py-2 text-white transition-opacity disabled:opacity-70 cursor-pointer"
        >
          <LuGithub />
          {isPending ? "Connecting GitHub..." : "Continue with GitHub"}
        </button>

        <p className="text-sm text-muted-foreground">
          We’ll use your GitHub profile to showcase your real work and contributions.
        </p>

        <h5 className="text-sm font-medium text-muted-foreground">
          Trusted by Developers
        </h5>

      </div>
    </div>
  )
}

export default SignUp