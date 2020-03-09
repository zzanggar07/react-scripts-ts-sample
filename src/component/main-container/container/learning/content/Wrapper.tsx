import * as React from 'react'
import { inject, observer } from 'mobx-react'

@inject((stores: any) => {
   return {
      modalDetail: stores.modal.learning.detail,
      modalLogs: stores.modal.learning.logs,
      modalTests: stores.modal.learning.tests,
   }
})
@observer
export default class Wrapper extends React.Component<any, {}> {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="box">
                  {this.pages()}
                  {this.tables()}
               </div>
            </div>
         </div>
      )
   }

   tables() {
      return ((props: any) => {
         return (
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
                              <i/>
                           </label>
                        </th>
                        <th>작업ID</th>
                        <th>유형</th>
                        <th>모델명</th>
                        <th>Dataset</th>
                        <th>생성시간</th>
                        <th>경과시간</th>
                        <th>로그</th>
                        <th>Accuracy</th>
                        <th>테스트</th>
                        <th>학습</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr className="">
                        <td>
                           <label>
                              <input type="checkbox" />
                              <i/>
                           </label>
                        </td>
                        <td>1</td>
                        <td>얼굴</td>
                        <td>
                           <a
                              onClick={(e) => {
                                 props.modalDetail
                                    .showDialog({})
                                    .then((r: any) => {
                                       console.log(r)
                                    })
                              }}
                           >
                              faceNet_inceptionv3
                           </a>
                        </td>
                        <td>AnotherMissOh</td>
                        <td>2020.01.08 오전 10시</td>
                        <td>8분 20초</td>
                        <td>
                           <button
                              onClick={(e) => {
                                 props.modalLogs
                                    .showDialog({})
                                    .then((r: any) => {
                                       console.log(r)
                                    })
                              }}
                           >
                              보기
                           </button>
                        </td>
                        <td>0.98</td>
                        <td>
                           <button
                              onClick={(e) => {
                                 props.modalTests
                                    .showDialog({})
                                    .then((r: any) => {
                                       console.log(r)
                                    })
                              }}
                           >
                              테스트
                           </button>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                           <button
                              type="button"
                              className="btn btn-icon waves-effect waves-light btn-secondary"
                              onClick={() => {
                                 // this.fetchAnalysis(item.idx)
                              }}
                           >
                              <i className="fas fa-sync-alt fa-spin fa-1x fa-fw" />
                           </button>
                        </td>
                     </tr>
                     <tr className="">
                        <td>
                           <label>
                              <input type="checkbox" />
                              <i/>
                           </label>
                        </td>
                        <td>2</td>
                        <td>객체</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                           <button>보기</button>
                        </td>
                        <td></td>
                        <td>
                           <button>테스트</button>
                        </td>
                        <td></td>
                     </tr>
                     <tr className="">
                        <td>
                           <label>
                              <input type="checkbox" />
                              <i></i>
                           </label>
                        </td>
                        <td>3</td>
                        <td>배경</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                           <button>보기</button>
                        </td>
                        <td></td>
                        <td>
                           <button>테스트</button>
                        </td>
                        <td></td>
                     </tr>
                     <tr className="">
                        <td>
                           <label>
                              <input type="checkbox" />
                              <i></i>
                           </label>
                        </td>
                        <td>4</td>
                        <td>???</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                           <button>보기</button>
                        </td>
                        <td></td>
                        <td>
                           <button>테스트</button>
                        </td>
                        <td></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         )
      })(this.props)
   }

   /* 임시 페이지 컴포넌트로 변경 */
   pages() {
      return (
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
      )
   }
}
