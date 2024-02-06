type iconImporterProps = {
  'name-icon': string,
  [prop: string]: string
};

export default async function IconImporter(props: iconImporterProps) {
  const IconComponent = (await import(`../icons/${props['name-icon']}.svg`)).default;

  return <IconComponent {...props} />;
}
