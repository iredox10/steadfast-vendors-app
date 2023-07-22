import Nav from "../components/Nav";

export default function Home() {
  const {id} = useParams()
  return (
    <>
    <Nav bgColor={'blue'} />
    </>
  )
}
