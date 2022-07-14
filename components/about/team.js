import React from 'react'
import styles from "../about/Team.module.css"




const categoryData = [
    {
      id:1,
      name:"Mr. Mike Banding",
      description:"Manager",
      image:"images/team1.webp",
      
    },
    {
      id:2,
      name:"Mr. Peter Pan",
      description:"Developer",
      image:"images/team2.webp",
      
    },
    
    {
      id:3,
      name:"Ms Sophia",
      description:"Designer",
      image:"images/team3.webp",
      
    },
    {
      id:4,
      name:"Ms John Lee",
      description:"Chairmen",
      image:"images/team4.webp",
      
    },
]
export const Teamimage = () => {

        return (
          <>
           <span className='flex items-center justify-center ml-[10%] mt-20'>
                  <h2 className='text-2xl font-bold' >Awesome Team</h2>
          </span>
          <div className="w-[90%] sm:w-[80%] m-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-5 xl:grid-cols-4 m-auto my-10 content-center">
             {categoryData.map((category,index) => {
               return(
                <CategoryCard key={index} castleImage={category.image} title={category.name} description={category.description} bgColor={category.bgColor} />
               )
            })}
          </div>
          </>
          
        )
      }
       const CategoryCard=({castleImage,title,description,bgColor})=> {return(
        <>
        <div className='w-auto p-4 rounded-lg content-center' style={{backgroundColor: bgColor }}>
          <img className src={castleImage} alt="card"/>
          <h3>{title}</h3>
          <p className='text-sm font-light text-gray-600'>{description}</p>
        </div>
        </>
      )}
      
    
    
  

export const Team = () => {
  return (
    <div className='w-100 h-[58vh] bg-red-100 text-center'>
         <br/><br/>
        <h2 className='text-3xl font-bold'>
        Awesome Team
      </h2>
      <br/>
      <p className='px-[16vw]'>
      Contrary to popular belief, Lorem Ipsum is not simply random.
      </p>
      
    </div>
    
  )
}
