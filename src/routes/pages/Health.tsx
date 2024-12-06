import { encodeBase64 } from '@/hooks/useAes'
import { HealthContentsMap } from '@/constants/HealthContentsMap'
import { PrintButton } from '@assets/svg'

export default function Health() {
  const randomValue = Math.floor(Math.random() * HealthContentsMap.length)
  const HealthContent = HealthContentsMap[randomValue]

  const encodedValue = encodeBase64(`HEALTH_${randomValue + 1}`)

  return (
    <div className='flex gap-[60px] items-center'>
      <HealthContent.component className='w-[300px] h-[300px]' />
      <div className='flex flex-col w-[450px] gap-10'>
        <div className='flex flex-col gap-8 text-white'>
          <h1 className='text-[28px]'>{HealthContent.title}</h1>
          <p className='text-xl'>{HealthContent.description}</p>
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
