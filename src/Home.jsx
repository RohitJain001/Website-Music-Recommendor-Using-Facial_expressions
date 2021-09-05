import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
//import 'react-h5-audio-player/lib/styles.less' Use LESS
//import 'react-h5-audio-player/src/styles.scss' Use SASS

const Home=()=>{
    return(
    <>
        <div className="container-fluid">
            <div className="Row">
                <div className="col-5 mx-auto">
                    <div className="row">
                        <div class="col-md-6 mt-5 pt-5 order-2 order-lg-1">
                            //first dabba 
                            <AudioPlayer
                            autoPlay
                            src="C:/Users/DELL/Desktop/sep/src/songs/brown.mp4"
                            onPlay={e => console.log("onPlay")}
                            // other props here
                        />
                        </div>
                    </div>
                    <div className="col-md-6 pt-2 mt-3 order-lg-2 order-1">
                        /* second dabba */
                    </div>
                </div>
            </div>
        </div>
    </>
        
    )
};
export default Home;