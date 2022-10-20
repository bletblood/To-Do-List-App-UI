import React from 'react'

import Grid from '@mui/material/Unstable_Grid2';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const RenderList = props => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
      };
      
    return (
        <Grid container spacing={2}>
            <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Today Tasks:" />
                    </FormGroup>
                </ListSubheader>
            }
            >

                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Starred" secondary="Sample text" />
                            <Switch />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Starred" secondary="Sample text" />
                            <Switch />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Starred" secondary="Sample text" />
                            <Switch defaultChecked />

                        </ListItemButton>
                    </List>
                </Collapse>

                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Inbox" />
                    <ExpandMore />
                    {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                </ListItemButton>
                <Collapse timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Grid>
    )
}

export default RenderList