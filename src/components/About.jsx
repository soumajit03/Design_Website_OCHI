import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='2nddiv w-full flex gap-[4vw] mt-[3vw] border-t-[2px] border-b-[2px] border-zinc-900 py-[6vw] justify-between'>
            <h1>What you can expect:</h1>
            <div className='innerdiv w-[25vw] '>
                <h1>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.</h1>
                <h1 className='mt-[2vw]'>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</h1>
            </div>
            <div className=''>
                <h1>S:</h1>
                <ul href=''><a href=''>INSTAGRAM</a></ul>
                <ul href=''><a href=''>BEHANCE</a></ul>
                <ul href=''><a href=''>FACEBOOK</a></ul>
                <ul href=''><a href=''>LINKEDIN</a></ul>
            </div>
        </div>
        <div className='w-full flex gap-5 pt-10'>
            <div className='w-1/2'>
            <h1 className='text-6xl'>Our Approach:</h1>
            <button className='flex gap-10 items-center uppercase px-10 py-6 rounded-full mt-10 bg-zinc-900 text-white'>Read More
                <div className='w-4 h-4 bg-zinc-100 rounded-full'></div>
            </button>
            </div>
            <div className='w-1/2 h-[60vh] bg-[#8ea243] rounded-3xl'></div>
        </div>
    </div>
  )
}

export default About