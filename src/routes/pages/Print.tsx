import { useLocation, useNavigate } from 'react-router-dom'
import { QRCodeSVG } from 'qrcode.react'
import { useEffect, useState } from 'react'

export default function Print() {
  const navigate = useNavigate()

  const location = useLocation().pathname.split('/')
  const encodedValue = location[location.length - 1]

  const downloadUrl = `https://flip-side-virid.vercel.app/mobile/download/${encodedValue}`

  const [count, setCount] = useState(20)

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1)
    }, 1000)
    if (count < 0) {
      navigate('/')
      clearInterval(id)
    }
    return () => clearInterval(id)
  }, [count, navigate])

  return (
    <div className='flex flex-col gap-[70px] items-center'>
      <div className='flex flex-col items-center gap-[11px]'>
        <h1 className='text-[40px] text-white'>QR을 통해 자세한 운세를 다운받을 수 있어요.</h1>
        <p className='text-[#6D6C69] text-[25px]'>
          QR은 <span className='text-[#FFF777]'>{count}초 후</span> 사라져요.
        </p>
      </div>
      <QRCodeSVG value={downloadUrl} className='w-32 h-fit' />

      <h1 className='text-[32px] text-[#6D6C69] pt-3'>
        Download a detailed fortune through the QR code.
      </h1>
    </div>
  )
}
