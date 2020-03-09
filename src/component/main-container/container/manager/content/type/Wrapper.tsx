import * as React from 'react'
import { inject, observer } from 'mobx-react'
import SubHeader from './header/SubHeader'
import Container from './main/Container'

@inject((stores: any) => {
   return {}
})
@observer
export default class Wrapper extends React.Component<any, {}> {
   render() {
      return ((props: any) => {
         return (
           <React.Fragment>
              <SubHeader />
              <Container />
           </React.Fragment>
         )
      })(this.props)
   }
}
