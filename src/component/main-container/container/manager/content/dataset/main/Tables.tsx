import * as React from 'react'
import { inject, observer } from 'mobx-react'

@inject((stores: any) => {
   return {}
})
@observer
export default class Tables extends React.Component<any, {}> {
   render() {
      return ((props: any) => {
         return (
            <React.Fragment>
               <div className="table">
                  <table>
                     <colgroup>
                        <col style={{ width: '50px' }} />
                        <col style={{ width: '80px' }} />
                     </colgroup>
                     <thead>
                        <tr>
                           <th>
                              <label>
                                 <input type="checkbox" />
                                 <i></i>
                              </label>
                           </th>
                           <th>모델ID</th>
                           <th>유형</th>
                           <th>세부 유형</th>
                           <th>학습 모델명</th>
                           <th>Accuracy</th>
                           <th>학습 데이터셋</th>
                           <th>베이스모델</th>
                           <th>크기</th>
                           <th>경로</th>
                           <th>등록시간</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr className="">
                           <td>
                              <label>
                                 <input type="checkbox" />
                                 <i></i>
                              </label>
                           </td>
                           <td>1</td>
                           <td>이미지</td>
                           <td>얼굴</td>
                           <td>Facenet</td>
                           <td>99%</td>
                           <td>CASIA-WebFace</td>
                           <td>Inception resNet v1</td>
                           <td>186M</td>
                           <td>E:\KAIM\Model</td>
                           <td>2020.01.08 오전10시</td>
                        </tr>
                        <tr className="">
                           <td>
                              <label>
                                 <input type="checkbox" />
                                 <i></i>
                              </label>
                           </td>
                           <td>2</td>
                           <td>객체</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr className="">
                           <td>
                              <label>
                                 <input type="checkbox" />
                                 <i></i>
                              </label>
                           </td>
                           <td>2</td>
                           <td>객체</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                        <tr className="">
                           <td>
                              <label>
                                 <input type="checkbox" />
                                 <i></i>
                              </label>
                           </td>
                           <td>2</td>
                           <td>객체</td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </React.Fragment>
         )
      })(this.props)
   }
}
