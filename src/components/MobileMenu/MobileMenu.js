/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink style={{'--offset': 1}} href="/sale">Sale</NavLink>
          <NavLink style={{'--offset': 2}} href="/new">New&nbsp;Releases</NavLink>
          <NavLink style={{'--offset': 3}} href="/men">Men</NavLink>
          <NavLink style={{'--offset': 4}} href="/women">Women</NavLink>
          <NavLink style={{'--offset': 5}} href="/kids">Kids</NavLink>
          <NavLink style={{'--offset': 6}} href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <SubLink style={{'--offset': 7}} href="/terms">Terms and Conditions</SubLink>
          <SubLink style={{'--offset': 8}} href="/privacy">Privacy Policy</SubLink>
          <SubLink style={{'--offset': 9}} href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop-inital);
  display: flex;
  justify-content: flex-end;
  animation: change-opacity 300ms;
  animation-fill-mode: forwards;
  
  @keyframes change-opacity {
    from {
      background: var(--color-backdrop-inital);
    }
    to {
      background: var(--color-backdrop);
    }
  }
`;


const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  animation: move-left 300ms cubic-bezier(.03,.84,.61,.93);
  animation-delay: 200ms;
  animation-fill-mode: backwards;
  
  @keyframes move-left {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  
  & ${NavLink},
  & ${SubLink} {
    opacity: 0;
    animation: opacity-change 300ms calc(300ms + var(--offset) * 50ms);
    animation-fill-mode: forwards;
    
    @keyframes opacity-change {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }    
  }
`;


export default MobileMenu;
