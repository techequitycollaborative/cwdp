import React from 'react';
import { ThemeProvider } from 'styled-components';

import { themeStyles, GlobalStyles } from './theme';

import { homepageCopy } from './assets';

import {
  Logo, Header, Text, Link,
} from './components';

const App = () => (
  <ThemeProvider theme={themeStyles}>
    <GlobalStyles />
    <Header>
      <Logo />
      <Text>{homepageCopy.title}</Text>
      <Link href={homepageCopy.link.source}>
        {homepageCopy.link.text}
      </Link>
    </Header>
  </ThemeProvider>
);

export default App;
