import { useLocation } from 'react-router-dom'
import { DownloadButton } from '@/components/DownloadButton'
import { decodeBase64 } from '@/hooks/useAes'
import {
  MoneyContentsMap,
  CareerContentsMap,
  HealthContentsMap,
  LoveContentsMap,
  LuckContentsMap,
} from '@/constants'
import { useMemo } from 'react'

export default function Download() {
  const location = useLocation().pathname.split('/')
  const decodedValue = decodeBase64(location[location.length - 1])

  const contentIndex = Number(decodedValue.split('_')[1]) - 1

  const contentElements = useMemo(() => {
    switch (decodedValue.split('_')[0]) {
      case 'MONEY':
        return MoneyContentsMap[contentIndex]
      case 'CAREER':
        return CareerContentsMap[contentIndex]
      case 'HEALTH':
        return HealthContentsMap[contentIndex]
      case 'LOVE':
        return LoveContentsMap[contentIndex]
      case '(오늘의 운)':
        return LuckContentsMap[contentIndex]
      default:
        return { result: 'error' }
    }
  }, [decodedValue, contentIndex])

  return (
    <div className='flex flex-col items-center gap-10 text-white'>
      <img src={contentElements.result} alt='taro-result' className='w-3/4' />
      <DownloadButton imgUrl={contentElements.result} fileName={`UR UUUN_${decodedValue}`} />
    </div>
  )
}
