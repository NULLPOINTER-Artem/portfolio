import ImageImporter from "./ImageImporter"

export default function InterestList() {
  const interestList = [
    {
      id: 1,
      icon: 'ai-icon.jpg',
      alt: 'Artificial Intelligence',
      name: 'Artificial Intelligence'
    },
    {
      id: 2,
      icon: '3d-web.png',
      alt: '3D Web',
      name: '3D Web'
    },
    {
      id: 3,
      icon: 'fd-icon.png',
      alt: 'Frontend Development',
      name: 'Frontend Development'
    },
    {
      id: 4,
      icon: 'bd-icon.png',
      alt: 'Backend Development',
      name: 'Backend Development'
    },
  ]

  return (
    <section id="interests" className="interest-section container">
      <div className="interest-section__heading">
        <h2>My Interests</h2>
      </div>

      <ul className="interest-section__list">
        {interestList.map((item) => (
          <li key={item.id} className="interest-section__list-item">
            <figure className="interest-section__list-wrapper">
              <ImageImporter
                className="interest-section__list-img"
                name-image={item.icon}
                alt={item.alt}
              />

              <figcaption className="interest-section__list-caption">
                {item.name}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
