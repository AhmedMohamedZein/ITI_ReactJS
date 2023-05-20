import { useParams } from 'react-router-dom';
let Details = () => {
    console.log(useParams())
    let id=useParams().id;
    return (
        <div className='my-container m-auto d-flex align-items-center flex-column justify-content-center'>
        <div class="head">
            <img class="imgg" src="../imgPM.jpeg" alt="img" />
            <h1 className='nam'>Ahmed Zein</h1>
            <p className='age'>23 y</p>
            <p className='data'>Back end </p>
            <p className='data'>ITI</p>

        </div>
    </div>

    )
}
export default Details;