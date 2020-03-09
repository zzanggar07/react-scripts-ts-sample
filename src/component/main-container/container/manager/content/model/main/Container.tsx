import * as React from 'react'
import { inject, observer } from 'mobx-react'
import Pages from './../main/Pages'
import Tables from './../main/Tables'

@inject((stores: any) => {
   return {}
})
@observer
export default class Container extends React.Component<any, {}> {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="box">
                  <Pages />
                  <Tables />
               </div>
            </div>
         </div>
      )
   }
}
