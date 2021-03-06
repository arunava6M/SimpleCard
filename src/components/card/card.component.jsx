import React from 'react';
import './card.style.scss';
import { ReactComponent as Heart } from '../../assets/heart.svg';
import { ReactComponent as HeartFilled } from '../../assets/heartFilled.svg';
import FooterCard from '../footerCard/footerCard.component';

class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            views: 234,
            reviews: '12k',
            loveCounts: 120,
            love: false
        }
    }

    toggleLove = () => {
        this.setState({
            love: !(this.state.love)
        }, () => {
            this.state.love ? this.setState({ loveCounts: this.state.loveCounts + 1 }) :
                this.setState({ loveCounts: this.state.loveCounts - 1 });
        });
    }
    render() {
        return (
            <div className='card' >
                <div className='postHeader'>
                    It's all about that amazing Dial and Battery
                </div>
                <div className='postInfo'>
                    <div className='posterPic'>
                        <img alt='person' src='https://tedconfblog.files.wordpress.com/2015/01/tomato_eyes.png?w=900' />
                    </div>
                    <div className='posterInfo'>
                        <div className='posterNameReviews'>
                            <div className='posterName'>
                                Arunava Mondal
                        </div>
                            <span className='reviews'>
                                {this.state.reviews} Reviews
                        </span>
                        </div>

                        <div className='views'>
                            {this.state.views} views
                    </div>
                    </div>
                </div>
                <div className='postPara'>
                    <p>Even with regular flagship specs, OnePlus Land-phones typically have better performance than the top flagships from big companies. The result is a telephone that feels faster and more powerful than any other Land-phone I've used this year..<span className='readMore' style={{ color: 'blue' }}>(read more)</span></p>
                </div>
                <div className='postPic'>
                    <img alt='Post' src={'https://englishlive.ef.com/blog/wp-content/uploads/sites/2/2015/05/english-telephone-phrases-1024x683.jpg'} />
                </div>
                <div className='postFooter'>
                    <div className='likes'>
                        <div className='heartContainer' onClick={this.toggleLove}>
                            {this.state.love ? <HeartFilled /> : <Heart />}
                        </div>
                        <div className='loveCounts'>
                            {this.state.loveCounts}
                        </div>
                    </div>
                    <div className='otherPost'>
                        <FooterCard />
                    </div>
                </div>
            </div>
        );
    }


}

export default Card;