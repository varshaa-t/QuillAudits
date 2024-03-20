import React from 'react';
import { FaAngleDown } from "react-icons/fa6";

function Navbar() {
    return (
        <div className='flex relative w-full h-[78px] justify-between items-center px-28 py-10'>
            <div className='w-[216px] h-[44px]'>
                <img className='hover:cursor-pointer' src='https://www.quillaudits.com/_next/image?url=%2Flogo%2FQuillAudit-Logo.png&w=256&q=75' alt='logo'></img>
            </div>
            <div className='flex gap-x-8 text-white text-[21.42px] font-normal' style={{lineHeight: "32.13px", fontFamily: "var(--font-jost)"}}>
                <div className='flex items-center gap-x-1 hover:cursor-pointer'>
                    <span>Services</span>
                    <FaAngleDown />
                </div>
                <div className='hover:cursor-pointer'>Pricing</div>
                <div className='hover:cursor-pointer'>Our Audits</div>
                <div className='flex items-center hover:cursor-pointer gap-x-1'>
                    <span>Tools</span>
                    <FaAngleDown />
                </div>
                <div className='flex items-center hover:cursor-pointer gap-x-1'>
                    <span>Resources</span>
                    <FaAngleDown />
                </div>
                <div className='hover:cursor-pointer'>Refer-Earn-Secure</div>
            </div>
            <div>
                <button className='text-white hover:cursor-pointer text-xl font-medium rounded-lg px-4 py-2 bg-gradient-to-r from-purple via-blue to-light-purple' style={{fontFamily: "var(--font-jost)"}}>Request An Audit</button>
            </div> 
            <hr className="absolute top-20 h-[2px] mb-6 bg-[rgba(255,255,255,0.10)] border-0 w-[1295px]"></hr>
        </div>
    )
}

export default Navbar