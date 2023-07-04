import Image from 'next/image'
/**
 * 展示旅游照片
 */
export default function TourImages() {
  const images: { src: string, title: string }[] = [
    {
      src: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wEaV?ver=74a1",
      title: "风景"
    }
  ]

  return (
    <>
      <div className="flex flex-wrap -mx-4">
        {
          images.map((image, index) => {
            return (
              <div className="w-full md:w-1/2 lg:w-1/4 px-4" key={image.src + index}>
                <Image src={image.src} width={256} height={512} alt={image.title} className="object-cover"></Image>
              </div>
            )
          })
        }
      </div>
    </>
  )
}