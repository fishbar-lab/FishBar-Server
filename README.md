# FishBar-Server
## 数据结构  
* tabBar(顶部导航栏)  
```js
{
    id: UUID,
    tab: String
}
```

* user  
```js
{
    id:UUID,
    username: String,
    haedImg: String,
    mobile: String,
    createdAt: DateTime
}
```

* tag(标签)
```js
{
    id:UUID,
    tag:String,
    createdBy: UUID,
    createdAt: DateTime
}
```

* post(帖子)
```js
{
    id:UUID,
    userId:UUID,
    img:[String],
    tag:[{
        id: UUID,
        tag:String
    }],
    shareCount: Number,
    commentCount: Number,
    likeCount: Number,
    collectCount: Number  // 收藏
}
```

* record(记录表) 
```js
{
    id:UUID,
    postId:UUID,
    type: String, //类型枚举 like,share,collect
    createdBy:UUID,
    createdAt:DateTime
}
```

* comment(评论)
```js
{
    id:UUID,
    postId:UUID,
    comment:String,
    img:[String],
    userId:UUID,
    likeCount: Number,
    parentId:UUID,
    createdAt:DateTime,
    createdBy:UUID
}
``` 

