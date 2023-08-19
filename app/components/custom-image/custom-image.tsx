import Image from 'next/image'

type customImageProps = {
  src: string
  alt: string
  width: number
  height: number
  styles?: any
}

const CustomImage = ({ src, alt, width, height, styles }: customImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      style={styles}
      priority
    />
  )
}

export default CustomImage
