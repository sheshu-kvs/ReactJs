import arow_btn from '../../assets/arrow_btn.png'
import pause from '../../assets/pause_icon.png';
import play from '../../assets/play_icon.png';


function Hero({heroData,HeroCount, playStatus, SetPlayStatus,SetHeroCount}){
    return <div className='absolute top-30 z-50   text-white'>
        <div className='mt-36 font-medium text-7xl'>
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <div className= ' mt-16 flex justify-between items-center px-3 py-1 rounded-3xl text-black bg-white '>
            <p>Explore the Features</p>
            <img src={arow_btn} alt="" />
        </div>
        <div className=' '>
            <ul className='text-white mt-48 '>
                <li  onClick={()=>
                    SetHeroCount(0)
                } className={HeroCount===0?"hero-dot-orange":"hero-dot"}></li>
                <li  onClick={()=>
                    SetHeroCount(1)
                }  className={HeroCount===1?"hero-dot-orange":"hero-dot"}></li>
                <li  onClick={()=>
                    SetHeroCount(2)
                }  className={HeroCount===2?"hero-dot-orange":"hero-dot"}></li>
            </ul>
             <div className='fixed bottom-8 right-8'>
                <p>See the Video</p>
                <img  onClick={()=>
                   SetPlayStatus(!playStatus)} src={playStatus?pause:play}
                alt="" />
                
            </div>
        </div>
        
    </div>
}

export default Hero;