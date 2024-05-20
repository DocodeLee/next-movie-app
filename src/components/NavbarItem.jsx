"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function NavbarItem({title, param}) {
  function Search() {
    const searchParams = useSearchParams()
  const genre = searchParams.get('genre');
  return (
    
    <Link
    className= {` hover:-translate-y-1 font-semibold 
    ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-slate-700 rounded-lg ': ''}`}
    href={`/?genre=${param}`}>
    {title}
    </Link>
  
  )
}}
