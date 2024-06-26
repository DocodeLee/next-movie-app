import Image from "next/image";
import Link from "next/link";
import { MdThumbUp } from "react-icons/md";

export default function Card({result}) {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-300 sm:shadow-md rounded-lg sm:border sm:border-slate-400
        sm:m-2 transition-shadow duration-200">
        <Link href={`/movie/${result.id}`}>
            <Image
                src = {`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                width = {500}
                height = {300}
                className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
            />
            <div className="p=2">
                <h2 className=" text-blue-200 text-lg font-bold truncate ">{result.title || result.name}</h2>
                <p className=" line-clamp-2 ">{result.overview}</p>
                <p className="flex items-center">{result.release_date || result.first_air_date}
                <MdThumbUp className="h-5 mr-1 ml-3" />
                {result.vote_count}
                </p>
            </div>
        </Link>
    </div>
  )
}
