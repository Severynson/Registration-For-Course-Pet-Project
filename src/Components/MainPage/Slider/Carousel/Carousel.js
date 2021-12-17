import { useState, useEffect, Children, cloneElement } from 'react';
import styles from './Carousel.module.css'

const arrowLeft = <svg xmlns="http://www.w3.org/2000/svg" className={styles["svgIconLeft"]} fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
</svg>;

const arrowRight = <svg xmlns="http://www.w3.org/2000/svg" className={styles["svgIconRight"]} fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>;

const pageWidth = 900;

const Carousel = ({children}) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const handleLeftArrowClick = () => {
        console.log('<-- slide <--')
        setOffset((currentOffset) => {
            const newOffset = currentOffset + pageWidth
            console.log(newOffset)
            return Math.min(newOffset, 0);
        })
    }
    const handleRightArrowClick = () => {
        console.log('--> slide -->')
        setOffset((currentOffset) => {
            const newOffset = currentOffset - pageWidth
            const maxOffset = -(pageWidth * (pages.length - 1))
            console.log(newOffset)
            return Math.max(newOffset, maxOffset);
        })
    }

    useEffect(() => {
        setPages(

            Children.map(children, (child) => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: '100%',
                        maxWidth: '100%',
                    },
                })
            })
        )
    }, []);

return (
    <div className={styles["main-container"]}>
        <div className={styles.arrow} onClick={handleLeftArrowClick}>{arrowLeft}</div>
        <div className={styles.window}>
            <div className={styles["all-pages-container"]}
            style={{
                transform: `translateX(${offset}px)`
            }}
            >{pages}</div>
        </div>
        <div className={styles.arrow} onClick={handleRightArrowClick}>{arrowRight}</div>
    </div>
)
}

export default Carousel;