import { useRouter } from "next/router"
const Header = () => {
  const router = useRouter()
  return (
    <header>
  {router.pathname !== "/" && (
    <button onClick={() => router.back()}>Back</button>
  )}
  <nav>
    <a href="/" className="blazeface title">recd</a>
  </nav>
</header>
  )
}
export default Header