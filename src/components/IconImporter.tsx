import Image from "next/image";

type iconImporterProps = {
  'name-icon': string,
  [prop: string]: string
};

export default async function IconImporter(props: iconImporterProps) {
  const IconComponent = (await import(`../icons/${props['name-icon']}`)).default;

  return (
    typeof IconComponent === 'function' ?
      <IconComponent {...props} /> :
      <Image
        src={IconComponent}
        alt="icon-png"
        {...props}
      />
  );
}
