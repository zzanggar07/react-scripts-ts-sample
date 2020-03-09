import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { SUB_MENU_MANAGER } from '@src/Constants'
import WrapperLearningType from './type/Wrapper'
import WrapperLearningModel from './model/Wrapper'
import WrapperLearningDataset from './dataset/Wrapper'

@inject((stores: any) => ({
   menu: stores.manager.menu,
}))
@observer
export default class Wrapper extends React.Component<any, {}> {
   render() {
      return ((props: any) => {
         switch (props.menu.tabMenu.key) {
            case SUB_MENU_MANAGER.LEARNING_TYPE:
               return <WrapperLearningType />
            case SUB_MENU_MANAGER.LEARNING_MODELS:
               return <WrapperLearningModel />
            case SUB_MENU_MANAGER.LEARNING_DATASET:
               return <WrapperLearningDataset />
         }

         return null
      })(this.props)
   }
}
