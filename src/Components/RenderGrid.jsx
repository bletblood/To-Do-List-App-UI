import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import SettingsIcon from '@mui/icons-material/Settings'

const RenderGrid = props => {
    return (
        <Grid container spacing={2}>
            <Grid xs={10} container justifyContent={'flex-start'} alignItems={'center'}>
            To Do
            </Grid>
            <Grid xs={2} container justifyContent={'flex-end'} alignItems={'center'}>
            <SettingsIcon />
            </Grid>
        </Grid>
    )
}

export default RenderGrid