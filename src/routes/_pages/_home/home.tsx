import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pages/_home/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_home/home"!</div>
}
