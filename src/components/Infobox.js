import React from 'react';
import './Infobox.css';
import {Card, CardContent, Typography} from '@mui/material';

function Infobox({title, cases, total, active, ...props}) {
  return (
        <Card
            onClick={props.onClick} className={`infobox ${active && 'infobox-selected'}`}
        >
            <CardContent>
                <Typography className='infobox_title' color="textSecondary">{title}</Typography>
                
                <h2 className='infobox_cases'>{cases}</h2>
                
                <Typography className='infobox_total' color="textSecondary">{total} Total</Typography>
            </CardContent>
        </Card>
  )
}

export default Infobox