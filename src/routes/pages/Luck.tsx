import { encodeBase64 } from '@/hooks/useAes'
import { LuckContentsMap } from '@/constants/LuckContentsMap'
import { PrintButton } from '@assets/svg'

export default function Luck() {
  const randomValue = Math.floor(Math.random() * LuckContentsMap.length)
  const LuckContent = LuckContentsMap[randomValue]

  const encodedValue = encodeBase64(`(오늘의 운)_${randomValue + 1}`)

  return (
    <div className='flex gap-[60px] items-center'>
      <LuckContent.component className='w-[300px] h-[300px]' />
      <div className='flex flex-col w-[450px] gap-10'>
        <div className='flex flex-col gap-8 text-white'>
          <h1 className='text-[28px]'>{LuckContent.title}</h1>
          <p className='text-xl'>{LuckContent.description}</p>
        </div>
        <PrintButton
          className='w-[465px] h-[72.5px]'
          text='PRINT'
          textSize='md'
          navigate={`/print/${encodedValue}`}
        />
      </div>
    </div>
  )
}
