import Head from 'next/head'
import { Fragment } from 'react'
import SearchFormArea from '../components/searchformarea'
import Header from '../components/header'
import ContentArea from './../components/content';

export default function Home() {
  return (
    <div>
      <Head>

        <link href="/style.css" rel="stylesheet"/>
        <link href="/css/responsive/responsive.css" rel="stylesheet"></link>

      </Head>
      <Fragment>
        <SearchFormArea />
        <Header />
        <ContentArea />
      </Fragment>
      <script src="/js/jquery/jquery-2.2.4.min.js"></script>
      <script src="/js/bootstrap/popper.min.js"></script>
      <script src="/js/bootstrap/bootstrap.min.js"></script>
      <script src="/js/others/plugins.js"></script>
      <script src="/js/active.js"></script>
    </div>
  )
}
