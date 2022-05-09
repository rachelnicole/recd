import { useRouter } from "next/router"
const Header = () => {
  const router = useRouter()
  return (
    <header>
      <nav>
        <a href="/" className="blazeface title">recd</a>
        {router.pathname !== "/" && (
          <button className="history-back" onClick={() => router.back()}>←</button>
        )}
      </nav>
    </header>
  )
}
export default Header