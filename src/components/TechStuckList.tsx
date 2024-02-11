import dataTechList from '@/data/techList.json';
import TechList from './TechList';

export default function TechStuckList() {
  const techListData = dataTechList.data;
  const cardPaddingTopVal = 50;

  return (
    <section id='skills' className="stuck-list container">
      <h2 className='stuck-list__heading'>My Hard Skills</h2>

      <div className='stuck-list__wrapper'>
        <ul className="stuck-list__text">
          {techListData.map((item) => (
            <li key={item.id} className="stuck-list__text-item">
              <div className="stuck-list__text-wrapper">
                <h3>{item.heading}</h3>
                <p>{item.desc}</p>

                <TechList
                  className="stuck-list__text-list"
                  techItems={item.list}
                />
              </div>
            </li>
          ))}
        </ul>

        <ul className="stuck-list__card">
          {techListData.map((itemCard, index: number) => (
            <li
              key={itemCard.id}
              className="stuck-list__card-item"
              style={{
                paddingTop: `${index * cardPaddingTopVal}px`,
              }}
            >
              <div className="stuck-list__card-container">
                <div className="stuck-list__card-wrapper">
                  <TechList
                    className="stuck-list__card-list"
                    techItems={itemCard.list}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
