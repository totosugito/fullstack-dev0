import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_pathlessLayout/_nested-layout/route-c-ya',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_pathlessLayout/_nested-layout/route-c-ya"!</div>
}
