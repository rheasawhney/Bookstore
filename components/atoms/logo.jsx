import React from 'react'
import Image from 'next/image'
import { logoUrl } from '../../public/constants/url'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href='/'>
        <a href='#'><Image src={logoUrl} width="100" height="70" /></a>
    </Link>
  )
}
