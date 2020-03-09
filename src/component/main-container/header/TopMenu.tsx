import * as React from 'react'
import { inject, observer } from 'mobx-react'

import { isAdmin } from '@utils/Utility'
import { MAIN_MENU_PROPS, MAIN_MENU } from '@src/Constants'

@inject((stores: any) => ({
   menu: stores.common.menu,
}))
@observer
export default class TopMenu extends React.Component<any, {}> {
   render() {
      return ((props: any) => {
         return (
            <header>
               <div
                  className="logo"
                  onClick={() =>
                     props.menu
                        .setTabMenu(MAIN_MENU_PROPS.get(MAIN_MENU.HOME))
                        .then((r: any) => {
                           console.log(r)
                        })
                  }
               />
               <div className="gnb">
                  <ul>
                     <li
                        className={
                           props.menu.tabMenu.key === MAIN_MENU.HOME
                              ? 'active'
                              : ''
                        }
                        onClick={() =>
                           props.menu
                              .setTabMenu(MAIN_MENU_PROPS.get(MAIN_MENU.HOME))
                              .then((r: any) => {
                                 console.log(r)
                              })
                        }
                     >
                        <i className="fas fa-chart-bar"></i>{' '}
                        {MAIN_MENU_PROPS.get(MAIN_MENU.HOME).title}
                     </li>
                     <li
                        className={
                           props.menu.tabMenu.key === MAIN_MENU.LEARNING
                              ? 'active'
                              : ''
                        }
                        onClick={() =>
                           props.menu
                              .setTabMenu(
                                 MAIN_MENU_PROPS.get(MAIN_MENU.LEARNING),
                              )
                              .then((r: any) => {
                                 console.log(r)
                              })
                        }
                     >
                        <i className="fas fa-graduation-cap"></i>{' '}
                        {MAIN_MENU_PROPS.get(MAIN_MENU.LEARNING).title}
                     </li>
                     <li
                        className={
                           props.menu.tabMenu.key === MAIN_MENU.MANAGER
                              ? 'active'
                              : ''
                        }
                        onClick={() =>
                           props.menu
                              .setTabMenu(
                                 MAIN_MENU_PROPS.get(MAIN_MENU.MANAGER),
                              )
                              .then((r: any) => {
                                 console.log(r)
                              })
                        }
                     >
                        <i className="fas fa-cog"></i>{' '}
                        {MAIN_MENU_PROPS.get(MAIN_MENU.MANAGER).title}
                     </li>
                  </ul>
               </div>
               <div className="setting">
                  {isAdmin()
                     ? '관리자 로그인중입니다.'
                     : '사용자 로그인중입니다.'}
                  {isAdmin() ? (
                     <i className="fas fa-user-tie" />
                  ) : (
                     <i className="fas fa-user" />
                  )}
               </div>
            </header>
         )
      })(this.props)
   }
}
