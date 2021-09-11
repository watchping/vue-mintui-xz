<template>
  <div>
   
    <div v-for="(item,i) in rows" :key="i" class="row py-1 border-bottom-0 border border-secondary">
      <!-- 1左侧1个图片 -->
      <div class="col-2">
        <img :src="require(`@/assets/img/${item.img}`)" width="50" height="50" class="rounded" />
      </div>
      <!-- 2中间标题和子标题 -->
      <div class="col-7 text-left text-truncate">
        <div class="font-weight-bold">{{item.title}}</div>
        <div class="text-muted">{{item.subtitle}}</div>
      </div>
      <!-- 3时间 -->
      <div class="col-3 px-0">{{item.time}}</div>
    </div>
  </div>
</template>

<script>
//引入json文件->js object   list就是一个js对象
//import list from "@/assets/json/messagelist.json";
import {getNewsList} from "@/assets/js/apis/news.js" //导入接口

export default { 
    data(){
      return {      
        rows:[],//微信消息列表数据，来源是json文件
      }
    },    

    created(){
      this.loadData();
    },

    methods:{
      async loadData(){
        let result = await getNewsList();
       //判断返回

        this.rows = result.data;

        console.log(result);

      }
    }
}

</script>

<style scoped>
</style>