// import styles from "../banner/Banner.module.css"
// import Image from "next/image"
// import { book1Url } from "../../../public/constants/url"
// import { SearchCircleIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"


//  const Banner= ()=>{
//     return (
//         <div className="w-[100vw] h-auto p-10 bg-cover bg-center bg-[url('https://res.cloudinary.com/dxuxmr72e/image/upload/v1650905187/Bookstore/Banner/bannerimg_ax99iw.png')]">
//             <section className="w-[80%] m-auto grid grid-cols-2 pl-20">
//                 <section className="h-[50vh]">
//                     <h1 className="text-6xl font-bold text-indigo-700">GET YOUR NEW <br/>BOOK COLLECTION</h1>

//                     <p className="text-lg my-10 text-gray-600">There are many variations of passages of Lorem Ipsum available,<br/> but the majority have suffered alteration in some formr.   </p>
//                     <button className="px-10 flex rounded-3xl py-4 text-white bg-black">
//                         Explore more
//                     <SearchIcon className="w-5 ml-2" />    
//                     </button>
//                 </section>
//                 <section className="h-[50vh] p-10">
//                     <Image src={"/boy.png"} layout="responsive" width={"100"} height="100" />
//                 </section>
//             </section>
//         </div>
//     )

// }

// export default Banner

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  SearchIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const features = [
  {
    name: 'Analytics',
    href: '#',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    href: '#',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: CursorClickIcon,
  },
  { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    href: '#',
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    href: '#',
    description: 'Build strategic funnels that will drive your customers to convert',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 lg:pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">GET YOUR NEW</span>{' '}
              <span className="block text-indigo-600 xl:inline">BOOK COLLECTION</span>
            </h1>
            <p className="mt-3 max-w-lg mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Find the best book categories, with a wide range of authors and themes, and we'll quickly and affordably deliver it to your home.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md">
                <a
                  href="#"
                  className="w-[70%] md:w-full m-auto flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-indigo-700 md:py-2 md:text-lg md:px-5"
                >
                    <SearchIcon className='w-5 text-white mr-2' />
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 h-[95%] m-auto lg:h-[70%] lg:mt-20 object-cover"
            src="boy.png"
            alt=""
          />
        </div>
      </main>
    </div>
  )
}
