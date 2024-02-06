import Link from "next/link"

export default function TheHeader() {
  return (
    <header className="the-header">
      <div className="the-header__heading">
        <a href={'/'}>Todos</a>
      </div>

      <nav className="the-header__menu">
        <Link href={'/new'} >Create Task</Link>
      </nav>
    </header>
  )
}
