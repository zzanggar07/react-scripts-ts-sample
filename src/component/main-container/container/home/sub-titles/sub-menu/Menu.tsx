import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { SUB_MENU_HOME_PROPS, SUB_MENU_HOME } from '@src/Constants'

@inject((stores: any) => ({
   menu: stores.home.menu,
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
                        props.menu.tabMenu.key === SUB_MENU_HOME.DASHBOARD
                           ? 'on'
                           : ''
                     }
                     onClick={() =>
                        props.menu
                           .setTabMenu(
                              SUB_MENU_HOME_PROPS.get(SUB_MENU_HOME.DASHBOARD),
                           )
                           .then((r: any) => {
                              console.log(r)
                           })
                     }
                  >
                     {SUB_MENU_HOME_PROPS.get(SUB_MENU_HOME.DASHBOARD).title}
                  </div>
                  <div
                     className={
                        props.menu.tabMenu.key === SUB_MENU_HOME.LEARNING_TOOL
                           ? 'on'
                           : ''
                     }
                     onClick={() =>
                        props.menu
                           .setTabMenu(
                              SUB_MENU_HOME_PROPS.get(
                                 SUB_MENU_HOME.LEARNING_TOOL,
                              ),
                           )
                           .then((r: any) => {
                              console.log(r)
                           })
                     }
                  >
                     {
                        SUB_MENU_HOME_PROPS.get(SUB_MENU_HOME.LEARNING_TOOL)
                           .title
                     }
                  </div>
                  <div
                     className={
                        props.menu.tabMenu.key === SUB_MENU_HOME.TAGGING_GUIDE
                           ? 'on'
                           : ''
                     }
                     onClick={() =>
                        props.menu
                           .setTabMenu(
                              SUB_MENU_HOME_PROPS.get(
                                 SUB_MENU_HOME.TAGGING_GUIDE,
                              ),
                           )
                           .then((r: any) => {
                              console.log(r)
                           })
                     }
                  >
                     {
                        SUB_MENU_HOME_PROPS.get(SUB_MENU_HOME.TAGGING_GUIDE)
                           .title
                     }
                  </div>
                  <div
                     className={
                        props.menu.tabMenu.key === SUB_MENU_HOME.STORAGE_INFO
                           ? 'on'
                           : ''
                     }
                     onClick={() =>
                        props.menu
                           .setTabMenu(
                              SUB_MENU_HOME_PROPS.get(
                                 SUB_MENU_HOME.STORAGE_INFO,
                              ),
                           )
                           .then((r: any) => {
                              console.log(r)
                           })
                     }
                  >
                     {SUB_MENU_HOME_PROPS.get(SUB_MENU_HOME.STORAGE_INFO).title}
                  </div>
               </div>
            </React.Fragment>
         )
      })(this.props)
   }
}
