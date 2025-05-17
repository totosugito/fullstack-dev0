import {createFileRoute, Outlet} from '@tanstack/react-router'
import NewCard1 from "~/components/NewCard1";

export const Route = createFileRoute('/_pages/_algo/algo-list')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_pages/_algo/algo-list-route"!
    <NewCard1/>
    <Outlet />
  </div>
}
