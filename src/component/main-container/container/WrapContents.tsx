import * as React from 'react'
import { inject, observer } from 'mobx-react'

import { MAIN_MENU } from '@src/Constants'

import WrapperOfHome from './home/WrapperContent'
import WrapperOfLearning from './learning/WrapperContent'
import WrapperOfManager from './manager/WrapperContent'

@inject((stores: any) => ({
   tabMenu: stores.common.menu.tabMenu,
}))
@observer
export default class WrapContents extends React.Component<any, {}> {
   render() {
      return ((props: any) => {
         switch (props.tabMenu.key) {
            case MAIN_MENU.HOME:
               return <WrapperOfHome />
            case MAIN_MENU.LEARNING:
               return <WrapperOfLearning />
            case MAIN_MENU.MANAGER:
               return <WrapperOfManager />
         }

         return null
      })(this.props)
   }
}
