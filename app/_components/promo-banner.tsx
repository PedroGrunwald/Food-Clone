import Image, { ImageProps } from "next/image";

// eslint-disable-next-line no-unused-vars
interface PromoBannerProps {}

const PromoBanner = (props: ImageProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      height={0}
      width={0}
      className="h-auto w-full object-contain"
      sizes="100vw"
      quality={100}
      {...props}
    />
  );
};

export default PromoBanner;
