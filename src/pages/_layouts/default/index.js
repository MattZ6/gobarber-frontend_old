import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from '~/pages/_layouts/default/styles';

import Header from '~/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
