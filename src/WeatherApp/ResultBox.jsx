import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import './ResultBox.css'

const ResultBox = ({result}) => {
  return (
    <div className='ResultBox'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {result.humidity > 90 ? '/rain.jpg' : result.temp > 30 ? '/sun.jpg' : '/clouds.jpg'}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {result.city} {result.humidity > 90 ? <BeachAccessIcon /> : result.temp > 30 ? <WbSunnyIcon /> : <CloudIcon />}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
            <p>
                <b>Weather:</b> {result.weather}
            </p>
            <p>
                <b>Wind Speed:</b> {result.wind_speed}
            </p>
            <p>
                <b>Humidity:</b> {result.humidity}
            </p>
            <p>
                The weather temperature is <i>{result.temp}°C </i> but feels like <i>{result.feels_like}°C</i>.
            </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default ResultBox