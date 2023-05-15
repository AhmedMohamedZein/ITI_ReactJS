import SliderComponent from "../slider/sliderComponent";
import ResetBox from "../resetBox/resetBoxComponent";
import style from './homeComponent.module.css'

export default function homeComponent(){
    return(
        <div className={style.container}>
            <ResetBox />
            <SliderComponent />
        </div>
    );
} 