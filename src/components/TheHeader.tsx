'use client'

import { useRouter } from "next/navigation";

// COMPONENTS
import Link from "next/link"
import SelectLanguage from "./SelectLanguage";
import IconImporterClient from "./IconImporterClient";
import { useEffect, useRef, useState } from "react";

type LinkType = {
  id: number,
  text: string,
  href: string,
  active: boolean,
};

export default function TheHeader() {
  const router = useRouter();

  const [links, setLinks] = useState<LinkType[]>([
    {
      id: 1,
      text: 'About',
      href: '#about',
      active: false
    },
    {
      id: 2,
      text: 'Interests',
      href: '#interests',
      active: false
    },
    {
      id: 3,
      text: 'Skills & Technologies',
      href: '#skills',
      active: false
    },
  ]);

  useEffect(() => {
    console.log('Use Effect');
    setLinks((links) => links.map((link: LinkType) => {
      return {
        ...link,
        active: link.href === window.location.hash
      }
    }))
  }, [])

  const handleLinkScroll = (currLink: string, event: React.MouseEvent<HTMLAnchorElement>, activate?: boolean) => {
    event.preventDefault();

    const href = '#' + currLink.split('#').splice(-1)[0];
    router.replace(href, {
      scroll: false,
    })
    setTimeout(() => {
      setLinks((links) => links.map((link: LinkType) => {
        return {
          ...link,
          active: link.href === href
        }
      }))
    })

    if (activate && activate === true) {
      window.scrollInstance && window.scrollInstance.start();

      window.scrollInstance && window.scrollInstance.scrollTo(href, {
        offset: -100,
        immediate: true,
        onComplete: () => {
          toggleMenu();
        }
      });

      return;
    }

    window.scrollInstance && window.scrollInstance.scrollTo(href, {
      offset: -100,
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
          <span className="the-header__heading-text">Artem Orlov</span>
          <span className="the-header__heading-text the-header__heading-text--shorten">Artem O.</span>
        </Link>
      </div>

      <nav className="the-header__menu the-header__menu--center">
        {links.map((link: LinkType) => (
          <Link
            key={link.id}
            className={`${link.active ? 'active' : ''}`}
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
          <IconImporterClient
            className="the-header__btn-icon"
            name-icon="burger-menu.svg"
          />
        </button>
      </div>

      <div className="the-header__menu-wrapper">
        <div className="the-header__menu-container" data-lenis-prevent>
          <SelectLanguage className="the-header__select-lang the-header__menu-select" />
          <button className="the-header__menu-close" type="button" onClick={toggleMenu}>
            <IconImporterClient
              name-icon="close.svg"
            />
          </button>

          <nav className="the-header__menu">
            <Link
              href={'#top-page'}
              onClick={(event) => handleLinkScroll('#top-page', event, true)}
            >
              Top Page
            </Link>
            {links.map((link: LinkType) => (
              <Link
                key={link.id}
                className={`${link.active ? 'active' : ''}`}
                href={link.href}
                onClick={(event) => handleLinkScroll(link.href, event, true)}
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
