# 轮播图

## index.html为无缝轮播

**问题**

1. ~~页面切换后返回时轮播错乱~~

**原因**：切换页面后 `setInterval` 会偷懒，避免浪费内存，所以会在我们切换回页面后一次执行

**解决**：`visibilitychange` 事件监听页面是否切换，切换后释放 `setInterval` ，返回页面时执行 `setInterval` 



## index2.html为普通轮播

