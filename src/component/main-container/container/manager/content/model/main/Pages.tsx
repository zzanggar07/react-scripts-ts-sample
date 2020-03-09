import * as React from 'react'
import { inject, observer } from 'mobx-react'

@inject((stores: any) => {
   return {}
})
@observer
export default class Pages extends React.Component<any, {}> {
   render() {
      return ((props: any) => {
         return (
            <React.Fragment>
               <div className="page-area">
                  <nav className="pagination-style">
                     <ul className="pagination">
                        <li className="disabled">
                           <a className="" href="#">
                              «
                           </a>
                        </li>
                        <li className="disabled">
                           <a className="" href="#">
                              ⟨
                           </a>
                        </li>
                        <li className="active">
                           <a className="undefined" href="#">
                              1
                           </a>
                        </li>
                        <li className="disabled">
                           <a className="" href="#">
                              ⟩
                           </a>
                        </li>
                        <li className="disabled">
                           <a className="" href="#">
                              »
                           </a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </React.Fragment>
         )
      })(this.props)
   }
}
