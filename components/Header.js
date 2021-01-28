import Link from "next/link"

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <Link href="/">
            <a>Inicio</a>
          </Link>
          {" | "}
          <Link href="/episodios">
            <a>Episodios</a>
          </Link>
          {" | "}
          <Link href="/about">
            <a>Contacto</a>
          </Link>
        </nav>
      </header>
    </>
  )
}
