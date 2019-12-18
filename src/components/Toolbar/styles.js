import styled from 'styled-components'

export const ToolbarStyled = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  position: fixed;
  background: #22bad9;
`
export const ToolbarNav = styled.nav`
  height: 100%;
  display: flex;
  padding: 0 1rem;
  align-items: center;
`
export const ToolbarLogo = styled.div`
  margin-left: 1rem;
  @media (min-width: 769px) {
    margin-left: 0;
  }
  a {
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
  }
`
export const ToolbarNavItens = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  li {
    padding: 0 0.5rem;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover, a:active {
    color: rgb(3, 231, 255);
  }
  @media (max-width: 768px) {
    display: none;
  }
`
