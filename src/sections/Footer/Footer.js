import './Footer.css'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import data from '../Header/data';
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from 'react';
export default function Footer() {
    const [like, setlike] = useState(0);
    const [likecol, setlikecol] = useState(false);
    const action = () => {
        if (like == 0) {
            setlike(like + 1);
            setlikecol(true);
            localStorage.setItem('likecount', JSON.stringify(like + 1));
            localStorage.setItem('likestate', JSON.stringify(true));
        }
    }
    useEffect(() => {

        const storedLikeState = localStorage.getItem('likestate');
        const likecount = localStorage.getItem('likecount');
        if (storedLikeState) {
            setlikecol(JSON.parse(storedLikeState));
            setlike(JSON.parse(likecol));
        }
        const storedLikeCount = localStorage.getItem('likecount');
        if (storedLikeCount) {
            setlike(JSON.parse(storedLikeCount));
        }
    }, []);
    return (

        <footer id='#footer'>
            <div className='footer-container'>
                <div className='footer-left'>
                    <h4><FaPhoneAlt id='icon' /><a href='tel:+91 7651961433'>Call me at +91 7651961433</a></h4>
                    <p><MdEmail id='icon' />anjalirawat3443@gmail.com</p>
                </div>
                <div className='footer-mid'>
                    <p> Made with <button onClick={action}>{likecol ? <FaHeart color='red' size={20} /> : <FaRegHeart color='red' size={20} />}</button><span>{like}</span>  by Anjali.</p>
                </div>
                <div className='footer-right'>
                    {
                        data.map(item => <a key={item.id} href={item.link} target='_blank' rel='nonopener noreferrer'>{item.icon}</a>)
                    }
                </div>
            </div>
        </footer>
    )
}