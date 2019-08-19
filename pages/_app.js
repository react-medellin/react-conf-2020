import React from 'react';
import App from 'next/app';
import GlobalStyles from '../components/GlobalStyles';
import 'modern-normalize/modern-normalize.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
