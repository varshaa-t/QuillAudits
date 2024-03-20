import React from 'react';
import Stars from"./Stars";

function BodyTwo() {
    return (
        <div className='flex flex-col items-center justify-center mt-10 mr-[355px]'>
            <p className='font-bold text-[34px] text-diff-black' style={{ lineHeight: "42.5px", fontFamily: "var(--font-jost)"}}>
                QuillAudits' Strategic Approach to CDP <br />
                Security Audits
            </p>
            <p className='font-normal text-lg text-diff-black mt-10 mr-14' style={{ lineHeight: "27px", fontFamily: "var(--font-poppins)"}}>
                We prioritize threat modeling based on platform-specific risks. <br />
                Security-first, we identify and mitigate vulnerabilities beyond <br />
                functionality testing. Using white-box and black-box tests, we <br />
                conduct thorough vulnerability assessments. Maintaining <br />
                transparency, we communicate openly with the CDP team. <br />
                Emphasizing clarity, we present actionable insights for efficient <br />
                issue resolution.
            </p>
            <p className='font-bold text-[34px] text-diff-black mt-8 mr-5' style={{ lineHeight: "42.5px", fontFamily: "var(--font-jost)"}}>
                Comprehensive Audit Discoveries and <br />
                Remediation Strategies
            </p>
            <p className='font-normal text-lg text-diff-black mt-10 mr-11' style={{ lineHeight: "27px", fontFamily: "var(--font-poppins)"}}>
                Throughout the audit process, we unearthed a total of 33 issues, <br />
                spanning from minor concerns to critical vulnerabilities. Among <br />
                these, some of the critical issues identified were: Here's how we <br />
                remediated them :
            </p>
            <ol className='list-decimal list-outside mt-4' style={{fontFamily: "var(--font-poppins)"}}>
                <li className='font-semibold text-lg text-diff-black' style={{ lineHeight: "27px" }}>Unauthorized Claim/Compound:
                    <div className='flex font-normal text-lg mt-2'>
                        <p className='ml-2'>a. &nbsp; &nbsp;</p>
                        <p>
                            Users could claim/compound a substantial amount without <br />
                            making a deposit or waiting for the stipulated time.
                        </p>
                    </div>
                </li>
                <li className='font-semibold text-lg text-diff-black mt-4' style={{ lineHeight: "27px" }}>Precision Loss in mintCDP():
                    <div className='flex font-normal text-lg mt-2'>
                        <p className='ml-2'>a. &nbsp; &nbsp;</p>
                        <p>
                            Precision loss and unscaled values were identified while <br />
                            calculating rewardPerShare in the mintCDP() function.
                        </p>
                    </div>
                </li>
                <li className='font-semibold text-lg text-diff-black mt-4' style={{ lineHeight: "27px" }}>Multiplication Accuracy:
                    <div className='flex font-normal text-lg mt-2'>
                        <p className='ml-2'>a. &nbsp; &nbsp;</p>
                        <p>
                            Multiplication operations were prone to providing incorrect <br />
                            answers due to unscaled values, posing a potential risk to <br />
                            accurate calculations.
                        </p>
                    </div>
                </li>
                <li className='font-semibold text-lg text-diff-black mt-4' style={{ lineHeight: "27px" }}>Incorrect Share Allocation:
                    <div className='flex font-normal text-lg mt-2'>
                        <p className='ml-2'>a. &nbsp; &nbsp;</p>
                        <p>
                            The protocol was allocating shares for all days, even when <br />
                            there were no corresponding deposits, leading to inefficient <br />
                            use of resources.
                        </p>
                    </div>
                </li>
                <li className='font-semibold text-lg text-diff-black mt-4' style={{ lineHeight: "27px" }}>Logic Error in Referral Handling:
                    <div className='flex font-normal text-lg mt-2'>
                        <p className='ml-2'>a. &nbsp; &nbsp;</p>
                        <p>
                            A logic error resulted in users always having their <br />
                            user.referral set to address(0), which could be exploited to <br />
                            trick the referral system
                        </p>
                    </div>
                </li>
                <li className='font-semibold text-lg text-diff-black mt-4' style={{ lineHeight: "27px" }}>Referral Exploitation:
                    <div className='flex font-normal text-lg mt-2'>
                        <p className='ml-2'>a. &nbsp; &nbsp;</p>
                        <p>
                            Users could exploit the referral system to extract more CDP <br />
                            from the protocol, undermining its integrity.
                        </p>
                    </div>
                </li>
            </ol>
            <p className='font-bold text-[34px] text-diff-black mt-8 mr-72 ml-5' style={{ lineHeight: "42.5px", fontFamily: "var(--font-jost)"}}>Remediation & Impact:</p>
            <p className='font-normal text-lg text-diff-black mt-10 mr-11' style={{ lineHeight: "27px", fontFamily: "var(--font-poppins)"}}>
                All identified vulnerabilities were addressed by the CDP team, <br />
                significantly enhancing the smart contract's security posture. Key <br />
                improvements include
            </p>
            <ul className='list-disc text-diff-black mt-6 font-normal text-lg' style={{ lineHeight: "27px", fontFamily: "var(--font-poppins)"}}>
                <li>Implementation of reentrancy protection mechanisms.</li>
                <li className='mt-2'>Accurate handling of decimal values using established libraries <br />
                    or best practices.
                </li>
                <li className='mt-2'>Revised calculations with proper scaling factors</li>
                <li className='mt-2'>
                    Fixing logic errors to ensure deposits and waiting periods are <br />
                    enforced.
                </li>
                <li className='mt-2'>Addressing referral system vulnerabilities to prevent abuse.</li>
            </ul>
            <p className='mt-6 mr-40 text-link-blue font-normal text-lg' style={{ lineHeight: "27px", fontFamily: "var(--font-poppins)" }}>
                <span className='font-semibold text-diff-black'>Embed this tweet :-</span>
                <a href='https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20'> https://x.com/CarpeDiemCDP/<br />status/1742906560794296402?s=20</a>
            </p>
            <p className='font-normal text-lg text-diff-black mt-8' style={{ lineHeight: "27px", fontFamily: "var(--font-poppins)" }}>
                CDP smart contract audit revealed and fixed critical vulnerabilities, <br />
                safeguarding funds and ensuring platform stability. This underscores <br />
                the need for proactive security in blockchain projects, crucial for <br />
                financial asset management. Through audits and issue resolution, <br />
                CDP reinforces platform security, bolstering user trust.
            </p>
            <div className='mt-20 relative w-[609.6px] rounded pb-20 shadow-[0px_3.200000047683716px_3.200000047683716px_0px_rgba(0,0,0,0.25)]'>
                <div className='absolute top-4 left-4'>
                    <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.915 4.26681C5.1591 1.83321 8.55483 0.599609 13.0062 0.599609H14.6057V5.11001L13.3197 5.36761C11.1284 5.80601 9.6041 6.66841 8.78836 7.93401C8.36272 8.61582 8.12132 9.39648 8.08778 10.1996H13.0062C13.4304 10.1996 13.8373 10.3682 14.1372 10.6682C14.4372 10.9683 14.6057 11.3753 14.6057 11.7996V22.9996C14.6057 24.7644 13.171 26.1996 11.4067 26.1996H1.80975C1.38554 26.1996 0.978698 26.031 0.678734 25.731C0.378771 25.4309 0.210253 25.024 0.210253 24.5996V16.5996L0.215051 11.9292C0.200656 11.7516 -0.103249 7.54361 2.915 4.26681ZM29.0012 26.1996H19.4042C18.98 26.1996 18.5732 26.031 18.2732 25.731C17.9732 25.4309 17.8047 25.024 17.8047 24.5996V16.5996L17.8095 11.9292C17.7951 11.7516 17.4912 7.54361 20.5095 4.26681C22.7536 1.83321 26.1493 0.599609 30.6007 0.599609H32.2002V5.11001L30.9142 5.36761C28.7229 5.80601 27.1986 6.66841 26.3828 7.93401C25.9572 8.61582 25.7158 9.39648 25.6822 10.1996H30.6007C31.0249 10.1996 31.4318 10.3682 31.7317 10.6682C32.0317 10.9683 32.2002 11.3753 32.2002 11.7996V22.9996C32.2002 24.7644 30.7654 26.1996 29.0012 26.1996Z" fill="white" />
                    </svg>
                </div>
                <div className='absolute right-16 top-6 bg-box-blue w-[182.38px] h-[181.8px] rounded-[9.6px]'></div>
                <div className='flex flex-col pt-16 pl-16 custom-gradient text-white pb-6' style={{fontFamily: "var(--font-jost)"}}>
                    <p className='font-semibold text-[28.8px]' style={{ lineHeight: "41.62px" }}>Sally Radley</p>
                    <p className='font-normal text-[19.2px]' style={{ lineHeight: "27.74px" }}>WebGFi - CEO</p>
                </div>
                <div className='mt-5 ml-16'>
                    <div className='flex gap-x-3 text-[28.8px]'>
                        <Stars/>
                    </div>
                    <p className='font-normal mt-8 text-base text-black' style={{ lineHeight: "23.12px", fontFamily: "var(--font-jost)"}}>
                        “It felt like the auditing team was available within a short timeframe, <br />
                        which was excellent. The auditing process looked thorough, and <br />
                        I really appreciate the fact that you took time to investigate GAS <br />
                        optimizations.”
                    </p>
                    <div className='absolute right-4 bottom-4'>
                        <svg width="32" height="27" viewBox="0 0 32 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.2852 22.5359C27.0411 24.9695 23.6454 26.2031 19.194 26.2031H17.5945V21.6927L18.8805 21.4351C21.0718 20.9967 22.5961 20.1343 23.4118 18.8687C23.8375 18.1869 24.0789 17.4063 24.1124 16.6031H19.194C18.7698 16.6031 18.3629 16.4346 18.063 16.1345C17.763 15.8344 17.5945 15.4275 17.5945 15.0031V3.80313C17.5945 2.03832 19.0292 0.603125 20.7935 0.603125H30.3904C30.8147 0.603125 31.2215 0.771694 31.5215 1.07175C31.8214 1.37181 31.9899 1.77878 31.9899 2.20312V10.2031L31.9851 14.8735C31.9995 15.0511 32.3034 19.2591 29.2852 22.5359ZM3.19899 0.603125H12.796C13.2202 0.603125 13.627 0.771694 13.927 1.07175C14.227 1.37181 14.3955 1.77878 14.3955 2.20312V10.2031L14.3907 14.8735C14.4051 15.0511 14.709 19.2591 11.6907 22.5359C9.44663 24.9695 6.0509 26.2031 1.5995 26.2031H0V21.6927L1.286 21.4351C3.47731 20.9967 5.00163 20.1343 5.81737 18.8687C6.24301 18.1869 6.48441 17.4063 6.51795 16.6031H1.5995C1.17528 16.6031 0.768444 16.4346 0.468481 16.1345C0.168516 15.8344 0 15.4275 0 15.0031V3.80313C0 2.03832 1.43475 0.603125 3.19899 0.603125Z" fill="#204ECF" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyTwo