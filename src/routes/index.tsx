import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DefaultLayout, MobileLayout } from '@components/layout'
import Home from '@/routes/pages/Home'
import Select from '@pages/Select'
import Love from '@pages/Love'
import Career from '@pages/Career'
import Money from '@pages/Money'
import Health from '@pages/Health'
import Luck from '@pages/Luck'
import Print from '@pages/Print'
import Loading from '@pages/Loading'
import Redirect from '@pages/Redirect'
import Download from '@pages/Download'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'select',
        element: <Select />,
      },
      {
        path: 'loading/:category',
        element: <Loading />,
      },
      {
        path: 'redirect/:category',
        element: <Redirect />,
      },
      {
        path: 'love',
        element: <Love />,
      },
      {
        path: 'career',
        element: <Career />,
      },
      {
        path: 'health',
        element: <Health />,
      },
      {
        path: 'money',
        element: <Money />,
      },
      {
        path: 'luck',
        element: <Luck />,
      },
      {
        path: 'print/:category',
        element: <Print />,
      },
    ],
  },
  {
    path: '/',
    element: <MobileLayout />,
    children: [
      {
        path: 'download/:category',
        element: <Download />,
      },
    ],
  },
])

export default function Router() {
  return <RouterProvider router={router} />
}
