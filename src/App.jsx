import { Global } from '@emotion/react';

import { globalStyles } from 'theme';
import { homepageCopy } from 'assets';

import {
  Logo, Header, Text, Link,
} from 'components';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <Header>
      <Logo />
      <Text>{homepageCopy.title}</Text>
      <Link href={homepageCopy.link.source}>
        {homepageCopy.link.text}
      </Link>
    </Header>
  </>
);

export default App;
