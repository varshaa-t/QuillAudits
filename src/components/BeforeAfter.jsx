import React from 'react'

function BeforeAfter() {
    return (
        <div className='flex flex-col mb-8 ml-30'>
            <div className='flex items-center justify-center mt-12 mb-10'>
                <div className='flex flex-col text-diff-black w-[369.5px] h-[250px] mr-16'>
                    <div className='px-0.5 bg-pink font-bold text-xl w-full shadow-md' style={{ lineHeight: '30px' }}>
                        Before QuillAudits
                    </div>
                    <p className='mt-6 font-normal text-base leading-6' style={{fontFamily: "var(--font-poppins)"}}>
                        Exploits like reentrancy and front-running <br />
                        can let attackers withdraw extra funds and <br />
                        manipulate transaction timing for unfair <br />
                        gains
                    </p>
                    <p className='mt-4 font-normal text-base leading-6' style={{fontFamily: "var(--font-poppins)"}}>
                        Vulnerabilities could allow users to mint CDP <br />
                        tokens or pension shares indefinitely, <br />
                        disrupting the system's economic balance.
                    </p>
                </div>
                <div>
                    <div className='w-0.5 h-[270px] bg-light-gray mt-1'></div>
                </div>
                <div className='flex flex-col text-diff-black w-[369.5px] h-[250px] ml-16'>
                    <div className='px-0.5 bg-light-blue font-bold text-xl w-full shadow-md' style={{ lineHeight: '30px' }}>
                        After QuillAudits
                    </div>
                    <p className='mt-6 mb-16 font-normal text-base leading-6' style={{fontFamily: "var(--font-poppins)"}}>
                        Implementation of reentrancy protection <br />
                        mechanisms.
                    </p>
                    <p className='font-normal text-base leading-6' style={{fontFamily: "var(--font-poppins)"}}>
                        Ensure precision in decimal handling with <br />
                        standard libraries, recalculate accurately, fix <br />
                        logic errors, and secure referral systems <br />
                        against exploitation.
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-y-6 items-center justify-center'>
                <p className='text-center text-dark-blue font-semibold text-4xl' style={{lineHeight: "39px", fontFamily: "var(--font-jost)"}}>
                    See how QuillAudits is a trusted partner in <br/>
                    1000+ Audit stories
                </p>
                <button className='text-white text-center w-[233px] h-[56px] hover:cursor-pointer text-xl font-semibold rounded-md bg-gradient-to-r from-BA-purple via-BA-dark-blue to-BA-light-blue' style={{fontFamily: "var(--font-jost)"}}>Request An Audit</button>
            </div>
        </div>
    )
}

export default BeforeAfter