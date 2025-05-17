import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pages/_pool/pool-list')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pool/pool-list"!</div>
}
