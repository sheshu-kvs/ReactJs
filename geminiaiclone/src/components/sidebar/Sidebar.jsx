import { assets } from '../../assets/assets.js'

function Sidebar(){
    return (
        <div>
            <div className="">
                <img className='h-8' src={assets.menu_icon} alt="" />
                <div className='h-12 w-full flex  items-center hover:bg-gray-400 rounded-2xl focus:border-blue-400'>
                    <img src={assets.plus_icon} alt="" />
                    <p>New Chat</p>
                </div>
                <div>
                    <p>Recent</p>
                </div>
                <div>
                    <img src={assets.message_icon} alt="" />
                    <p>What is React..</p>
                </div>
            </div>
            <div className="">
                <div>
                    <img src={assets.question_icon} alt="" />
                    <p>Help</p>
                </div>
                  <div>
                    <img src={assets.history_icon} alt="" />
                    <p>Activity</p>
                </div>
                  <div>
                    <img src={assets.setting_icon} alt="" />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
}


export default Sidebar

