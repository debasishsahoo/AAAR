import React, { useState } from "react";
import './card.css'

const Card = () => {

    const demoname = 'Your Name'

    const demoimg = 'https://th.bing.com/th/id/R.17bfdd845df1440c98a5cfcdeedd633f?rik=u%2bTNThBSlaIVZA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_155117.png&ehk=egteo%2fJ8IV6AkqZ2Nlmota2csGEWyhjQbas775TyeHo%3d&risl=&pid=ImgRaw&r=0'

    const [name, setName] = useState(demoname);
    const [img, setImg] = useState(demoimg);

    const Male = () => {
        setName('Debasish Sahoo')
        setImg('https://www.w3schools.com/howto/img_avatar.png')
    }
    const FeMale = () => {
        setName('Anjani Pandit')
        setImg('https://www.w3schools.com/howto/img_avatar2.png')
    }

    return (
        <>
            <h2>Card</h2>
            <div className="card">
                <img src={img} alt="Avatar" style={{ width: '50%' }} />
                <div className="container">
                    <h4><b>{name}</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
            <div className="card">
                <button className="button" onClick={Male}>Male</button>
                <button className="button" onClick={FeMale}>FeMale</button>
            </div>
        </>
    );

}

export default Card