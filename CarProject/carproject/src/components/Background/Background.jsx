import video1 from '../../assets/video1.mp4';
import img1 from '../../assets/image1.png';
import img2 from '../../assets/image2.png';
import img3 from '../../assets/image3.png';

function Background({playStatus,heroCount}){
    if(playStatus){
        return <div className=''>
        <video className='relative  z-0' autoPlay loop muted>
            <source  src={video1} type='video/mp4' />
        </video>
        </div>
    }
    else if(heroCount==0){
        return <div  className='relative h-[9vh] w-[99vw]  z-0'> 
        <img  src={img1} className='object-cover' alt="Image1 Not Found." />
        </div>
    }
    else if(heroCount==1){
        return<div className='relative h-[99vh] w-[99vw] z-0'>
        <img src={img2} className='object-cover'  alt="Image2 Not Found" />
        </div>
    }
    else if(heroCount==2){
       return <div className='relative h-[86vh] w-[99vw] z-0'>
       <img src={img3} className='object-cover'  alt="Image3 Not Found" />
       </div>
    }
}

export default Background;