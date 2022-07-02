import React from 'react'

export default function ForthSection() {

    const Year =(item: any)=> {
        return(
            <div className=' lg:mx-auto lg:w-28 lg:h-28 lg:border lg:border-[#0B85FD] rounded-full lg:flex items-center justify-center' >
                <div className='lg:w-16 lg:h-16 lg:bg-[#0B85FD] rounded-full text-[#00A0FF] text-2xl lg:flex items-center justify-center lg:text-base lg:text-white font-CircularStd-Medium' >
                    {item}
                </div>
            </div>
        )
    }

    return (
        <div className=' w-full flex flex-col justify-center py-20 px-6 items-center' >
            <p className='font-CircularStd-Medium text-xl' >Roadmap</p>
            <div className='mt-8' >
                {Year('2022')}  
                <div className='flex lg:flex-row flex-col my-8' >
                    <div className='' >
                        <div className='w-auto' > 
                            <p style={{color: '#00A0FF'}} className='font-CircularStd-Medium text-xl' >Q1 <span style={{color: '#727272'}}>2022</span></p>
                            <div style={{backgroundColor: 'rgba(0, 160, 255, 0.08)'}} className='py-4 rounded-md text-sm px-8 font-CircularStd-Medium' >
                                <p style={{color: '#0B85FD'}}  className='lg:w-72' > Website Launch, MVP Development, IDO/Exchange Listing</p>
                            </div>
                        </div>
                        <div className='w-auto mt-8 lg:hidden' > 
                            <p style={{color: '#00A0FF'}} className='font-CircularStd-Medium text-xl' >Q2 <span style={{color: '#727272'}}>2022</span></p>
                            <div style={{backgroundColor: 'rgba(0, 160, 255, 0.08)'}} className='py-4 rounded-md text-sm px-8 font-CircularStd-Medium' >
                                <p style={{color: '#0B85FD'}}  className='lg:w-72' >MVP Development & Partnerships</p>
                            </div>
                        </div>
                        <div className='w-auto mt-8' > 
                            <p style={{color: '#00A0FF'}} className='font-CircularStd-Medium text-xl' >Q3 <span style={{color: '#727272'}}>2022</span></p>
                            <div style={{backgroundColor: 'rgba(0, 160, 255, 0.08)'}} className='py-4 rounded-md text-sm px-8 font-CircularStd-Medium' >
                                <p style={{color: '#0B85FD'}}  className='lg:w-72' >MVP Launch, City 1 - Port Harcourt, Mobile Implementation, Exchange Listing, Discounted fares, zero, commission, payment, via cryptocurrency and, fiat, Move2Earn, favourite, driver, biometric unlock, features launch, 5,000 active users, 2,000 drivers onboarded</p>
                            </div>
                        </div>
                    </div>
                    <div className='mx-12  hidden lg:flex flex-col justify-center items-center' >
                        <div style={{width: '16px', height: '16px', backgroundColor: '#00A0FF'}} className='rounded-full mb-5' />
                        <div style={{width: '24px', height: '24px', backgroundColor: '#00A0FF'}} className='rounded-full my-5' />
                        <div style={{width: '32px', height: '32px', backgroundColor: '#00A0FF'}} className='rounded-full my-5' />
                        <div style={{width: '24px', height: '24px', backgroundColor: '#00A0FF'}} className='rounded-full my-5' /> 
                        <div style={{width: '16px', height: '16px', backgroundColor: '#00A0FF'}} className='rounded-full mt-5' />
                    </div>
                    <div className='lg:mt-10' >
                        <div className='w-auto lg:flex hidden flex-col ' > 
                            <p style={{color: '#00A0FF'}} className='font-CircularStd-Medium text-xl' >Q2 <span style={{color: '#727272'}}>2022</span></p>
                            <div style={{backgroundColor: 'rgba(0, 160, 255, 0.08)'}} className='py-4 rounded-md text-sm px-8 font-CircularStd-Medium' >
                                <p style={{color: '#0B85FD'}}  className='lg:w-72' >MVP Development & Partnerships</p>
                            </div>
                        </div>
                        <div className='w-auto mt-8 lg:mt-20' > 
                            <p style={{color: '#00A0FF'}} className='font-CircularStd-Medium text-xl' >Q4 <span style={{color: '#727272'}}>2022</span></p>
                            <div style={{backgroundColor: 'rgba(0, 160, 255, 0.08)'}} className='py-4 rounded-md text-sm px-8 font-CircularStd-Medium' >
                                <p style={{color: '#0B85FD'}}  className='lg:w-72' >City 2 - Abuja, City 3 - Warri/Asaba, City 4 - Uyo, Intercity Rides Route, Rides feature launch, 20,000+ active users, 5,000+ drivers onboarded</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8' >
                {Year('2023')}  
                <div className='flex flex-col lg:flex-row my-8' >
                    <div className='' >
                        <div className='w-auto' > 
                            <p style={{color: '#0B85FD'}} className='font-CircularStd-Medium text-xl' >Q1 <span style={{color: '#727272'}}>2023</span></p>
                            <div style={{backgroundColor: 'rgba(0, 160, 255, 0.08)'}} className='py-4 rounded-md text-sm px-8 font-CircularStd-Medium' >
                                <p style={{color: '#0B85FD'}}  className='lg:w-72' >City 4 - Enugu, City 5 - Ibadan, City 6 - Lagos, 100,000+ active, users, 20,000+ drivers onboarded</p>
                            </div>
                        </div>
                        <div className='w-auto mt-8 lg:hidden' > 
                            <p style={{color: '#0B85FD'}} className='font-CircularStd-Medium text-xl' >Q2 <span style={{color: '#727272'}}>2023</span></p>
                            <div style={{backgroundColor: 'rgba(0, 160, 255, 0.08)'}} className='py-4 rounded-md text-sm px-8 font-CircularStd-Medium' >
                                <p style={{color: '#0B85FD'}}  className='lg:w-72' >On-Demand Logistics Feature, Launch 500,000+ active users, 60,000+ drivers onboarded</p>
                            </div>
                        </div> 
                        <div className='w-auto mt-8' > 
                            <p style={{color: '#0B85FD'}} className='font-CircularStd-Medium text-xl' >Q3 <span style={{color: '#727272'}}>2023</span></p>
                            <div style={{backgroundColor: 'rgba(0, 160, 255, 0.08)'}} className='py-4 rounded-md text-sm px-8 font-CircularStd-Medium' >
                                <p style={{color: '#0B85FD'}}  className='lg:w-72' >Fleet Management Product Launch, Global Expansion</p>
                            </div>
                        </div>
                    </div>
                    <div className='mx-12 hidden lg:flex flex-col justify-center items-center' >
                        <div style={{width: '16px', height: '16px', backgroundColor: '#00A0FF'}} className='rounded-full mb-5' />
                        <div style={{width: '24px', height: '24px', backgroundColor: '#00A0FF'}} className='rounded-full my-5' />
                        <div style={{width: '32px', height: '32px', backgroundColor: '#00A0FF'}} className='rounded-full my-5' />
                        <div style={{width: '24px', height: '24px', backgroundColor: '#00A0FF'}} className='rounded-full my-5' /> 
                        <div style={{width: '16px', height: '16px', backgroundColor: '#00A0FF'}} className='rounded-full mt-5' />
                    </div>
                    <div className='mt-10' >
                        <div className='w-auto lg:flex flex-col hidden' > 
                            <p style={{color: '#0B85FD'}} className='font-CircularStd-Medium text-xl' >Q2 <span style={{color: '#727272'}}>2023</span></p>
                            <div style={{backgroundColor: 'rgba(0, 160, 255, 0.08)'}} className='py-4 rounded-md text-sm px-8 font-CircularStd-Medium' >
                                <p style={{color: '#0B85FD'}}  className='lg:w-72' >On-Demand Logistics Feature, Launch 500,000+ active users, 60,000+ drivers onboarded</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
} 