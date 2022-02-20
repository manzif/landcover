import React from 'react';
// import Lottie from 'react-lottie';
// import { useSelector } from "react-redux";
import MapViewer from '../../components/MapViewer/index'
import DefaultLayout from '../../layouts/default';
// import loadingData from '../../components/data/icon/loading.json'
import './index.css';

export default function MapView() {

  // const state = useSelector((state) => state.layers);
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: loadingData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   },
  // };

  return <DefaultLayout>
    <div className='container-shadow mapview-wrapper position-relative'>
      {/* { state.fetchLayer ? 
        <div>
          <Lottie
            options={defaultOptions}
            height={400}
            width={400}
          />
        </div>
        : */}
        <div className='map-container'>
        <MapViewer />
      </div>
      {/* } */}

    </div>
  </DefaultLayout>;
}
