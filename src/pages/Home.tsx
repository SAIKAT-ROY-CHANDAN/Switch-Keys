import NewArrival from "@/components/NewArrival"
import Brands from "../components/Brands"
import Grid from "../components/Grid"
import Hero from "../components/Hero"
import Service from "../components/Service"
import ShowCase from "../components/ShowCase"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Service />
      <NewArrival />
      <ShowCase />
      <Grid />
      <Brands />
      <Testimonials />
    </div>
  )
}

export default Home