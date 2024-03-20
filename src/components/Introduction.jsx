import React from 'react'

function Introduction() {
    return (
        <div className='bg-gradient-to-r from-light-navy to-dark-navy pt-8 pb-[550px]'>
            <div className='flex relative justify-center items-center ml-32'>
                <div className='rounded-lg absolute top-10 left-48 w-[460px] bg-gradient-to-r from-black to-green'>
                    <img className='w-[400px] h-[140px] ml-16 mb-10 mt-20' src='https://s3-alpha-sig.figma.com/img/7f05/53d8/7f3ddcce107256b4e74af14e8104b759?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RUcdwe7NdSushd2JHLvtF0vO2O6s1pboach2Gme9xm9qnODX~M0r-6~Vhkl6K4lMJMAbBNQpZphpJbSiG5uaWYmp5EzKTelAR9HXtbyqyEowggFLKZqDu~V7YhKvXkMblWoBaknNvMMnjh1Drx8ypfqzvRQfH-iQ-Tua7CKeQpI~605LTB~nXeOBBNitt04x9rEPudwUBwezgwNwbpbKYztjEHqViI8SdSEVlNVBsrvxB6S4flilifl0CU-c2SGnOpT07fws9N5lpybYPcXcvTWXIIbZ1nt1kU89fp6BU0pdw~73EpnCamLmdb5ue9dt973nhL1~P-u3Pk~cUKPrWg__'></img>
                    <p className='text-white pb-8 ml-12 leading-6 text-base font-normal' style={{ fontFamily: "var(--font-poppins)" }}>
                        Carpe Diem Pension, a blockchain-based <br />
                        retirement fund, offers permanent <br />
                        payouts through CDP deposits, with a <br />
                        4.32% annual inflation claimable by <br />
                        depositors.
                    </p>
                </div>
                <div className='flex flex-col absolute top-12 right-40 text-white mt-20 ml-4'>
                    <p className='font-medium text-[44px]' style={{ lineHeight: "57.6px", fontFamily: "var(--font-jost)" }}>
                        Securing Trust : Boosting <br />
                        Security and Strengthening <br />
                        Trust at Carpe Diem Pension
                    </p>
                    <p className='mt-6 text-xl font-normal' style={{ lineHeight: '30px', fontFamily: "var(--font-poppins)" }}>
                        QuillAudits enhances Carpe Diem Pension by <br />
                        addressing 33 vulnerabilities on the Pulse blockchain, <br />
                        boosting security and user trust in digital pensions.
                    </p>
                </div>
                <div className='absolute top-16 right-[665px] bg-white rounded-md p-2'>
                    <img className='w-[130px]' src="https://s3-alpha-sig.figma.com/img/697f/d0da/7fe50eddbb1aafa13170597391afbbdb?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K5vDn-riMujWaPL-qPa4brBh-fyieqr1DsnI0iq~seI5yiYJY4LRZ4F58Nw~5FZ6KWzAiZIFtbBCgHDyYxyof524fYL3VrA6hUyzmUugG0pWv8w32xm~781DRd~EdAIKalnS1hIzdMb3F1b44VJdNk822GX4cL3VzCSaI9s8-A6VBjJtHSwhzUvk-f22xy-nYf17iFX5vXHbOze9oyjYdXtOgFzkRUA2EhC3l-~uX1SVQScxARswAn-QOMYyxsewvDNP3MoU2sWG~8D5Bl9LX9-KeLPV1AvaA4p~RCNF1W-LILzCffS9r4tgDxavfrSCuZtYDOiWSPcjkVgb5Iuxow__" />
                </div>
            </div>
            <div className='flex absolute left-[335px] bottom-20 text-gray' style={{ fontFamily: "var(--font-jost)" }}>
                <div>
                    QuillAudits  -&gt; Resources -&gt;
                </div>
                <div className='text-white'>
                    &nbsp;Case Studies
                </div>
            </div>
        </div>
    )
}

export default Introduction