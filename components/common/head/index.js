import Head from 'next/head'
import React from 'react'

export const HeadComponent = ({title}) => {
  return (
    <Head>
        <title>{title}</title>
    </Head>
  )
}
