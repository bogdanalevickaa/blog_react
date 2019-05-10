import React from 'react';

const BlockSocialNetworks = () =>{
    return(
        <div className="block_social_networks">
            <div className="block_social_networks_name">Мы в соц. сетях</div>
            <a href="">
                <div className="social_network img">
                    <img src="img/VK.png"/>
                </div>
            </a>
            <a href="">
                <div className="social_network img">
                    <img src="img/TWIT.png"/>
                </div>
            </a>
            <a href="">
                <div className="social_network img">
                    <img src="img/FB.png"/>
                </div>
            </a>
            <a href="">
                <div className="social_network img">
                    <img src="img/G.png"/>
                </div>
            </a>
            <a href="">
                <div className="social_network img">
                    <img src="img/inst.png"/>
                </div>
            </a>
            <a href="">
                <div className="social_network img">
                    <img src="img/rss.png"/>
                </div>
            </a>
            <a href="">
                <div className="social_network img">
                    <img src="img/mail.png"/>
                </div>
            </a>
        </div>
    )
}

export default BlockSocialNetworks;