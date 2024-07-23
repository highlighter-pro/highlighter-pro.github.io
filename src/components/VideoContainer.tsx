import React, { useContext } from "react";
import Heading from '@theme/Heading';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
interface VideoContainerProps {
    youtubeId: string;
    title?: string;
    heading?: string,
}

const VideoContainer:React.FC<VideoContainerProps> = (props)=>{
    return (
        <div className="container text--center margin-top--sm">
            <div className="row">
                <div className="col">
                    {props.heading? <Heading as="h2">{props.heading}</Heading>:null}
                    <div className="video-container">
                        <LiteYouTubeEmbed
                            id={props.youtubeId}
                            params="autoplay=1&autohide=1&showinfo=0&rel=0"
                            title={props.title}
                            poster="maxresdefault"
                            webp
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoContainer;