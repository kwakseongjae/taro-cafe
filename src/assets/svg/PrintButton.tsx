// import { onClickPrintHandler } from '@/utils/printHandler'
import type { SVGProps } from 'react'
import { useNavigate } from 'react-router-dom'

interface SvgPrintButtonProps extends SVGProps<SVGSVGElement> {
  text: string
  textSize: string
  navigate: string
}

const SvgPrintButton = ({ text, textSize, navigate, ...props }: SvgPrintButtonProps) => {
  const nav = useNavigate()
  const onClick = async () => {
    // await onClickPrintHandler()
    nav(navigate)
  }
  const textSizeClass = textSize === 'lg' ? 'text-[80px]' : 'text-[40px]'
  return (
    <button onClick={onClick}>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' {...props}>
        <path
          fill='#fff'
          fillRule='evenodd'
          d='M465.236 71.954V.436L24.809.438c-.561 0-.69.304-.69.868v11.51c0 7.639-13.223 7.075-13.265-.174l-.13-11.207c0-.652-.26-.999-.994-.999H1.615c-.735 0-.908.347-.908.999L.74 72.953l440.395-.001c.562 0 .691-.305.691-.868V60.815c0-7.64 13.222-7.075 13.265.174l.129 10.965c0 .652.26 1 .993 1h8.117c.735 0 .907-.348.907-1'
          clipRule='evenodd'
        />
        <text
          x='50%'
          y='50%'
          textAnchor='middle'
          dy='.3em'
          className={`${textSizeClass} fill-current text-black`}
        >
          {text}
        </text>
      </svg>
    </button>
  )
}
export default SvgPrintButton
