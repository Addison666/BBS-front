  <template>
  <el-row :gutter="10">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple" style="width:170px">
        <el-row>
  <el-col :span="100" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 1 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="static/hamburger.png" class="image">
      <div style="padding: 14px;">
        <span>小汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">修改信息</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

      </div>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light">
              <el-dropdown>  

                <el-button type="info">菜单<i class="el-icon-arrow-down el-icon--right"></i></el-button>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>好友列表</el-dropdown-item>
                    <el-dropdown-item>个人设置</el-dropdown-item>
                    <el-dropdown-item>世界消息</el-dropdown-item>
                    <el-dropdown-item>私信</el-dropdown-item>
                    <el-dropdown-item>趣闻</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="圈子">
      </el-table-column>
    </el-table>
  </template>
            </div>
      </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple">
                <el-button type="primary" icon="el-icon-search" @click="get()">搜索</el-button>
                <el-input style="width:100px" v-model="input" placeholder="请输入内容"></el-input>
                <el-button type="primary" @click="get()">发表</el-button>
            <el-badge :value="200" :max="99" class="item">
                <el-button size="small">评论</el-button>
            </el-badge>
            <el-badge :value="100" :max="10" class="item">
                <el-button size="small">回复</el-button>
            </el-badge>
        </div>
    </el-col>
        <el-table :data="tableData" style="width: 100px"> 
            <el-table-column prop="name" label="好友列表" width="99"></el-table-column>  
        </el-table>
  </el-row>

  </template>
  <script>
    export default{
      data () {
        return {
          tableData: [{
            name: '小明',
            date: '小明 : 今天天气不错今天天气不错今天天气不错今天天今天天气不错今天天气不错今天天气不错气不错今天天气不错今天天气不错今天天气不错'
          }, {
            name: '小绿',
            date: '小绿 : 今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!'
          }, {
            name: '小粉',
            date: '小粉 : 今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！'
          }, {
            name: '小黑',
            date: '小黑 : 今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！'
          }],
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
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
  </style>

