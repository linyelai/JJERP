import request from '@/utils/request'


export default {
    
    addBrand(data) {
        return request({
          url:'/addBrand',
          method:'post',
          data:data,
          responseType:'json'
        })
    },

    findBrand(data) {
      return request({
        url:'/brand?currentPage='+data.currentPage+'&pageSize='+data.pageSize+"&parentId="+data.parentId,
          method:'get',
          responseType:'json'
      })
    }

}