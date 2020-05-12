var memberList = [

    {
        id:'',
        memberName:'18312483564',
        level:1,
        nickName:'周伯通',
        phoneNum:'18312483564',
        status:1,
        createTime:'2020-05-20 00:00:00',
        avatar:'https://img2.woyaogexing.com/2020/05/12/86564cfbb2f34e5d8f199191ff1ae6c3!400x400.jpeg',
        gender:1,
        birthday:'1992-03-02',
        provinceId:1,
        cityId:1,
        areaId:1,
        email:'linyelai123@163.com',
    },
    {
        id:'',
        memberName:'18312483563',
        level:1,
        nickName:'王重阳',
        phoneNum:'18312483563',
        status:1,
        createTime:'2020-05-20 00:00:00',
        avatar:'https://img2.woyaogexing.com/2020/05/12/03f8ab49bf6f47f49027351a8d8843de!400x400.jpeg',
        gender:1,
        birthday:'1992-03-02',
        provinceId:1,
        cityId:1,
        areaId:1,
        email:'linyelai123@163.com',
    },
    {
        id:'',
        memberName:'18312483562',
        level:1,
        nickName:'李莫愁',
        phoneNum:'18312483562',
        status:1,
        createTime:'2020-05-20 00:00:00',
        avatar:'https://img2.woyaogexing.com/2020/05/12/82ef4bb144ee403eb9ba939e53af925d!400x400.jpeg',
        gender:1,
        birthday:'1992-03-02',
        provinceId:1,
        cityId:1,
        areaId:1,
        email:'linyelai123@163.com',
    }





]
var response ={
    data:{
     success:'true',
     errorMsg:''

    }
}

//订单模拟数据

var orderList = [

    {
        id:1,
        orderSn:'2020001CH001',
        totalMoney:5180.9,
        status:0,
        createTime:'2020-05-06 00:00:09'
    },
    {
        id:2,
        orderSn:'2020001CH002',
        totalMoney:5180.9,
        status:1,
        createTime:'2020-05-06 00:00:09'
    },
    {
        id:3,
        orderSn:'2020001CH003',
        totalMoney:5180.9,
        status:2,
        createTime:'2020-05-06 00:00:09'
    }
]

//商品信息
var productList = [

{
     id:1,
     productName:'华为P30',
     productSku:'HWP300001',
     price:3890,
     productMainImg:'http://img0.imgtn.bdimg.com/it/u=683044038,1792549080&fm=26&gp=0.jpg',//商品主图
     shopName:'1',//商店id
     createTime:'2020-05-05 00:00:00',
     updateTime:'',
     status:1,
     discount:'8',//折扣
     goodsCategory:'数码产品',//类别id
     goodsBrand:'华为手机'//品牌id
},

{
    id:2,
    productName:'华为P20',
    productSku:'HWP200002',
    price:3890,
    productMainImg:'http://img4.imgtn.bdimg.com/it/u=3187583908,121132152&fm=26&gp=0.jpg',//商品主图
    shopName:'1',//商店id
    createTime:'2020-05-05 00:00:00',
    updateTime:'',
    status:2,
    discount:'8',//折扣
    goodsCategory:'数码产品',//类别id
    goodsBrand:'华为手机'//品牌id
},

{
    id:3,
    productName:'华为 mate 20',
    productSku:'HWP200003',
    price:3890,
    productMainImg:'http://img3.imgtn.bdimg.com/it/u=1043139038,4120007237&fm=26&gp=0.jpg',//商品主图
    shopName:'1',//商店id
    createTime:'2020-05-05 00:00:00',
    updateTime:'',
    status:3,
    discount:'8',//折扣
    goodsCategory:'数码产品',//类别id
    goodsBrand:'华为手机'//品牌id
}

]


//品牌数据
var brandList = [
    {
        id:1,
        brandName:'华为P30',
        desc:'华为P30',
        img:'http://img3.imgtn.bdimg.com/it/u=1043139038,4120007237&fm=26&gp=0.jpg'
    },
    {
        id:2,
        brandName:'华为P20',
        desc:'华为P30',
        img:'http://img4.imgtn.bdimg.com/it/u=3187583908,121132152&fm=26&gp=0.jpg'
    },
    {
        id:3,
        brandName:'华为 mate 30',
        desc:'华为 mate 30',
        img:'http://img4.imgtn.bdimg.com/it/u=3187583908,121132152&fm=26&gp=0.jpg'
    }
]
//类别

var categoryList = [
    {
        id:1,
        categoryName:'数码产品',
        desc:'数码产品',
        img:'http://img4.imgtn.bdimg.com/it/u=3187583908,121132152&fm=26&gp=0.jpg',
        parentCategory:''
    },
    {
        id:2,
        categoryName:'笔记本电脑',
        desc:'笔记本电脑',
        img:'http://img4.imgtn.bdimg.com/it/u=3187583908,121132152&fm=26&gp=0.jpg',
        parentCategory:'数码产品'
    },
    {
        id:3,
        categoryName:'护肤品',
        desc:'护肤品',
        img:'http://img4.imgtn.bdimg.com/it/u=3187583908,121132152&fm=26&gp=0.jpg',
        parentCategory:''
    },
    
    {
        id:4,
        categoryName:'面膜',
        desc:'面膜',
        img:'http://img4.imgtn.bdimg.com/it/u=3187583908,121132152&fm=26&gp=0.jpg',
        parentCategory:'数码产品护肤'
    }
]


export {memberList,response,orderList,productList,brandList,categoryList}