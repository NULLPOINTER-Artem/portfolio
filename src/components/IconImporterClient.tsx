'use client'

import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactElement, useEffect, useState } from "react";

type mediaType = 'png' | 'svg';
type IconImporterClientProps = {
  'name-icon': string,
  [prop: string]: string
};

export default function IconImporterClient(props: IconImporterClientProps) {
  const [IconComponent, setIconComponent] = useState<ReactElement | null>(null);
  const [imageSrc, setImageSrc] = useState<StaticImport | null>(null)
  const [typeMedia, setTypeMedia] = useState<mediaType | null>(null);

  useEffect(() => {
    if (props['name-icon'].includes('.svg')) {
      setTypeMedia('svg');

      import(`../icons/${props['name-icon']}?svgr`).then((result) => {
        setIconComponent(result.default);
      });
    } else if (props['name-icon'].includes('.png')) {
      setTypeMedia('png');

      import(`../icons/${props['name-icon']}`).then((result) => {
        setImageSrc(result.default);
      });
    }
  }, []);

  return <>
    {
      typeMedia && typeMedia === 'svg' && !IconComponent
        ? null :
        IconComponent && <IconComponent.type {...IconComponent.props} {...props}>
          {IconComponent.props.children}
        </IconComponent.type>
    }
    {
      typeMedia && typeMedia === 'png' && !imageSrc
        ? null :
        imageSrc && <Image
          src={imageSrc}
          alt="icon-png"
          {...props}
        />
    }
  </>
}
