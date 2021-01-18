import request from '@/utils/request'


export default {
    
    addProduct(data) {
        return request({
          url:'/product',
          method:'post',
          data:data,
          responseType:'json'
        })
    },

    findProduct(data)  {
      return request({
        url:'/product?currentPage='+data.currentPage+'&pageSize='+data.pageSize+"&productName="+data.productName+"&categoryId="+data.categoryId,
          method:'get',
          responseType:'json'
      })
    }

}