import request from '@/utils/request'


export default {
    
    addCategory(data) {
        return request({
          url:'/addCategory',
          method:'post',
          data:data,
          responseType:'json'
        })
    },

    findCategory(data) {
      return request({
        url:'/category?currentPage='+data.currentPage+'&pageSize='+data.pageSize+"&parentId="+data.parentId,
          method:'get',
          responseType:'json'
      })
    }

}