<template>
  <div class="page">
      <select v-model="size" v-on:change="changesize">
        <option value="10" selected>10条</option>
        <option value="20">20条</option>
        <option value="30">30条</option>
      </select>
      <span v-on:click="prve" class="el-icon-arrow-left"></span>
      <a>{{nowpage}}/{{allPage==0?1:allPage}}</a>
      <span v-on:click="next" class="el-icon-arrow-right"></span>
      到第
      <input min="1" type="number" v-model="input"/>
      页
      <a v-on:click="gopage" style="margin-left: 10px;">Go</a>
  </div>
</template>
<script>
export default {
  name:"page",
  data(){
    return{
      input:"",
      size:10,
    }
  },
  props:["allPage","nowpage"],
  created(){

  },
  mounted(){

  },
  methods:{
    // 修改每页现实的数据
    changesize(){
      this.$emit("changepage", {nowpage:1,size:this.size})
    },
    // 上一页
    prve(){
      if(this.nowpage > 1){
        let nowpage = Number(this.nowpage) - 1;
        this.$emit("changepage", {nowpage:nowpage,size:this.size})
      }
    },
    // 下一页
    next(){
      if(this.nowpage < this.allPage){
        let nowpage = Number(this.nowpage) + 1
        this.$emit("changepage", {nowpage:nowpage,size:this.size})
      }
    },
    // 跳转
    gopage(){
      if(this.input <= this.allPage && this.input >= 1){
        let nowpage = this.input
        this.$emit("changepage", {nowpage:nowpage,size:this.size});
      }else{
        this.main.closeAllNotification();
        this.$notify.warning({
                        title: '提示',
                        message: '没有这一页数据'
                    });
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page{
    display: flex;
    height: 32px;
    line-height: 32px;
    color: #666;
    align-items: center;
    justify-content: flex-end;
    select{
      display: inline-block;
      width: 70px;
      height: 32px;
      border: 1px solid #e4e4e4;
      outline: none;
      margin: 0px 10px;
      border-radius: 3px;
      background: transparent;
      color: #666;
    }
    input{
      display: inline-block;
      width: 30px;
      height: 33px;
      border: 1px solid #e4e4e4;
      outline: none;
      margin: 0px 10px;
      border-radius: 3px;
    }
    span{
      width: 10px;
      height: 32px;
      line-height: 32px;
      color: #666;
      text-align: center;
      cursor: pointer;
      margin-right: 10px;
    }
    a{
      display: inline-block;
      width: auto;
      padding: 0px 8px;
      height: 32px;
      background: #00c1de;
      line-height: 32px;
      text-align: center;
      color: #fff;
      border-radius: 3px;
      cursor: pointer;
    }
  }
</style>

