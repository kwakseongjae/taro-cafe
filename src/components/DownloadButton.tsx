type DownloadButtonProps = {
  imgUrl: string
  fileName?: string
}

export function DownloadButton({ imgUrl, fileName }: DownloadButtonProps) {
  const toDataURL = (url: string) => {
    return fetch(url)
      .then((response) => {
        return response.blob()
      })
      .then((blob) => {
        return URL.createObjectURL(blob)
      })
  }

  const downloadFile = async (url: string, fileName?: string) => {
    const a = document.createElement('a')
    a.href = await toDataURL(url)
    a.download = fileName ?? 'download'

    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  return (
    <button
      className='w-3/4 py-2 bg-white h-fit'
      onClick={() => {
        downloadFile(imgUrl, fileName)
      }}
    >
      <p className='text-black text-[20px]'>DOWNLOAD</p>
    </button>
  )
}
