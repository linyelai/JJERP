import request from '@/utils/request'


export default {
    
    login(data) {
        return request({
          url:'/member/login',
          method:'post',
          data:data,
          responseType:'json'
        })
    }
,
    findMemberByPage(data){

        return request({
            url:'/member/findMemberByPage',
            method:'get',
            data:data,
            responseType:'json'
          })

    }
}