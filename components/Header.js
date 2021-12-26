import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react"
import {XIcon,MicrophoneIcon,SearchIcon} from '@heroicons/react/solid'

function Header () {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e)=> {
   e.preventDefault();
   const term = searchInputRef.current.value;
   if (!term) return;
   router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
    <div className="flex w-full p-6 items-center">
   <Image
    src="https://png2.cleanpng.com/sh/e1ddef276148a39234dd87af84cb8076/L0KzQYm3U8MxN5Nnj5H0aYP2gLBuTfdwd5hxfZ9yLXAwd7F2hBxmNZ10f9G2Z3Byd73sTcViapY1e6kEZUDkQIeCTsc1PWc7TqI8MUW1QoW3VMQ4O2o3SKM3cH7q/kisspng-google-i-o-google-logo-google-5abe0c79e0a069.7456660315224044739201.png"
    height={40}
    width={120}
    onClick={() => router.push("/")}
    className="cursor-pointer"
    />
    <form className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
     <input 
     className="flex-grow w-full focus:outline-none"
     type="text" ref={searchInputRef} />
     <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
     onClick={() => (searchInputRef.current.value="")}
     />
     <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex border-l-2 text-blue-500 pl-4 border-gray-300"/>
     <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex"/>
     <button hidden type="submit"
      onClick={search}
      >
      Search
      </button>
    </form>

    </div>
    </header>
  )
}
export default Header