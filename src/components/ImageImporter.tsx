import Image, { ImageProps, StaticImageData } from "next/image";

interface StaticRequire {
  default: StaticImageData;
}
type StaticImport = StaticRequire | StaticImageData;

type imageImposterProps = Omit<ImageProps, 'src'> & {
  'name-image'?: string,
  src?: string | StaticImport,
  alt: string,
};

export default async function ImageImporter(props: imageImposterProps) {
  if (props['name-image']) {
    const importedImage = await import(`../images/${props['name-image']}`);
    return <Image {...props} src={importedImage.default} alt={props.alt} />
  }

  delete props["name-image"];

  return (
    props.src && <Image {...props} src={props.src} alt={props.alt} />
  )
}
