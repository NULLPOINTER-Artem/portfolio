import IconImporter from "./IconImporter";

type SocialType = 'standard' | 'post' | 'tel';
type SocialItem = {
  id: number,
  type: SocialType,
  link: string,
  icon: string,
};

export default function TheFooter() {
  const socialList: SocialItem[] = [
    {
      id: 1,
      type: 'tel',
      link: '+380935197194',
      icon: 'phone-icon.svg'
    },
    {
      id: 2,
      type: 'post',
      link: 'universalism123@gmail.com',
      icon: 'gmail-icon.svg'
    },
    {
      id: 3,
      type: 'standard',
      link: 'https://github.com/NULLPOINTER-Artem/',
      icon: 'github-icon.svg'
    },
    {
      id: 4,
      type: 'standard',
      link: 'https://t.me/Artem_Orlov_Vue',
      icon: 'telegram-icon.svg'
    },
    {
      id: 5,
      type: 'standard',
      link: 'https://www.instagram.com/tema_official.99/',
      icon: 'instagram-icon.svg'
    },
  ];

  return <>
    <footer id="footer" className="the-footer">
      <div className="the-footer__wrapper">
        <ul className="the-footer__social">
          {socialList.map((item) => (
            <li key={item.id} className="the-footer__social-item">
              <a
                href={
                  item.type === 'tel' ?
                    `tel:${item.link}`
                    : item.type === 'post' ?
                      `mailto:${item.link}`
                      : item.link
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconImporter
                  name-icon={item.icon}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="the-footer__copyright">
          &#169; {new Date().getFullYear()} - All rights reserved.
          Made with <span style={{ color: 'rgb(255, 119, 99)' }}>&#10084;</span> by <a
            className="the-footer__copyright-link"
            href="https://t.me/Artem_Orlov_Vue"
            target="_blank"
            rel="noopener noreferrer"
          >
            Artem Orlov
          </a>
        </div>
      </div>
    </footer>
  </>
}
