import React from 'react'
import { Grid, Container } from '@mui/material';
import DefaultLayout from '../../layouts/default';
import './index.css';


export default function Homepage() {

  return (
    <DefaultLayout>
      <div className='homepage-wrapper' style={{ color: "#000000" }}>
          <Container maxWidth="xl">
          <Grid container spacing={5} sx={{ mt: 3}} style={{ marginTop: "50px", paddingLeft: "40px" }}>
                <h2>Land cover map of Rwanda  <br></br></h2>
                <p style={{ textAlign: "left" }}>Land cover map of Rwanda was generated using Landsat Imagery of 30m spatial resolution. It has classified into six classes which are Water body, Wetland, Cropland, Settlement, Grassland and Forestland</p>

                {/* <p style={{ textAlign: "left" }}>The World Health Organization (WHO) published the new Global Air Guidelines (WHO, 2021), which aim to save millions of lives from air pollution. furthermore, Rwanda country, through the Ministry of Environment (MoE) has set out the initiative of reducing the amount of  gases emitted from Rwanda  for avoiding the pollution in the atmosphere.  Therefore, monitoring air pollution has been taken into account by Rwanda Space Agency (RSA) in order to support the Sustainable Development Goals(SDGs) by providing the threshold areas for human wellbeing.</p> */}

                {/* <h2>Image detail:  <br></br></h2>
                <p>Area of Interest: Rwanda </p> <br></br>
                <p style={{ textAlign: "left" }}>Spatial resolution: 30m</p>
                <p style={{ textAlign: "left" }}>Year: 2021 </p>
                <p style={{ textAlign: "left" }}>Satellite type: Landsat 8 </p>
                <h2>Methodology  <br></br></h2>
                <p style={{ textAlign: "left" }}>The TROPOspheric Monitoring Instrument (TROPOMI) onboard the Copernicus Sentinel-5 Precursor (S-5P) platform was used to detect the concentrations of NO2, CO, CH4, HCHO, O3 and SO2. The Copernicus Sentinel-5P mission is to perform atmospheric measurements with high Spatio-temporal resolution, to be used for air quality, ozone & UV radiation, and climate monitoring & forecasting.</p>
                <p style={{ textAlign: "left" }}>The project of monitoring trace gases presents Formaldehyde (HCHO), Methane (CH4), Ozone (O3) Sulfur dioxide (SO2), Carbon monoxide(CO), and Nitrogen dioxide (NO2) vertical column retrieval algorithm implemented in the S-5P operational processor, the analysis was implemented using Python code run in a Jupyter Notebook environment. The Jupyter Notebook is an open source web application used to create and share documents that contain codes, equations, visualizations, and text. The concentrations of monitored gases were measured in molecules per square meter (mol/m2) which is a unit used for tropospheric vertical column. </p> */}
                <h3>Image detail:  <br></br></h3>
                <p style={{ textAlign: "left" }}>
                    <ul>
                        <li>Area of Interest: Rwanda</li>
                        <li>Spatial resolution: 30m</li>
                        <li>Year: 2021</li>
                        <li>Satellite type: Landsat 8</li>
                    </ul>
                </p>
            </Grid>
          </Container>
      </div>
    </DefaultLayout >
  )
}
