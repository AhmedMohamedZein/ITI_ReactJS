import style from './sliderComponent.module.css';
import React from 'react';

export default class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
          images: [
            "../../images/1.jpg",
            "../../images/2.jpg",
            "../../images/3.jpg",
            "../../images/4.jpg",
            "../../images/5.jpg"
          ],
          currentIndex: 0,
          isSliding: true,
        };
      }
    
      componentDidMount() {
        this.startSlide();
      }
    
      componentWillUnmount() {
        clearInterval(this.slideInterval);
      }
    
      startSlide = () => {
        this.slideInterval = setInterval(() => {
          this.slideToNext();
        }, 2000);
        this.setState({ isSliding: true });
      };
    
    
      slideToNext = () => {
        const { currentIndex, images } = this.state;
        const newIndex = (currentIndex + 1) % images.length;
        if (newIndex === 0) {
          this.stopSlide();
        } else {
          this.setState({ currentIndex: newIndex });
        }
      };
      
    
      slideToPrev = () => {
        const { currentIndex, images } = this.state;
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        if (newIndex !== images.length - 1) {
          this.setState({ currentIndex: newIndex });
        }
        
        this.stopSlide();
      };
    
      
    stopSlide = () => {
        clearInterval(this.slideInterval);
        this.setState({ isSliding: false });
    };

    render() {
        const { images, currentIndex, isSliding } = this.state;
        return (
          
            <div className={style.container}>
                <img
                    src={images[currentIndex]}
                    alt="Slider Image"
                    className={style.imgStyle}
                />
                <div className={style.buttonsBox}>
                <button onClick={this.slideToPrev}>Prev</button>
                    {isSliding ? (
                        <button onClick={this.stopSlide}>Stop</button>
                    ) : (
                        <button onClick={this.startSlide}>Slide</button>
                )}
                <button onClick={this.slideToNext}>Next</button>
                </div>
            </div>
         
        );
      }
        
}