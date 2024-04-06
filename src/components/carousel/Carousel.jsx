import './carousel.scss'
import ArrowRight from '../../assets/chevron_carousel_right.png'
import ArrowLeft from '../../assets/chevron_carousel_left.png'
import { useState } from 'react'

/**
 * A carousel component that displays a slider of images.
 * 
 * @param {Object} props - The component props.
 * @param {string[]} props.imageSlider - An array of image URLs for the slider.
 * @returns {JSX.Element} The carousel component.
 */
export default function Slider({ imageSlider }) {

    const [currentIndex, setCurrentIndex] = useState(0)

    /**
     * Displays the next slide in the slider.
     */
    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if (currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    /**
     * Displays the previous slide in the slider.
     */
    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if (currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

    return (
        <section style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }} className='carousel'>
            {imageSlider.length > 1 &&
                <>
                    <img
                        className='carousel_arrow carousel_arrow_right'
                        src={ArrowRight}
                        alt="show next slider"
                        onClick={nextSlide}
                    />
                    <img
                        className='carousel_arrow carousel_arrow_left'
                        src={ArrowLeft}
                        alt="show previous slider"
                        onClick={prevSlide}
                    />
                    {document.body.clientWidth > 768 && <p className='slideCount'>{currentIndex + 1} / {imageSlider.length}</p>}

                </>
            }
        </section>
    )
}
