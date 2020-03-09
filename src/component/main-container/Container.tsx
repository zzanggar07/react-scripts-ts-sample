import * as React from 'react'
import { Provider } from 'mobx-react'

import Root from '@models/Root'

import ModalWrapper from '@modal/ModalWrapper'
import Notification from '@notify/Notification'

import TopMenu from '@mainContainer/header/TopMenu'
import WrapContents from '@mainContainer/container/WrapContents'
// import Bottom from '@mainContainer/footer/Bottom'

export default class Container extends React.Component<any, {}> {
   render() {
      return (
         <Provider {...Root}>
            <React.Fragment>
               <TopMenu />
               <WrapContents />
               <footer>인공지능 통합 솔루션 ⓒ 2020</footer>
               <ModalWrapper />
               <Notification />
            </React.Fragment>
         </Provider>
      )
   }
}
