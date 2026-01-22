import video1 from '../../assets/video1.mp4';
import img1 from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import img3 from '../../assets/image3.png';

function Background({playStatus,HeroCount}){
    if(playStatus){
        return <div className='min-h-40 min-w-5xl'>
        <video  autoPlay loop muted>
            <source src={video1} type='video/mp4' />
        </video>
        </div>
    }
    else if(HeroCount===0){
        return <div className='min-h-2xl min-w-2xl'> 
        <img  src={img1} alt="Image1 Not Found." />
        </div>
    }
    else if(HeroCount===1){
        return<div className='min-h-2xl min-w-2xl'>
        <img src={img2}  alt="Image2 Not Found" />
        </div>
    }
    else if(HeroCount===2){
       return <div className='min-h-2xl min-w-2xl'>
       <img src={img3}  alt="Image3 Not Found" />
       </div>
    }
}

export default Background;