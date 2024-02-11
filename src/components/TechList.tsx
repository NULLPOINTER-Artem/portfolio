import IconImporter from "./IconImporter";

export type TechItem = {
  id: number,
  icon: string,
  name: string,
};

type TechListProps = {
  className?: string,
  techItems: TechItem[],
};

export default function TechList({ techItems, className }: TechListProps) {
  return (
    <ul className={`tech-list${` ${className}` ?? ''}`}>
      {techItems.map((item: TechItem) => (
        <li key={item.id} className="tech-list__item">
          <IconImporter
            className="tech-list__item-icon"
            name-icon={item.icon}
          />

          <span className="tech-list__item-name">
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  )
}
