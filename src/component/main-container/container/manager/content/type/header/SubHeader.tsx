import * as React from 'react'
import Select from 'react-select'
import { inject, observer } from 'mobx-react'

@inject((stores: any) => {
   return {
      modalModels: stores.modal.manager.models,
      modalDelete: stores.modal.customer.delete,
   }
})
@observer
export default class SubHeader extends React.Component<any, {}> {
   render() {
      return ((props: any) => {
         return (
            <React.Fragment>
               <div className="sub-header">
                  <div className="ribbon">
                     학습 작업 리스트
                     <span className="number">
                        2<small>건</small>
                     </span>
                     <div className="btn-group float-right">
                        <span
                           className="btn btn-default"
                           onClick={(e) => {
                              props.modalModels
                                 .showDialog({})
                                 .then((r: any) => {
                                    console.log(r)
                                 })
                           }}
                        >
                           <i className="fas fa-upload"></i>모델 등록
                        </span>
                        <span
                           className="btn btn-default"
                           onClick={(e) => {
                              props.modalDelete
                                 .showDialog({})
                                 .then((r: any) => {
                                    console.log(r)
                                 })
                           }}
                        >
                           <i className="fas fa-trash-alt"></i>삭제
                        </span>
                     </div>
                     <div className="btn-group float-right">
                        <Select
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
                  </div>
               </div>
            </React.Fragment>
         )
      })(this.props)
   }
}
