import * as React from 'react'
import { inject, observer } from 'mobx-react'
import {
   SUB_MENU_MANAGER_PROPS,
   SUB_MENU_MANAGER,
} from '@src/Constants'

@inject((stores: any) => ({
   menu: stores.manager.menu,
}))
@observer
export default class Menu extends React.Component<any, {}> {
   render() {
      return ((props: any) => {
         return (
            <React.Fragment>
               <div className="sub-menu">
                  <div
                     className={
                        props.menu.tabMenu.key ===
                        SUB_MENU_MANAGER.LEARNING_TYPE
                           ? 'on'
                           : ''
                     }
                     onClick={() =>
                        props.menu
                           .setTabMenu(
                              SUB_MENU_MANAGER_PROPS.get(
                                 SUB_MENU_MANAGER.LEARNING_TYPE,
                              ),
                           )
                           .then((r: any) => {
                              console.log(r)
                           })
                     }
                  >
                     {
                        SUB_MENU_MANAGER_PROPS.get(
                           SUB_MENU_MANAGER.LEARNING_TYPE,
                        ).title
                     }
                  </div>
                  <div
                     className={
                        props.menu.tabMenu.key ===
                        SUB_MENU_MANAGER.LEARNING_MODELS
                           ? 'on'
                           : ''
                     }
                     onClick={() =>
                        props.menu
                           .setTabMenu(
                              SUB_MENU_MANAGER_PROPS.get(
                                 SUB_MENU_MANAGER.LEARNING_MODELS,
                              ),
                           )
                           .then((r: any) => {
                              console.log(r)
                           })
                     }
                  >
                     {
                        SUB_MENU_MANAGER_PROPS.get(
                           SUB_MENU_MANAGER.LEARNING_MODELS,
                        ).title
                     }
                  </div>
                  <div
                     className={
                        props.menu.tabMenu.key ===
                        SUB_MENU_MANAGER.LEARNING_DATASET
                           ? 'on'
                           : ''
                     }
                     onClick={() =>
                        props.menu
                           .setTabMenu(
                              SUB_MENU_MANAGER_PROPS.get(
                                 SUB_MENU_MANAGER.LEARNING_DATASET,
                              ),
                           )
                           .then((r: any) => {
                              console.log(r)
                           })
                     }
                  >
                     {
                        SUB_MENU_MANAGER_PROPS.get(
                           SUB_MENU_MANAGER.LEARNING_DATASET,
                        ).title
                     }
                  </div>
               </div>
            </React.Fragment>
         )
      })(this.props)
   }
}
