import { Link, Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pathlessLayout/_nested-layout')({
  component: PathlessLayoutComponent,
})

function PathlessLayoutComponent() {
  return (
    <div>
      <div>I'm a nested pathless layout</div>
      <div className="flex gap-2">
        <Link
          to="/route-a"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Go to route A
        </Link>
        <Link
          to="/route-b"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Go to route B
        </Link>
          <Link
              to="/route-c-ya"
              activeProps={{
                  className: 'font-bold',
              }}
          >
              Go to route C
          </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
