import * as React from 'react'

import WrapperSubTitles from './sub-titles/Wrapper'
import WrapperContainer from './content/Wrapper'

export default class WrapperContent extends React.Component<any, {}> {
   render() {
      return (
         <React.Fragment>
            <WrapperSubTitles />
            <WrapperContainer />
         </React.Fragment>
      )
   }
}
