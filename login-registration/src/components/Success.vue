<template>
<el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
    <div class="grid-content bg-purple">
 <el-table
      :data="tableData"
      style="width: 100%">
    
      <el-table-column
        prop="name"
        label="好友"
        width="100">
       
      </el-table-column>
      
    </el-table>
    </div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
    <div class="grid-content bg-purple-light">
          <el-dropdown>
            
  <el-button type="info">
    MENU<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item>双皮奶</el-dropdown-item>
    <el-dropdown-item>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
     
      </div></el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
    <div class="grid-content bg-purple">
    <el-button type="primary" icon="el-icon-search" @click="get()">搜索</el-button>
    <el-button type="primary" @click="get()">测试</el-button>
      </div></el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
    <div class="grid-content bg-purple-light">
    <i class="el-icon-share"></i>
    </div></el-col>
    
</el-row>

</template>
<script>
  export default{
    data () {
      return {
        url: '',
        ruleForm: {
          name: '',
          pass: ''
        }
      }
    },
    methods: {
      get () {
        this.name = sessionStorage.getItem('user')
        alert(this.name)
      }
    }
  }
</script>
<style>
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>

