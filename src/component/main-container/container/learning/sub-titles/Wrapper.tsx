import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { action, observable } from 'mobx'
import Select from 'react-select'

@inject((stores: any) => {
   return {
      modalCreate: stores.modal.learning.create,
      modalDelete: stores.modal.customer.delete,
   }
})
@observer
export default class Wrapper extends React.Component<any, {}> {
   @observable selectedOption = null

   @action
   handleChange = (selectedOption: any) => {
      this['selectedOption'] = selectedOption
   }

   render() {
      return ((props: any) => {
         return (
            <React.Fragment>
               <div className="sub-header">
                  <i className="fas fa-graduation-cap"/>
                  학습 관리
                  <div className="btn-group float-right">
                     <span
                        className="btn btn-default"
                        onClick={(e) => {
                           props
                             .modalCreate
                             .showDialog({})
                             .then((r: any) => {
                              console.log(r)
                           })
                        }}
                     >
                        <i className="fas fa-upload"></i>작업 생성
                     </span>
                     <span className="btn btn-default">
                        <i className="fas fa-download"></i>다운로드
                     </span>
                     <span
                        className="btn btn-default"
                        onClick={(e) => {
                           props
                             .modalDelete
                             .showDialog({})
                             .then((r: any) => {
                              console.log(r)
                           })
                        }}
                     >
                        <i className="fas fa-trash-alt"></i>삭제
                     </span>
                  </div>
               </div>
               <div className="sub-header">
                  <div className="ribbon">
                     학습 작업 리스트
                     <span className="number">
                        2<small>건</small>
                     </span>
                     <div className="btn-group float-right">
                        <Select
                           value={this.selectedOption}
                           onChange={this.handleChange}
                           placeholder={'전체'}
                           isClearable={true}
                           options={[
                              {
                                 value: 'faceNet_inceptionv1',
                                 label: 'faceNet_inceptionv1',
                              },
                              {
                                 value: 'faceNet_inceptionv2',
                                 label: 'faceNet_inceptionv2',
                              },
                              {
                                 value: 'faceNet_inceptionv3',
                                 label: 'faceNet_inceptionv3',
                              },
                              {
                                 value: 'faceNet_inceptionv4',
                                 label: 'faceNet_inceptionv4',
                              },
                           ]}
                        />
                        <label className="search">
                           <input
                              type="text"
                              placeholder="검색어를 입력하세요"
                              name="searchKeyword"
                              value=""
                           />
                        </label>
                     </div>
                     {/*<div className="btn-group float-right">*/}
                     {/*  <span className="btn btn-sub">제품 등록</span>*/}
                     {/*  <span className="btn btn-sub">콜 대상등록</span>*/}
                     {/*</div>*/}
                     {/*<div className="btn-group float-right">*/}
                     {/*  <span className="btn btn-default"><i className="fas fa-download"></i>기간별 일괄 등록 받기</span>*/}
                     {/*  <span className="btn btn-default"><i className="fas fa-upload"></i>신규 일괄 등록 올리기</span>*/}
                     {/*</div>*/}
                  </div>
               </div>
            </React.Fragment>
         )
      })(this.props)
   }
}
