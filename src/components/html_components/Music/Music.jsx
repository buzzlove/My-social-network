import React from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Music = () => {
    return(
        <div>
            Музыка

            <AudioPlayer
                autoPlay
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"

                // other props here
            />
        </div>
    )
}

export default Music