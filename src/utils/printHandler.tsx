/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavigateFunction } from 'react-router-dom'
import { Printer, render, Image, Cut } from 'react-thermal-printer'

declare global {
  interface Navigator {
    serial: any
  }
}

export const onClickPrintHandler = async (
  resultType: string,
  nav: NavigateFunction,
  navigate: string,
): Promise<void> => {
  const receipt = (
    <Printer type='epson' width={60} debug={true}>
      <Image align='center' src={`/result/${resultType}.png`} />
      <Cut />
    </Printer>
  )
  const data = await render(receipt)
  const port = await window.navigator?.serial?.requestPort()
  if (port.writable === null) {
    await port.open({ baudRate: 9600 })
  }
  const writer = port.writable?.getWriter()
  if (writer !== null) {
    nav(navigate)
    await writer!.write(data).then(() => setTimeout(() => port.close(), 20000))
    writer!.releaseLock()
  }
}
