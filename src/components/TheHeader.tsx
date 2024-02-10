'use client'

// COMPONENTS
import Link from "next/link"
import SelectLanguage from "./SelectLanguage";
import IconImporter from "./IconImporter";
import ImageImporter from "./ImageImporter";

type LinkType = {
  id: number,
  text: string,
  href: string
};

export default function TheHeader() {
  const links: LinkType[] = [
    {
      id: 1,
      text: 'About',
      href: '#about'
    },
  ];

  const handleLinkScroll = (currLink: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const href = '#' + currLink.split('#').splice(-1)[0];
    window.scrollInstance && window.scrollInstance.scrollTo(href);
  };

  const handleMenuLogo = (currLink: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const href = '#' + currLink.split('#').splice(-1)[0];
    window.scrollInstance && window.scrollInstance.scrollTo(href, {
      immediate: true, onComplete: () => {
        toggleMenu();
      }
    });
  };

  const toggleMenu = () => {
    const menuEl = document.querySelector('.the-header__menu-wrapper');

    if (menuEl) {
      window.scrollInstance && window.scrollInstance.start();
      menuEl.classList.toggle('open');

      if (menuEl.classList.contains('open')) {
        window.scrollInstance && window.scrollInstance.stop();
      }
    }
  };

  return (
    <header className="the-header">
      <div className="the-header__heading">
        <Link href={'#top-page'} onClick={(event) => handleLinkScroll('#top-page', event)}>
          <ImageImporter
            className="the-header__logo"
            name-image="logo.png"
            alt="logo AO"
          />
          <span className="the-header__heading-text">Artem Orlov</span>
        </Link>
      </div>

      <nav className="the-header__menu the-header__menu--center">
        {links.map((link: LinkType) => (
          <Link
            key={link.id}
            href={link.href}
            onClick={(event) => handleLinkScroll(link.href, event)}
          >
            {link.text}
          </Link>
        ))}
      </nav>

      <div className="the-header__actions">
        <SelectLanguage className="the-header__select-lang" />
        <button className="the-header__btn-menu" type="button" onClick={toggleMenu}>
          <IconImporter
            className="the-header__btn-icon"
            name-icon="burger-menu"
          />
        </button>
      </div>

      <div className="the-header__menu-wrapper">
        <div className="the-header__menu-container" data-lenis-prevent>
          <Link className="the-header__menu-logo" href={'#top-page'} onClick={(event) => handleMenuLogo('#top-page', event)}>
            <ImageImporter
              className="the-header__logo"
              name-image="logo.png"
              alt="logo AO"
            />
          </Link>
          <SelectLanguage className="the-header__select-lang the-header__menu-select" />
          <button className="the-header__menu-close" type="button" onClick={toggleMenu}>
            <IconImporter
              name-icon="close"
            />
          </button>

          <nav className="the-header__menu">
            {links.map((link: LinkType) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(event) => handleLinkScroll(link.href, event)}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>

      </div>
    </header>
  )
}
