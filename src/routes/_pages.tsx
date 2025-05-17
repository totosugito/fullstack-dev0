import {createFileRoute, Outlet} from '@tanstack/react-router'
import React from "react";
import {twMerge} from "tailwind-merge";

export const Route = createFileRoute('/_pages')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
        <main>
          <header
            className={twMerge('border-grid sticky top-0 z-50 border-b backdrop-blur-xl',
              'flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12')}>
          </header>
          Root 1 Router
          <Outlet />
        </main>
  )
}