import React from 'react'

export const Info  = () => {
  return (
    <div className='w-100 h-[58vh] px-[8vw] grid-cols-2 grid'>
        <section>
        <iframe className='m-auto' width="400" height="313" src="https://www.youtube.com/embed/M0qL4zzIuC8" title="12 great books that will get you out of a reading slump 📚" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </section>
        <section>
            <h3 className='text-2xl text-red-800 font-semibold underline underline-offset-4' >
                What we are
            </h3>
            <br></br>
            <p className='mt-4 text-lg'>
            We provide one-stop solution for all your book needs, look no further than The Online Book Store! We carry everything from the latest bestsellers to hard-to-find classics, and we're always happy to help you find the perfect book.
            </p>
            <br></br>
            <p className='mt-4 text-lg'>
            Our website is easy to navigate, and our customer service is top-notch. We offer fast shipping and competitive prices, so you can rest assured that you're getting the best possible deal. Plus, we have a generous return policy if you're not completely satisfied with your purchase.
            </p>
            <br/>
            <p className='mt-4 text-lg'>
            So what are you waiting for? Start shopping at The Online Book Store today!
            </p>
        </section>

    </div>
  )
}
