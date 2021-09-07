import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LinkStyled = styled.a`
  color: ${(props) => props.theme.colors.link};
  align-self: center;
`;

const Link = ({ children, href }) => (
  <LinkStyled href={href} target="_blank" rel="noopener noreferrer">{children}</LinkStyled>
);

Link.propTypes = {
  children: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
