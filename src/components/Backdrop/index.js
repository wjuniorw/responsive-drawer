import React from 'react'
import Backdrop from './style'

const BackDrop = ({ closeDrawer }) => (
  <Backdrop onClick={() => closeDrawer()}/>
)

export default BackDrop
