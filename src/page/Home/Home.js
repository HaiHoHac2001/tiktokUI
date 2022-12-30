import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Video from '~/components/Video';
import { useState, useEffect } from 'react';
import * as videoService from '~/services/videoService';
import { dataVideo } from '~/components/Video/dataVideo';
const cx = classNames.bind(styles);

function Home() {
    const [video, setVideo] = useState([]);

        // useEffect(() => {
        //     fetch('https://tiktok.fullstack.edu.vn/api//videos?type=for-you&page=1')
        //         .then((response) => response.json())
        //         .then((data) => {
        //             console.log(data);
        //         })
        //         .catch((err) => console.error(err));
        // }, []);

        setTimeout(() => {
            return setVideo(dataVideo)
        }, 1000)
        
        // console.log(video)

    return (
        <div className={cx('wrapper')}>
            <Video data={video} nameMusic = {'Hồ Hắc Hải'}/>
        </div>
    );
}

export default Home;
