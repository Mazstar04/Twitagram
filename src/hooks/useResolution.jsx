import { useEffect, useState } from 'react'
import { breakPointInNumber } from '../breakpoint';


function useResolution() {

    const tabletBreakPoint = breakPointInNumber('tablet');
    const laptopBreakPoint = breakPointInNumber('laptop');

    const [isTabletAndAbove, setIsTabletAndAbove] = useState(window.innerWidth > tabletBreakPoint);
    const [isLaptopAndAbove, setIsLaptopAndAbove] = useState(window.innerWidth > laptopBreakPoint);
    const [isTabletOnly, setIsTabletOnly] = useState(false);


    useEffect(() => {

        // for isLaptopAndAbove
        if (window.innerWidth > laptopBreakPoint) {
            setIsLaptopAndAbove(true);
        } else {
            setIsLaptopAndAbove(false);
        }

        // for isTabletAndAbove
        if (window.innerWidth > tabletBreakPoint) {
            setIsTabletAndAbove(true);
        } else {
            setIsTabletAndAbove(false);
        }

        // for isTabletOnly
        if (window.innerWidth >= tabletBreakPoint && window.innerWidth < laptopBreakPoint) {
            setIsTabletOnly(true);
        } else {
            setIsTabletOnly(false);
        }

        const updateMedia = () => {


            // for isLaptopAndAbove
            if (window.innerWidth > laptopBreakPoint) {
                setIsLaptopAndAbove(true);
            } else {
                setIsLaptopAndAbove(false);
            }

            // for isTabletAndAbove
            if (window.innerWidth > tabletBreakPoint) {
                setIsTabletAndAbove(true);
            } else {
                setIsTabletAndAbove(false);
            }

            // for isTabletOnly
            if (window.innerWidth >= tabletBreakPoint && window.innerWidth < laptopBreakPoint) {
                setIsTabletOnly(true);
            } else {
                setIsTabletOnly(false);
            }
        };

        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);


    return { isTabletAndAbove, isTabletOnly, isLaptopAndAbove }
}

export default useResolution
