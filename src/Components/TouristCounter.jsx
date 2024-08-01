import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './touristCounter.css';

const TouristCounter = () => {
    // const [count, setCount] = useState(false);

    return (
        <section className='mt-20'>
            <div className="text-border w-fit mx-auto">
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center w-auto lg:w-[36rem] mx-auto px-8 py-3 capitalize'>Our customers, destinations and tours</h1>
            </div>
            <div className='background-image flex justify-center items-center mt-8'>
                <div className='content count-border mx-3'>
                    <div className="p-0 my-6 dark:bg-gray-100 dark:text-gray-800">
                        <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">
                            <CountUp
                                start={0}
                                end={100}
                                duration={3}
                                delay={0}
                                separator=" "
                                decimals={3}
                                decimal=","
                                prefix="Customers "
                                suffix=" +"
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                            >
                                {({ countUpRef, start }) => (
                                    <ScrollTrigger onEnter={start}>
                                        <div>
                                            <div className="flex overflow-hidden rounded-lg dark:bg-gray-50 dark:text-gray-800">
                                                <div className="flex items-center justify-center px-4 dark:bg-violet-600 dark:text-gray-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-green-600">
                                                        <path d="M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z"></path>
                                                        <path d="M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z"></path>
                                                    </svg>
                                                </div>
                                                <div className="flex items-center justify-between flex-1 p-3">
                                                    <p className="text-2xl font-semibold"><span ref={countUpRef} /></p>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollTrigger>
                                )}
                            </CountUp>

                            <CountUp
                                start={0}
                                end={99}
                                duration={3}
                                delay={0}
                                separator=" "
                                decimals={0}
                                decimal=","
                                prefix="Destinations "
                                suffix=" +"
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                            >
                                {({ countUpRef, start }) => (
                                    <ScrollTrigger onEnter={start}>
                                        <div className="flex overflow-hidden rounded-lg dark:bg-gray-50 dark:text-gray-800">
                                            <div className="flex items-center justify-center px-4 dark:bg-violet-600 dark:text-gray-100">
                                                <img src="https://i.ibb.co/vkT9CG1/location-map-icon-gps-pointer-260nw-761453428.webp" alt="" className='w-12 h-12' />
                                            </div>
                                            <div className="flex items-center justify-between flex-1 p-3">
                                                <p className="text-2xl font-semibold" ref={countUpRef}></p>
                                            </div>
                                        </div>
                                    </ScrollTrigger>
                                )}
                            </CountUp>
                            <CountUp
                                start={0}
                                end={99}
                                duration={3}
                                delay={0}
                                separator=" "
                                decimals={0}
                                decimal=","
                                prefix="Tours "
                                suffix=" +"
                                onEnd={() => console.log('Ended! 👏')}
                                onStart={() => console.log('Started! 💨')}
                            >
                                {({ countUpRef, start }) => (
                                    <ScrollTrigger onEnter={start}>
                                        <div className="flex overflow-hidden rounded-lg dark:bg-gray-50 dark:text-gray-800">
                                            <div className="flex items-center justify-center px-4 dark:bg-violet-600 dark:text-gray-100">
                                                <img src="https://i.ibb.co/s9ZW9mT/color-icon-for-tours-vector.jpg" alt="" className='w-8 h-8' />
                                            </div>
                                            <div className="flex items-center justify-between flex-1 p-3">
                                                <p className="text-2xl font-semibold" ref={countUpRef}></p>
                                            </div>
                                        </div>
                                    </ScrollTrigger>
                                )}
                            </CountUp>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TouristCounter;

/**
 * 
 * 
 * 
 * Tour Types
 */