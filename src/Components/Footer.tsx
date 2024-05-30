import { ReactComponent as HomeIcon } from '../Assets/home-icon.svg';
import { ReactComponent as BibleIcon } from '../Assets/bible-icon.svg';
import { ReactComponent as ChatIcon } from '../Assets/chat-icon.svg';
import { Link } from 'react-router-dom';
export default function Footer(){
    return(
        <footer className="flex flex-row justify-around fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4">
            <Link to='/'>
                <HomeIcon className='w-12 h-12'/>
            </Link>
            <Link to='/bible'>
                <BibleIcon className='w-12 h-12'/>
            </Link>
            <Link to='/chat'>
                <ChatIcon className='w-12 h-12'/>
            </Link>
        </footer>
    )
}