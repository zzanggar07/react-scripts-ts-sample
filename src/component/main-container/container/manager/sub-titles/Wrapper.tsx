import * as React from 'react'
import SubMenu from './sub-menu/Menu'

export default class Wrapper extends React.Component<any, {}> {
   render() {
      return (
         <React.Fragment>
            <div className="sub-header">
               <i className="fas fa-cog"></i>
               관리자 페이지
               <SubMenu/>
            </div>
         </React.Fragment>
      )
   }
}
