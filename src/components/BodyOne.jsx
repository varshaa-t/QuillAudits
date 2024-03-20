import React from 'react'

function BodyOne() {
    return (
        <div className='flex relative justify-center items-center mt-16'>
            <div className='flex flex-col'>
                <p className='font-normal text-lg mr-96 text-diff-black' style={{ lineHeight: "27px", fontFamily: "var(--font-poppins)"}}>
                    Carpe Diem Pension, on Pulse blockchain, redefines retirement with <br />
                    a self-managed, inclusive, globally portable fund. Unique for its <br />
                    token burn mechanism, it ensures a sustainable 4.32% inflation <br />
                    payout. With $143.11k and 41.06% of CDP already burned, it serves 35 <br />
                    users globally.
                </p>
                <p className='font-bold text-[34px] text-diff-black mt-8' style={{lineHeight: "42.5px", fontFamily: "var(--font-jost)"}}>
                    CarpeDiem Pension's Flexible, <br/>
                    Blockchain-Enabled Future
                </p>
                <p className='font-normal text-lg mt-8' style={{lineHeight: "27px", fontFamily: "var(--font-poppins)"}}>
                    CarpeDiem Pension redefines retirement planning with a unique <br/>
                    approach that deviates from traditional pension funds. With no <br/> 
                    minimum age for retirement, it offers flexibility and freedom, <br/>
                    ensuring all genders receive equal treatment. CarpeDiem Pension <br/> 
                    ensures blockchain transparency, anonymity, and global <br/> 
                    accessibility, safeguarding pensions during international relocation. <br/> 
                    Easily transfer pensions to loved ones; share wallet access. Re- <br/>
                    deposit payouts for increased future benefits. Importantly, <br/>
                    CarpeDiem Pension prioritizes deposit security by avoiding utilizing <br/> 
                    client funds for internal investments. To become a part of this <br/> 
                    forward-thinking pension scheme, one simply needs to install and <br/>
                    configure a blockchain wallet.
                </p>
                <img className='mt-6 w-[758px] h-[373px] rounded-md' src="https://s3-alpha-sig.figma.com/img/4ac7/d013/b52d6815e1eea17ca18b12bc2668392c?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PpQKxlqnGB33W5Crdu2zKNoZyCUo-JbJhW5euVZfLzWGb8d1JHVINICmpObWHIyP-F0cqxNE6elQNUDq9FbGuV-0XXgeRTqQfzmQuOOtJ9Sh4CETQpeID1npsKi-z6Qvsn0r~gJYsqgsjeiYjLHHY7RBSW9Dh5qaDyjvckLDRCg9DADMZxFSQ7zPmmUkNI76ybcZSmYMjgmgeohxt-S40EjhailFHEb6tq--hz6ClJpr4-QyHeO2nUtXH18WazTPL~mXekPVUWdDsCvpOhCTTVGpv3jwK920sJnCwGgpyuFa5fIwfI8ra063x-oDhq0bcU5-NdB7qQNX4RnJEm~gUw__"></img>
                <p className='font-bold text-[34px] mt-8' style={{lineHeight: "42.5px", fontFamily: "var(--font-jost)"}}>
                    CarpeDiem Pension's Challenges: <br/> 
                    Enhancing Security Against Reentrancy, <br/> 
                    Front-Running, and Infinite Minting
                </p>
                <p className='font-normal text-lg mt-10' style={{lineHeight: "27px", fontFamily: "var(--font-poppins)"}}>
                    CarpeDiem Pension confronts critical security challenges, including <br/> 
                    the risks of reentrancy and front-running exploits.Malicious actors <br/> 
                    may exploit contract vulnerabilities, withdrawing excess funds or <br/>
                    manipulating transaction timing for unfair advantages. System <br/> 
                    faces infinite minting threats, risking economic stability with endless <br/> 
                    creation of CDP tokens or pension shares.  Addressing these <br/> 
                    challenges is paramount to safeguarding the integrity and security <br/> 
                    of CarpeDiem Pension.
                </p>
                <img className='w-[640px] h-[370px] rounded-md mt-8 -ml-2' src="https://s3-alpha-sig.figma.com/img/50d4/d7ce/b61b030e263e7ab85ddd3fa68d0d7691?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QZ7O05DdbBe3ripPyKD9KCUoqlJmcqnWb0Xh3bsizcp5NyMNLgQrOof2waNzj1veDooGPt5vBzNRCwM62ap88BctDOQXVsNPcxbx~M7ANNrAJIx5wCnJ4w0PH~YcfwGlaL9gNqz0KLYWeCsqTqb7EDVfYui1U9Cak3VIFx6Het97v0JryPUVPd~aZJHJUOg1tdlCxQvy1irnijeZvyBUe5U-UJ2-~JJqoIq52IkCKWm1fXFFt~OjyFVuwb~Bgap5B0ktncPIUtfA71aO6FFZoGfUN3dugJzOEvpvhGzaaQpqrrOpi-R1nOpnQnV0bpqoEJzvhSdnv0JX9H7a4qH0dQ__"></img>
                <p className='font-bold text-[34px] mt-8 text-diff-black' style={{lineHeight: "42.5px", fontFamily: "var(--font-jost)"}}>
                    CarpeDiem Pension's Journey Through <br/> 
                    our Audit Process
                </p>
                <ol className='list-decimal mt-8 ml-8'>
                    <li className='font-semibold text-2xl text-diff-black' style={{lineHeight: "27px", fontFamily: "var(--font-poppins)"}}>Information Gathering:
                        <ul className='list-disc'>
                            <li className='ml-1 mt-4 font-normal text-lg'>
                                Collected and reviewed all relevant documentation, including <br/> 
                                whitepaper, technical specifications, and design documents.
                            </li>
                            <li className='ml-1 mt-2 font-normal text-lg'>
                                Obtained a clear understanding of the CDP platform's <br/>
                                functionality, economic model, and intended user interactions.
                            </li>
                            <li className='ml-1 mt-2 font-normal text-lg'>
                                Discussed client concerns and specific areas of focus for the <br/>
                                audit.
                            </li>
                        </ul>
                    </li>
                    <li className='font-semibold text-2xl text-diff-black mt-8' style={{lineHeight: "27px", fontFamily: "var(--font-poppins)"}}>Manual Code Review:
                        <ul className='list-disc'>
                            <li className='ml-1 mt-4 font-normal text-lg'> 
                                Conducted a line-by-line review of the smart contract code, <br/> 
                                focusing on:
                                <ul className='list-circle ml-10'>
                                    <li className='text-lg font-normal mt-2' style={{lineHeight: "27px"}}>
                                        <span className='font-medium' style={{fontStyle: "italic"}}>&#x25E6; Vulnerability identification: </span> Searching for known <br/> 
                                        vulnerabilities like reentrancy, front-running, integer <br/> 
                                        overflows, and access control issues etc.
                                    </li>
                                    <li className='text-lg font-normal mt-2' style={{lineHeight: "27px"}}>
                                        <span className='font-medium' style={{fontStyle: "italic"}}>&#x25E6; Logic flaws: </span> Identifying inconsistencies or unintended <br/> 
                                        behaviors in the code logic.
                                    </li>
                                    <li className='text-lg font-normal mt-2' style={{lineHeight: "27px"}}>
                                        <span className='font-medium' style={{fontStyle: "italic"}}>&#x25E6;Tokenomics correctness: </span> Verifying if the code <br/> 
                                        accurately implements the intended economic model <br/> 
                                        and token distribution mechanisms.
                                    </li>
                                    <li className='text-lg font-normal mt-2' style={{lineHeight: "27px"}}>
                                        <span className='font-medium' style={{fontStyle: "italic"}}>&#x25E6; Solidity best practices: </span> Compliance with secure coding <br/> 
                                        standards and adherence to established guidelines.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className='font-semibold text-2xl text-diff-black mt-8' style={{lineHeight: "27px", fontFamily: "var(--font-poppins)"}}>Functional Testing:
                        <ul className='list-disc'>
                            <li className='ml-1 mt-4 font-normal text-lg'>
                                Developed and executed a comprehensive set of test cases <br/> 
                                covering various user interactions and edge cases.
                            </li>
                            <li className='ml-1 mt-2 font-normal text-lg'>
                                Simulated different deposit, claim, and referral scenarios to <br/> 
                                assess functionality and uncover potential exploits.
                            </li>
                            <li className='ml-1 mt-2 font-normal text-lg'>
                                Focused on scenarios identified during the manual review and <br/> 
                                client concerns (e.g., infinite minting, reward calculation errors).
                            </li>
                            <li className='ml-1 mt-2 font-normal text-lg'>
                                Leveraged tools like Hardhat and Ganache to deploy and test <br/> 
                                the smart contract locally.
                            </li>
                        </ul>
                    </li>
                    <li className='font-semibold text-2xl text-diff-black mt-8' style={{lineHeight: "27px", fontFamily: "var(--font-poppins)"}}>Automated Testing:
                        <ul className='list-disc'>
                            <li className='ml-1 mt-4 font-normal text-lg'>
                                Employed static analysis tools like Slither to identify <br/>
                                vulnerabilities through automated code scanning.
                            </li>
                            <li className='ml-1 mt-2 font-normal text-lg'>
                                Utilized symbolic execution tools like Mythril to explore various <br/> 
                                code execution paths and uncover potential attack vectors.
                            </li>
                            <li className='ml-1 mt-2 font-normal text-lg'>
                                Integrated unit tests are written by the CDP team to verify <br/> 
                                specific contract functions and their behaviour.
                            </li>
                        </ul>
                    </li>
                    <li className='font-semibold text-2xl text-diff-black mt-8' style={{lineHeight: "27px", fontFamily: "var(--font-poppins)"}}>Reporting & Remediation:
                        <ul className='list-disc'>
                            <li className='ml-1 mt-4 font-normal text-lg'>
                                Prepared a detailed report outlining all identified vulnerabilities, <br/>
                                categorized by severity and potential impact.
                            </li>
                            <li className='ml-1 mt-2 font-normal text-lg'>
                                Provided clear recommendations for fixing each vulnerability, <br/> 
                                including code snippets and best practices.
                            </li>
                            <li className='ml-1 mt-2 font-normal text-lg'>
                                Collaborated with the CDP team to prioritize and address the <br/> 
                                identified issues.
                            </li>
                            <li className='ml-1 mt-2 font-normal text-lg'>
                                Conducted additional verification testing after vulnerability fixes <br/> 
                                were implemented.
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
            <div className='absolute px-8 py-6 w-[320px] rounded-md right-40 top-16' style={{ boxShadow: "0px 3px 12px 1px rgba(45, 131, 238, 0.45)", fontFamily: "var(--font-inter)" }}>
                <div className='flex flex-col mb-5'>
                    <div className='font-normal text-sm text-box-gray' style={{lineHeight: "21px"}}>Headquarters</div>
                    <div className='font-medium text-base leading-6 text-diff-black'>Switzerland</div>
                </div>
                <div className='flex flex-col'>
                    <div className='font-normal text-sm text-box-gray' style={{lineHeight: "21px"}}>Chain</div>
                    <div className='font-medium text-base leading-6 text-diff-black'>Pulse Blockchain</div>
                </div>
            </div>
        </div>
    )
}

export default BodyOne