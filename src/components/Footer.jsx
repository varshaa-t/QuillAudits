import React from 'react'
import Newsletter from './Newsletter'
import QuillAuditsLogo from "./QuillAuditsLogo"

function Footer() {
    return (
        <div className='flex flex-col'>
            <div className='flex gap-x-28 pl-12 pt-12 mt-10 justify-center items-center bg-container-dark-gray'>
                <div className='flex flex-col -ml-4 mb-4'>
                    <p className='font-bold text-[22px] text-newsletter-blue' style={{ lineHeight: "35.2px", fontFamily: "var(--font-inter)" }}>NEWSLETTER</p>
                    <p className='mt-7 font-semibold text-5xl text-newsletter-dark-blue' style={{ lineHeight: "69.36px", fontFamily: "var(--font-jost)" }}>
                        Security First News <br />
                        Letter by QuillAudits
                    </p>
                    <p className='mt-7 font-normal text-base leading-6 text-newsletter-dark-gray' style={{fontFamily: "var(--font-inter)"}}>
                        Subscribe for the most Exclusive Weekly security <br />
                        based newsletter and covering all the  recent <br />
                        hacks up to date.
                    </p>
                </div>
                <div className='relative flex flex-col ml-1 mb-12'>
                    <Newsletter />
                    <input className='bg-white absolute -bottom-5 right-6 w-[350px] h-[52px] pl-4 rounded-md focus:outline-none' placeholder='vitalik@ethereum.org' />
                    <button className='absolute right-8 -bottom-3 bg-gradient-to-r from-purple via-blue to-border-purple text-white rounded w-[115px] h-[36px]'>Subscribe</button>
                </div>
            </div>
            <div className='relative bg-gradient-to-br from-light-navy from-10% via-[#162e68] via-30% to-dark-navy to-70% pl-12 pt-8 pb-10'>
                <div className='absolute top-8 left-32'>
                    <QuillAuditsLogo />
                    <p className='text-[#EAEAEA] font-normal text-[16.17px] text-right' style={{ lineHeight: "23.37px", fontFamily: "var(--font-jost)" }}>Making Web3 a safer place</p>
                </div>
                <div className='flex mt-32 -ml-24 justify-center items-center gap-x-20 '>
                    <div className='flex flex-col text-white' style={{fontFamily: "var(--font-jost)"}}>
                        <p className='font-medium text-[20.79px]' style={{ lineHeight: "30.04px" }}>More About Quill</p>
                        <hr className="h-[2.31px] mt-2 mb-6 bg-border-blue border-0 w-40"></hr>
                        <div className='font-medium text-[16.17px] text-footer-gray' style={{ lineHeight: "23.37px" }}>
                            <p className='mb-4'>About Us</p>
                            <p className='mb-4'>FAQs</p>
                            <p>Blockchains We Audit</p>
                        </div>
                        <div className='mt-10 text-[18.48px] text-footer-gray' style={{ lineHeight: "26.7px" }}>
                            <p className='font-medium -mb-2'>Contact Us: </p> <br />
                            <div className='flex gap-2 mb-2 items-center font-normal' style={{fontStyle: "italic"}}>
                                <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2156 9.06538C10.5916 9.34424 11.0626 9.49662 11.5486 9.49662C12.0346 9.49662 12.5056 9.34424 12.8816 9.06538L22.105 2.20182C21.715 1.77306 21.2255 1.42741 20.6713 1.18947C20.1171 0.951523 19.5119 0.827129 18.8986 0.825134H4.19858C3.58531 0.827129 2.98005 0.951523 2.42586 1.18947C1.87168 1.42741 1.38218 1.77306 0.992188 2.20182L10.2156 9.06538Z" fill="#DDDDDD" />
                                    <path d="M14.216 10.5356C13.4637 11.0928 12.5218 11.3972 11.55 11.3972C10.5782 11.3972 9.63635 11.0928 8.88399 10.5356L0.072807 3.9787C0.0277014 4.19336 0.00334022 4.41118 0 4.62968V13.1904C0.00118681 14.1991 0.444067 15.1663 1.23146 15.8796C2.01886 16.5929 3.08646 16.9941 4.2 16.9952H18.9C20.0135 16.9941 21.0811 16.5929 21.8685 15.8796C22.6559 15.1663 23.0988 14.1991 23.1 13.1904V4.62968C23.0967 4.41118 23.0723 4.19336 23.0272 3.9787L14.216 10.5356Z" fill="#DDDDDD" />
                                </svg>
                                <p>audits@quillhash.com</p>
                            </div>
                            <div className='flex gap-2 items-center font-normal' style={{fontStyle: "italic"}}>
                                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.0535 1.32801C23.0348 1.24525 22.9939 1.16875 22.9349 1.10626C22.8759 1.04378 22.8009 0.997523 22.7176 0.972185C22.4141 0.913861 22.1001 0.935463 21.8081 1.03476C21.8081 1.03476 1.56898 8.09438 0.41309 8.87609C0.164781 9.0442 0.0810488 9.14226 0.0396639 9.25714C-0.160523 9.8175 0.462175 10.0585 0.462175 10.0585L5.67859 11.7078C5.76679 11.7231 5.85749 11.718 5.94326 11.6928C7.12899 10.9653 17.8775 4.37638 18.5021 4.15504C18.5983 4.12702 18.6725 4.15504 18.6532 4.22508C18.4049 5.0703 9.11643 13.0769 9.06542 13.1255C9.04057 13.1452 9.02121 13.1707 9.0091 13.1996C8.99701 13.2284 8.99254 13.2598 8.99612 13.2908L8.50913 18.2332C8.50913 18.2332 8.30509 19.7714 9.8902 18.2332C11.0143 17.1414 12.0932 16.2374 12.6322 15.7975C14.4262 16.9995 16.3559 18.3285 17.1884 19.0242C17.3284 19.1557 17.4943 19.2586 17.6762 19.3265C17.8581 19.3943 18.0524 19.4259 18.2471 19.4193C18.4869 19.3909 18.7122 19.2924 18.8928 19.1367C19.0736 18.981 19.2011 18.7756 19.2586 18.5479C19.2586 18.5479 22.9447 4.14383 23.0679 2.21432C23.0804 2.02753 23.0968 1.90425 23.0987 1.77444C23.1048 1.62432 23.0895 1.47412 23.0535 1.32801Z" fill="#DDDDDD" />
                                </svg>
                                <p>t.me/quillaudits</p>
                            </div>
                        </div>
                        <div className='flex flex-col mt-8 text-[18.48px] text-footer-gray' style={{ lineHeight: "26.7px" }}>
                            <div className='flex gap-2 font-medium'>
                                <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.2635 4.9192C14.6618 3.72372 13.7716 2.69985 12.6745 1.94172C11.5775 1.18359 10.309 0.715521 8.9855 0.580555C8.38681 0.520023 7.78361 0.520023 7.18491 0.580555C5.86149 0.715609 4.59296 1.18366 3.4959 1.9417C2.39884 2.69974 1.50842 3.72346 0.906472 4.9188C0.149126 6.44398 -0.143406 8.16089 0.0657225 9.85328C0.274851 11.5457 0.976286 13.1379 2.08168 14.4293L7.47201 21.0333C7.54645 21.1246 7.64003 21.1981 7.74602 21.2485C7.85201 21.299 7.96778 21.3252 8.08501 21.3252C8.20224 21.3252 8.318 21.299 8.424 21.2485C8.52999 21.1981 8.62357 21.1246 8.69801 21.0333L14.0883 14.4293C15.1937 13.1379 15.8951 11.5458 16.1043 9.85348C16.3134 8.16116 16.0209 6.44431 15.2635 4.9192ZM8.08501 11.7293C7.45723 11.7293 6.84355 11.5418 6.32158 11.1903C5.7996 10.8388 5.39277 10.3393 5.15253 9.75484C4.91229 9.17039 4.84943 8.52727 4.9719 7.90681C5.09438 7.28636 5.39668 6.71644 5.84058 6.26912C6.28449 5.82179 6.85006 5.51716 7.46577 5.39375C8.08149 5.27033 8.71969 5.33367 9.29968 5.57576C9.87967 5.81785 10.3754 6.22781 10.7242 6.75381C11.0729 7.2798 11.2591 7.89821 11.2591 8.53082C11.2581 9.37881 10.9234 10.1918 10.3283 10.7914C9.7333 11.391 8.92653 11.7283 8.08501 11.7293Z" fill="#DDDDDD" />
                                </svg>
                                <p>Our Location:</p>
                            </div>
                            <div className='mt-4 font-normal'>
                                Office 104/105 Level 1, <br />
                                Emaar Square, Building 4 <br />
                                Sheikh Mohammed Bin Rashid <br />
                                Boulevard Downtown Dubai, <br />
                                United Arab Emirates <br />
                                P.O box: 416654
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-6 text-white' style={{fontFamily: "var(--font-jost)"}}>
                        <p className='font-medium text-[20.79px]' style={{ lineHeight: "30.04px" }}>Audit Services</p>
                        <hr className="h-[2.31px] mt-2 mb-6 bg-border-blue border-0 w-[132px]"></hr>
                        <div className='text-footer-gray font-medium text-[16.17px]' style={{ lineHeight: "23.37px" }}>
                            <p className='mb-4'>Ethereum Audit</p>
                            <p className='mb-4'>Polygon Audit</p>
                            <p className='mb-4'>BSC Audit</p>
                            <p className='mb-4'>Solana Audit</p>
                            <p className='mb-4'>NEAR Audit</p>
                            <p className='mb-4'>Algorand Audit</p>
                            <p className='mb-4'>Tezos Audit</p>
                            <p className='mb-4'>Hyperledger Fabric Audit</p>
                            <p className='mb-4'>L1 Audit</p>
                            <p className='mb-4'>Polkadot Audit</p>
                            <p className='mb-4'>Wallet Audit</p>
                            <p className='mb-4'>ZkSync Audit</p>
                            <p className='mb-4'>Starknet Audit</p>
                        </div>
                    </div>
                    <div className='flex flex-col mb-52 text-white' style={{fontFamily: "var(--font-jost)"}}>
                        <p className='font-medium text-[20.79px]' style={{ lineHeight: "30.04px" }}>Quill Ecosystem</p>
                        <hr className="h-[2.31px] mt-2 mb-6 bg-border-blue border-0 w-36"></hr>
                        <div className='text-footer-gray font-medium text-[16.17px]' style={{ lineHeight: "23.37px" }}>
                            <p className='mb-4'>QuillAI</p>
                            <p className='mb-4'>QuillCheck</p>
                            <p className='mb-4'>QuillShield</p>
                            <p className='mb-4'>QuillAcademy</p>
                            <p className='mb-4'>QuillMonitor</p>
                            <p className='mb-4'>Web3Suggest</p>
                            <p className='mb-4'>Explore All Tools</p>
                        </div>
                    </div>
                    <div className='flex flex-col mb-40 -mt-1 text-white' style={{fontFamily: "var(--font-jost)"}}>
                        <p className='font-medium text-[20.79px]' style={{ lineHeight: "30.04px" }}>Other Services</p>
                        <hr className="h-[2.31px] mt-2 mb-6 bg-border-blue border-0 w-[136px]"></hr>
                        <div className='text-footer-gray font-medium text-[16.17px]' style={{ lineHeight: "23.37px" }}>
                            <p className='mb-4'>Red Teaming</p>
                            <p className='mb-4'>dApp Pentesting</p>
                            <p className='mb-4'>DeFi Diligence</p>
                            <p className='mb-4'>NFT Due Diligence</p>
                            <p className='mb-4'>Rug Pull Due Diligence</p>
                            <p className='mb-4'>Security Consultation</p>
                            <p className='mb-4'>Blockchain Forensics</p>
                            <p className='mb-4'>KYC (Know Your Customer)</p>
                        </div>
                    </div>
                    <div className='flex flex-col mb-40 -mt-1 text-white' style={{fontFamily: "var(--font-jost)"}}>
                        <p className='font-medium text-[20.79px]' style={{ lineHeight: "30.04px" }}>Quick Links</p>
                        <hr className="h-[2.31px] mt-2 mb-6 bg-border-blue border-0 w-28"></hr>
                        <div className='text-footer-gray font-medium text-[16.17px]' style={{ lineHeight: "23.37px" }}>
                            <p className='mb-4'>Pricing</p>
                            <p className='mb-4'>Audit Process</p>
                            <p className='mb-4'>Our Audits</p>
                            <p className='mb-4'>Testimonials</p>
                            <p className='mb-4'>Security Synopsis</p>
                            <p className='mb-4'>Blog</p>
                            <p className='mb-4'>Clients</p>
                            <div className='flex items-center gap-x-2'>
                                <p className='mb-4'>Careers</p>
                                <button className='bg-border-blue text-[13.86px] text-center rounded-[4.62px] w-[55.44px] h-[23.1px] -mt-4' style={{lineHeight: "20.03px"}}>Hiring</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center ml-20 pl-2 mt-16'>
                    <div className='flex gap-x-8'>
                        <img className='w-52' src='https://s3-alpha-sig.figma.com/img/f652/2a8a/7ababdcdf0d80fb9ef74060cdac9209f?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RDAwJj6b7F0hFGlQPrvBQ4x8C0wjXXsXlJnkPu3kecCBk~Sa6DJTJ-NUHru8sUOaXh~b9C9NPTsOwLBmt3d3aSO~x~wwlenqV5oRuMPCJpcymU8yg4HlLCjI00ShA1UlB2hZc7am39g-CUlmolSyer8JzgqzZWzbUBHzBcdOGcGCpM1lm9Ll2VKklaNKlrCkNbI-a7qOqP9I56g6FKD8-~u2UrlowiefEKXw~A-sS7OnlGG1DAE9h5tXb5~WfRZ3KhHDBmjMMJVDkNutkOKOxHMz2SgHkxSt9DdZLa2QpatHzCVBsWFsX74huikOiJWVZuU3t76ZerXgbor6fJO9cw__'></img>
                        <img className='w-44' src='https://s3-alpha-sig.figma.com/img/1a3c/3a5d/4e3161bde003ae7089489b23aae58f1a?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmgm6-76CiWFF~yd2YkuiQBPImZcrnU~5pQVwzwjm3oVqVQ73yYohLpIwms6e4aLQwqroMfTXzSmjAWOrFK4QxszY9JKHomjmmVRpJFSsSTA5AFLzpUrZImgrlZbKGig5NaiCB-sr7xjoOOVQYklLXy7SipsJUmGYGePBadlrPGvyNrPjbegE2av~fIzuoh-1CKqFMBqiRthFqm-gaSsWspeTtxfgHOAb33f~ln9o~eN9JcJxadX~b-9Nml09kCqin1duv1TBtWhsXAVpgtTlX~u10opQj2SOuU72ixC-Jo4gDKvlT1t5jM8cQmo-OjofHv74GA~ZGcFMbL4NLxzrw__'></img>
                    </div>
                    <div className='flex gap-x-8 mr-32'>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3551 21.5634L14.6162 10.5741L13.7412 9.33132L8.20341 1.47179L7.74451 0.819977H0.942871L2.60147 3.17633L9.96315 13.6297L10.8382 14.8706L16.7532 23.2699L17.212 23.9197H24.0156L22.3551 21.5634ZM18.019 22.4147L11.8745 13.6886L10.9995 12.4459L3.86926 2.32308H6.93566L12.7029 10.5114L13.5779 11.7542L21.0873 22.4166H18.019V22.4147Z" fill="#DDDDDD" />
                            <path d="M11.0004 12.448L11.8754 13.6907L10.839 14.8708L2.87845 23.9199H0.916504L9.96403 13.63L11.0004 12.448Z" fill="#DDDDDD" />
                            <path d="M23.1964 0.819977L14.6175 10.5741L13.5791 11.7542L12.7041 10.5114L13.7424 9.33132L19.5544 2.72027L21.2344 0.819977H23.1964Z" fill="#DDDDDD" />
                        </svg>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5094 0.819946C22.1901 0.819946 22.8429 1.09036 23.3243 1.57171C23.8057 2.05305 24.0761 2.70589 24.0761 3.38661V21.3533C24.0761 22.034 23.8057 22.6868 23.3243 23.1682C22.8429 23.6495 22.1901 23.9199 21.5094 23.9199H3.54274C2.86202 23.9199 2.20918 23.6495 1.72784 23.1682C1.24649 22.6868 0.976074 22.034 0.976074 21.3533V3.38661C0.976074 2.70589 1.24649 2.05305 1.72784 1.57171C2.20918 1.09036 2.86202 0.819946 3.54274 0.819946H21.5094ZM20.8677 20.7116V13.9099C20.8677 12.8004 20.4269 11.7362 19.6424 10.9516C18.8578 10.1671 17.7936 9.72628 16.6841 9.72628C15.5932 9.72628 14.3227 10.3936 13.7067 11.3946V9.97011H10.1262V20.7116H13.7067V14.3848C13.7067 13.3966 14.5024 12.5881 15.4906 12.5881C15.9671 12.5881 16.4241 12.7774 16.7609 13.1144C17.0979 13.4513 17.2872 13.9083 17.2872 14.3848V20.7116H20.8677ZM5.95541 7.95528C6.52721 7.95528 7.0756 7.72813 7.47993 7.3238C7.88426 6.91948 8.11141 6.37108 8.11141 5.79928C8.11141 4.60578 7.14891 3.63045 5.95541 3.63045C5.38019 3.63045 4.82855 3.85894 4.42181 4.26568C4.01507 4.67242 3.78657 5.22406 3.78657 5.79928C3.78657 6.99278 4.76191 7.95528 5.95541 7.95528ZM7.73924 20.7116V9.97011H4.18441V20.7116H7.73924Z" fill="#DDDDDD" />
                        </svg>
                        <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.853 1.30477C28.8296 1.20131 28.7785 1.10569 28.7048 1.02758C28.631 0.949478 28.5373 0.891656 28.4331 0.859984C28.0538 0.787078 27.6612 0.814081 27.2962 0.938201C27.2962 0.938201 1.99736 9.76273 0.552496 10.7399C0.242109 10.95 0.137444 11.0726 0.0857127 11.2162C-0.164521 11.9166 0.613851 12.2178 0.613851 12.2178L7.13438 14.2795C7.24462 14.2986 7.358 14.2922 7.46521 14.2608C8.94737 13.3514 22.383 5.11523 23.1638 4.83855C23.2841 4.80353 23.3767 4.83855 23.3526 4.92611C23.0422 5.98262 11.4317 15.9909 11.3679 16.0516C11.3368 16.0763 11.3126 16.1081 11.2975 16.1442C11.2824 16.1803 11.2768 16.2195 11.2813 16.2583L10.6725 22.4362C10.6725 22.4362 10.4175 24.359 12.3989 22.4362C13.804 21.0715 15.1527 19.9415 15.8264 19.3916C18.0688 20.8941 20.481 22.5553 21.5216 23.4251C21.6966 23.5894 21.904 23.718 22.1314 23.8028C22.3588 23.8876 22.6016 23.9272 22.8449 23.9189C23.1447 23.8834 23.4264 23.7602 23.6522 23.5656C23.8781 23.371 24.0375 23.1143 24.1094 22.8297C24.1094 22.8297 28.717 4.82454 28.871 2.41265C28.8867 2.17917 28.9071 2.02507 28.9095 1.8628C28.9171 1.67516 28.898 1.4874 28.853 1.30477Z" fill="#DDDDDD" />
                        </svg>
                        <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2811 12.1412C26.2811 10.3115 24.9047 8.82489 23.2107 8.82489C22.4696 8.82489 21.8343 9.0536 21.305 9.51103C19.3992 8.25311 17.07 7.45261 14.529 7.33826L15.7995 2.87836L19.3992 3.79321C19.5051 5.16549 20.5638 6.30905 21.9402 6.30905C23.3166 6.30905 24.4812 5.05113 24.4812 3.5645C24.4812 2.07787 23.3166 0.819946 21.9402 0.819946C20.9873 0.819946 20.1403 1.39173 19.7168 2.30658L15.4818 1.27737C15.1642 1.16302 14.7407 1.39173 14.6348 1.7348L13.0467 7.33826C10.3998 7.45261 7.75297 8.13875 5.84722 9.51103C5.31784 9.0536 4.68259 8.82489 3.94147 8.82489C2.24747 8.82489 0.871094 10.3115 0.871094 12.1412C0.871094 13.2848 1.40047 14.314 2.14159 14.8858C2.14159 15.1145 2.14159 15.4576 2.14159 15.6863C2.14159 17.9734 3.41209 20.0318 5.63547 21.6328C7.75297 23.1195 10.6116 23.9199 13.5761 23.9199C16.5406 23.9199 19.3992 23.1195 21.5167 21.6328C23.7401 20.0318 25.0106 17.9734 25.0106 15.6863C25.0106 15.4576 25.0106 15.2289 25.0106 15.0002C25.7517 14.314 26.2811 13.2848 26.2811 12.1412ZM22.0461 2.30658C22.6813 2.30658 23.2107 2.87836 23.2107 3.5645C23.2107 4.25064 22.6813 4.82242 22.0461 4.82242C21.4108 4.82242 20.8815 4.25064 20.8815 3.5645C20.8815 2.87836 21.4108 2.30658 22.0461 2.30658ZM8.07059 14.1997C8.07059 13.1705 8.91759 12.37 9.76459 12.37C10.7175 12.37 11.4586 13.2848 11.4586 14.1997C11.4586 15.1145 10.7175 16.0294 9.76459 16.0294C8.91759 16.0294 8.07059 15.2289 8.07059 14.1997ZM17.8111 19.5744C16.9641 20.4893 15.5877 20.9467 13.682 20.9467C11.7762 20.9467 10.3998 20.4893 9.55284 19.5744C9.23522 19.2313 9.23522 18.7739 9.55284 18.5452C9.87047 18.2021 10.294 18.2021 10.5057 18.5452C11.141 19.2313 12.1997 19.5744 13.682 19.5744C15.1642 19.5744 16.223 19.2313 16.8582 18.5452C17.1758 18.2021 17.5993 18.2021 17.8111 18.5452C18.0228 18.8883 18.0228 19.3457 17.8111 19.5744ZM17.3876 16.0294C16.4347 16.0294 15.5877 15.2289 15.5877 14.1997C15.5877 13.1705 16.4347 12.37 17.3876 12.37C18.3405 12.37 19.0816 13.2848 19.0816 14.1997C19.0816 15.1145 18.3405 16.0294 17.3876 16.0294Z" fill="#DDDDDD" />
                        </svg>
                        <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.4857 12.37C18.4857 17.4731 14.4021 21.61 9.36492 21.61C4.32778 21.61 0.244141 17.4731 0.244141 12.37C0.244141 7.26684 4.32778 3.12996 9.36492 3.12996C14.4021 3.12996 18.4857 7.26684 18.4857 12.37Z" fill="#DDDDDD" />
                            <path d="M28.4907 12.3686C28.4907 17.1724 26.4489 21.0664 23.9302 21.0664C21.4114 21.0664 19.3696 17.1721 19.3696 12.3686C19.3696 7.56511 21.4114 3.67081 23.9302 3.67081C26.4489 3.67081 28.4907 7.56511 28.4907 12.3686Z" fill="#DDDDDD" />
                            <path d="M32.5834 12.3717C32.5834 16.6757 31.8654 20.1647 30.9794 20.1647C30.0935 20.1647 29.3755 16.6757 29.3755 12.3717C29.3755 8.06775 30.0935 4.57878 30.9794 4.57878C31.8654 4.57878 32.5834 8.06775 32.5834 12.3717Z" fill="#DDDDDD" />
                        </svg>
                        <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.9791 2.75461C24.0098 1.83894 21.9264 1.18832 19.7839 0.819946C19.517 1.2994 19.2052 1.94424 18.9902 2.45726C16.6802 2.11209 14.3916 2.11209 12.124 2.45726C11.9091 1.94435 11.5903 1.2994 11.3209 0.819946C9.17637 1.1885 7.09114 1.84077 5.12081 2.75939C1.20003 8.64712 0.137134 14.3884 0.668514 20.0484C3.26904 21.9781 5.78923 23.1505 8.26693 23.9176C8.8827 23.0761 9.42702 22.1853 9.89429 21.2542C9.00469 20.9177 8.14708 20.5029 7.33165 20.0148C7.54625 19.8568 7.75577 19.6921 7.95994 19.521C12.9011 21.8175 18.2698 21.8175 23.152 19.521C23.3572 19.6909 23.5666 19.8556 23.7803 20.0148C22.9635 20.5042 22.1043 20.9198 21.2129 21.2567C21.6828 22.1915 22.2262 23.0832 22.8403 23.9199C25.3203 23.1528 27.8428 21.9806 30.4434 20.0484C31.0669 13.4871 29.3782 7.79846 25.9791 2.75461ZM10.5675 16.5676C9.08418 16.5676 7.86773 15.1915 7.86773 13.5159C7.86773 11.8402 9.05826 10.4619 10.5675 10.4619C12.0769 10.4619 13.2931 11.8378 13.2673 13.5159C13.2696 15.1915 12.0769 16.5676 10.5675 16.5676ZM20.5444 16.5676C19.0611 16.5676 17.8447 15.1915 17.8447 13.5159C17.8447 11.8402 19.0352 10.4619 20.5444 10.4619C22.0537 10.4619 23.2701 11.8378 23.2441 13.5159C23.2441 15.1915 22.0537 16.5676 20.5444 16.5676Z" fill="#DDDDDD" />
                        </svg>
                        <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.311 5.76994C30.311 5.76994 30.0607 3.43244 29.0597 2.46994C27.9336 1.09495 26.6824 1.09495 26.0567 1.09495C21.8025 0.819946 15.5463 0.819946 15.5463 0.819946C15.5463 0.819946 9.29 0.819946 5.03575 1.09495C4.41013 1.23245 3.15887 1.23245 2.03275 2.46994C1.15688 3.43244 0.7815 5.76994 0.7815 5.76994C0.7815 5.76994 0.53125 8.38243 0.53125 11.1325V13.6075C0.53125 16.22 0.7815 18.97 0.7815 18.97C0.7815 18.97 1.03175 21.3075 2.03275 22.2699C3.15887 23.6449 4.66038 23.5074 5.286 23.6449C7.66337 23.9199 15.5463 23.9199 15.5463 23.9199C15.5463 23.9199 21.8025 23.9199 26.0567 23.5074C26.6824 23.3699 27.9336 23.3699 29.0597 22.1325C29.9356 21.17 30.311 18.8325 30.311 18.8325C30.311 18.8325 30.5613 16.22 30.5613 13.47V10.995C30.5613 8.38243 30.311 5.76994 30.311 5.76994ZM12.4181 16.6325V7.41993L20.5513 12.095L12.4181 16.6325Z" fill="#DDDDDD" />
                        </svg>
                    </div>
                </div>
                <div>
                    <hr className="h-[2px] ml-[87px] mt-8 mb-6 bg-[rgba(255,255,255,0.10)] border-0 w-[1260px]"></hr>
                </div>
                <div className='flex justify-between items-center -mt-4 text-white font-normal text-[13.86px]' style={{lineHeight: "20.03px", fontFamily: "var(--font-jost)"}}>
                    <p className='ml-[90px]'>All Rights Reserved. © Copyright 2023. QuillAudits - LLC</p>
                    <p className='mr-[126px]'>Privacy Policy</p>
                </div>
                <div className='absolute right-[130px] bottom-[300px] flex flex-col text-white font-medium w-[710px] h-[97.24px]' style={{fontFamily: "var(--font-jost)"}}>
                    <p className='text-[20.79px]' style={{lineHeight: "30.04px"}}>Our Programmes</p>
                    <hr className="h-[2.31px] mt-2 mb-6 bg-border-blue border-0 w-[156px]"></hr>
                    <div className='flex gap-x-4 text-[16.17px]' style={{lineHeight: "23.37px"}}>
                        <button className='bg-gradient-to-r from-purple via-blue to-light-purple rounded-[4.62px] w-[207.9px] h-[41.58px]'>Refer-Earn-Secure</button>
                        <button className='bg-gradient-to-r from-purple via-blue to-light-purple rounded-[4.62px] w-[207.9px] h-[41.58px]'>WAGSI Grants</button>
                        <button className='bg-gradient-to-r from-purple via-blue to-light-purple rounded-[4.62px] w-[207.9px] h-[41.58px]'>Ambassador Program</button>
                        <button className='bg-gradient-to-r from-purple via-blue to-light-purple rounded-[4.62px] w-[207.9px] h-[41.58px]'>Partnership Program</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer