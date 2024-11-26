'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// COMPONENTS
import Link from 'next/link';
import SelectLanguage from './SelectLanguage';
import IconImporterClient from './IconImporterClient';

type LinkType = {
  id: number;
  text: string;
  href: string;
  active: boolean;
};

export default function TheHeader() {
  const router = useRouter();

  const [links, setLinks] = useState<LinkType[]>([
    {
      id: 1,
      text: 'About',
      href: '#about',
      active: false,
    },
    {
      id: 2,
      text: 'Interests',
      href: '#interests',
      active: false,
    },
    {
      id: 3,
      text: 'Skills & Technologies',
      href: '#skills',
      active: false,
    },
  ]);

  useEffect(() => {
    setLinks((links) =>
      links.map((link: LinkType) => {
        return {
          ...link,
          active: link.href === window.location.hash,
        };
      })
    );
  }, []);

  const handleLinkScroll = (
    currLink: string,
    event: React.MouseEvent<HTMLAnchorElement>,
    activate?: boolean
  ) => {
    event.preventDefault();

    const href = '#' + currLink.split('#').splice(-1)[0];
    router.replace(href, {
      scroll: false,
    });
    setTimeout(() => {
      setLinks((links) =>
        links.map((link: LinkType) => {
          return {
            ...link,
            active: link.href === href,
          };
        })
      );
    });

    if (activate) {
      window.scrollInstance && window.scrollInstance.start();

      window.scrollInstance &&
        window.scrollInstance.scrollTo(href, {
          offset: -100,
          immediate: true,
          onComplete: () => {
            toggleMenu();
          },
        });

      return;
    }

    window.scrollInstance &&
      window.scrollInstance.scrollTo(href, {
        offset: -100,
      });
  };

  const toggleMenu = () => {
    // window.scrollInstance && window.scrollInstance.start();
    // window.scrollInstance && window.scrollInstance.stop();
  };

  const toggleContact = () => {
    // window.scrollInstance && window.scrollInstance.start();
    // window.scrollInstance && window.scrollInstance.stop();
  };

  return (
    <header className="the-header">
      <div className="the-header__wrapper container">
        <div className="the-header__heading">
          <Link
            href={'#top-page'}
            onClick={(event) => handleLinkScroll('#top-page', event)}
          >
            <IconImporterClient
              className="the-header__heading-icon"
              name-icon="home.svg"
            />
          </Link>
        </div>

        <div className="the-header__actions">
          <button
            className="the-header__btn-contact"
            type="button"
            onClick={toggleContact}
          >
            Contact
          </button>

          <SelectLanguage className="the-header__select-lang" />

          <button
            className="the-header__btn-menu"
            type="button"
            onClick={toggleMenu}
          >
            <IconImporterClient
              className="the-header__btn-icon"
              name-icon="burger-menu.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
