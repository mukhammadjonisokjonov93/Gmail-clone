import React from 'react';
import { Drawer } from '@mui/material';
import SideBarContent from "./SideBarContent";

const SideBar = ({ openDrawer }) => {
  return (
    <Drawer
    anchor='left'
    open={openDrawer}
    hideBackdrop={true}
    ModalProps={{
      keepMounted: true
    }}
    variant="persistent"
    sx={{
      '& .MuiDrawer-paper': {
        marginTop: '64px',
        paddingLeft: '15px',
        paddingTop: '10px',
        width: 235,
        background: '#f5f5f5',
        borderRight: 'none',
        height: 'calc(100vh - 64px)'
      }
    }}
    >
      <SideBarContent />
    </Drawer>
  )
}

export default SideBar;