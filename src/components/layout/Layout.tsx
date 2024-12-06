import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div className='flex items-center justify-center w-full bg-black h-dvh font-uuun pt-[78px]'>
      <Outlet />
    </div>
  )
}

export function MobileLayout() {
  return (
    <div className='flex items-center justify-center w-full bg-black h-dvh font-uuun'>
      <Outlet />
    </div>
  )
}
