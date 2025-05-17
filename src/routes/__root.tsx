import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'
import * as React from 'react'
import type {QueryClient} from '@tanstack/react-query'
import {DefaultCatchBoundary} from 'src/components/DefaultCatchBoundary'
import {NotFound} from 'src/components/NotFound'
// @ts-ignore
import appCss from 'src/assets/globals.css?url'

const seo = ({
               title,
               description,
               keywords,
               image,
             }: {
  title: string
  description?: string
  image?: string
  keywords?: string
}) => {
  return [
    {title},
    {name: 'description', content: description},
    {name: 'keywords', content: keywords},
    {name: 'twitter:title', content: title},
    {name: 'twitter:description', content: description},
    {name: 'twitter:creator', content: '@tannerlinsley'},
    {name: 'twitter:site', content: '@tannerlinsley'},
    {name: 'og:type', content: 'website'},
    {name: 'og:title', content: title},
    {name: 'og:description', content: description},
    ...(image
      ? [
        {name: 'twitter:image', content: image},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'og:image', content: image},
      ]
      : []),
  ]
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      ...seo({
        title: 'MiningRank.Com',
        description: `Best Mining Reference Website`,
      }),
    ],
    links: [
      {rel: 'stylesheet', href: appCss},
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {rel: 'manifest', href: '/site.webmanifest', color: '#fffff'},
      {rel: 'icon', href: '/favicon.ico'},
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound/>,
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet/>
    </RootDocument>
  )
}

function RootDocument({children}: { children: React.ReactNode }) {
  return (
    <html>
    <head>
      <title></title><HeadContent/>
    </head>
    <body>
    {children}
    <TanStackRouterDevtools position="bottom-right"/>
    <ReactQueryDevtools buttonPosition="bottom-left"/>
    <Scripts/>
    </body>
    </html>
  )
}
