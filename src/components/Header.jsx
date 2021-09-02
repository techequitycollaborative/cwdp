import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.colors.main};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${(props) => props.theme.colors.text};
`;

const Header = ({ children }) => (
  <StyledHeader>{children}</StyledHeader>
);

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Header;
