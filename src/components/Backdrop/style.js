import React from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  height: 100%;
  position: fixed;
  background: rgba(0,0,0, 0.3);
`
export default Backdrop
