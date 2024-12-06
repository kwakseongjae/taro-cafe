import { encodeBase64 } from '@/hooks/useAes'
import { MoneyContentsMap } from '@/constants/MoneyContentsMap'
import { PrintButton } from '@assets/svg'

export default function Money() {
  const randomValue = Math.floor(Math.random() * MoneyContentsMap.length)
  const MoneyContent = MoneyContentsMap[randomValue]

  const encodedValue = encodeBase64(`MONEY_${randomValue + 1}`)

  return (
    <div className='flex gap-[60px] items-center'>
      <MoneyContent.component className='w-[300px] h-[300px]' />
      <div className='flex flex-col w-[450px] gap-10'>
        <div className='flex flex-col gap-8 text-white'>
          <h1 className='text-[28px]'>{MoneyContent.title}</h1>
          <p className='text-xl'>{MoneyContent.description}</p>
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
