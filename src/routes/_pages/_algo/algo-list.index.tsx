import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pages/_algo/algo-list/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/algo/algo-list"!</div>
}
