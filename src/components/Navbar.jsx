import NavbarItem from "./NavbarItem";

export default function NavBar() {
  return (
    <div className="text-black flex dark:bg-green-300 bg-blue-200 p-4 lg:text-lg justify-center gap-6 font-bold">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
