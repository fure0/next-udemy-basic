import ClientComponent from "../components/ClientComponent"
import Link from "next/link"

export default function ServerComponent(){
  console.log('Server')
  return (
    <div>
      Server Component
      <ClientComponent></ClientComponent>
      <Link href="/about">About</Link>
    </div>
  )
}