import {createFileRoute, Outlet} from '@tanstack/react-router'
import React from "react";
import {twMerge} from "tailwind-merge";
import {signIn, useSession} from "~/lib/auth/auth-client";
import {Button} from "~/components/ui/button";

export const Route = createFileRoute('/_pages')({
  component: RouteComponent,
})

function RouteComponent() {
  const {data: session} = useSession();

  return (
    <main>
      <header
        className={twMerge('border-grid sticky top-0 z-50 border-b backdrop-blur-xl',
          'flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12')}>
      </header>

      <div className={"flex flex-col h-screen w-screen"}>
        {session && <p>Client Signed in as {session.user.name}</p>}

        {!session && (
          <div>
            <Button onClick={() => signIn.social({provider: "google"})}>
              Sign in with Google
            </Button>
          <Button onClick={() => signIn.social({provider: "github"})}>
            Sign in with Github
          </Button>
          </div>
        )}

        Root 1 Router
        <Outlet/>
      </div>
    </main>
  )
}