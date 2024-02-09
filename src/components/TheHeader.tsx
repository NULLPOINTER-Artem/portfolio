import Link from "next/link"

export default function TheHeader() {
  return (
    <header id="top-page" className="the-header">
      <div className="the-header__heading">
        <Link href={'#top-page'}>
          Artem Orlov
        </Link>
      </div>

      <nav className="the-header__menu">
        <Link href={'#about'}>About</Link>
      </nav>
    </header>
  )
}
