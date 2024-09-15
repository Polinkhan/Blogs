import Image from "next/image";

interface ImageLoaderProps {
  src: string;
  size: number;
}

const ImageLoader = ({ src, size }: ImageLoaderProps) => {
  return <Image src={src} alt="Picture of the author" width={size || 500} height={size || 500} />;
};

export default ImageLoader;
