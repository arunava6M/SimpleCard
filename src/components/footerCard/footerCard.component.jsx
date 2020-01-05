import React from 'react' ;
import './footerCard.style.scss';
const FooterCard =()=>(
    <div className='footerCard'>
        <div className='prodImage'>
            <img alt='Product' src='https://ii1.pepperfry.com/media/catalog/product/b/l/800x880/black---brown-wooden-working--retro-telephone-by-weald-heritage-black---brown-wooden-working--retro--7c8md3.jpg' />
        </div>
        <div className='prodInfo'>
            <div className='prodName'>OnePlus 30T</div>
            <span className='reviews'>
            12k Reviews
            </span>
        </div>
        
    </div>
);

export default FooterCard;