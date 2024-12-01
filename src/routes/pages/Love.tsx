import { encodeBase64 } from '@/hooks/useAes'
import { LoveContentsMap } from '@/constants/LoveContentsMap'
import { HomeButton } from '@assets/svg'

export default function Love() {
  const randomValue = Math.floor(Math.random() * LoveContentsMap.length)
  const LoveContent = LoveContentsMap[randomValue]

  const encodedValue = encodeBase64(`love/${randomValue}`)

  return (
    <div className='flex gap-[60px] items-center'>
      <LoveContent.component className='w-[300px] h-[300px]' />
      <div className='flex flex-col w-[450px] gap-10'>
        <div className='flex flex-col gap-8 text-white'>
          <h1 className='text-[28px]'>{LoveContent.title}</h1>
          <p className='text-xl'>{LoveContent.description}</p>
        </div>
        <HomeButton
          className='w-[450px] h-[72px]'
          text='PRINT'
          textSize='md'
          navigate={`/print/${encodedValue}`}
        />
      </div>
    </div>
  )
}
