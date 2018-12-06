  <template>
  <el-row :gutter="10">
    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content bg-purple" style="width:170px">
        <el-row>
            <el-col :span="100" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 1 : 0">
              <el-card :body-style="{ padding: '0px' }">
                <img src="static/hamburger.png" class="image">
                <div style="padding: 14px;">
                  <span>{{userInfo.nickName}}</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button" @click="dialogVisible = true">查看信息</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
        </el-row>

      </div>
    </el-col>
        <el-dialog title="个人信息" :visible.sync="dialogVisible" width="30%">
                    <span>昵 称:</span>
                    <el-dropdown-item>{{userInfo.nickName}}</el-dropdown-item>
                    <span>年 龄:</span>
                    <el-dropdown-item>{{userInfo.age}}</el-dropdown-item>
                    <span>性 别:</span>
                    <el-dropdown-item>{{userInfo.sex}}</el-dropdown-item>
                    <span>注册时间:</span>
                    <el-dropdown-item>{{userInfo.createTime}}</el-dropdown-item>
                <span slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                </span>
            </el-dialog>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light">
              <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                    <el-menu-item index="1">首页</el-menu-item>
                    <el-submenu index="2">
                      <template slot="title">菜单</template>
                      <el-menu-item index="2-1">好友列表</el-menu-item>
                      <el-menu-item index="2-2">选项2</el-menu-item>
                      <el-menu-item index="2-3">选项3</el-menu-item>
                      <el-submenu index="2-4">
                        <template slot="title">设置</template>
                        <el-menu-item index="2-4-1">个人设置</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                      </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3" disabled>私信</el-menu-item>
                    <el-menu-item index="4" @click="redirect()">趣闻</el-menu-item>
              </el-menu>
              <template>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="date" label="圈子"></el-table-column>
                </el-table>
              </template>
          </div>
    </el-col>
    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
          <div class="grid-content bg-purple">
                  <el-button type="primary" class="el-icon-search" @click="get()"></el-button>
                  <el-input style="width:100px" v-model="input" placeholder="请输入内容"></el-input>
                  <el-button type="primary" class="el-icon-edit" @click="dialogFormVisible = true"></el-button>
                <el-badge :value="200" :max="99" class="item">
                    <el-button size="small">评论</el-button>
                </el-badge>
                <el-badge :value="100" :max="10" class="item">
                    <el-button size="small">回复</el-button>
                </el-badge>
                <el-icon-zoom-in></el-icon-zoom-in>
           </div>
           <el-dialog title="发表状态" :visible.sync="dialogFormVisible">
                  <el-form :model="form">
                    <el-form-item label="我的状态" :label-width="formLabelWidth">
                      <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="定位" :label-width="formLabelWidth">
                      <el-select v-model="form.region" placeholder="位置">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-form>
                <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogFormVisible = false">发 表</el-button>
                </div>
            </el-dialog>
           <template>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column prop="news" label="头条推荐"></el-table-column>
                </el-table>
            </template>
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
            date: '小明 : 今天天气不错今天天气不错今天天气不错今天天今天天气不错今天天气不错今天天气不错气不错今天天气不错今天天气不错今天天气不错',
            news: '江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！'
          }, {
            name: '小绿',
            date: '小绿 : 今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!今天吃的不错!',
            news: '江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！'
          }, {
            name: '小粉',
            date: '小粉 : 今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！今天喝的有点多！',
            news: '江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！江南皮革厂倒闭了！'
          }, {
            name: '小黑',
            date: '小黑 : 今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！'
          }, {
            name: '小D',
            date: '小黑 : 今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！'
          }, {
            name: '小C',
            date: '小黑 : 今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！'
          }, {
            name: '小B',
            date: '小黑 : 今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！'
          }, {
            name: '小A',
            date: '小黑 : 今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！今天穿的有点多！'
          }],
          userInfo: {
            nickName: '',
            age: '',
            sex: '',
            createTime: ''
          },
          dialogVisible: false,
          dialogTableVisible: false,
          dialogFormVisible: false,
          activeIndex2: '1',
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
          url: '',
          ruleForm: {
            name: '',
            pass: ''
          }
        }
      },
      mounted () {
        this.search()
      },
      methods: {
        redirect () {
          this.$router.push({path: '/news'})
        },
        get () {
          this.name = sessionStorage.getItem('user')
          alert(this.name)
          console.log('a')
        },
        search () {
          this.name = sessionStorage.getItem('user')
          this.$ajax.get('http://localhost:9999/api/v1/user/info?uid=' + this.name).then((response) => {
            this.userInfo = response.data.data
            console.log(this.userInfo.nickname)
          }).catch(function (error) {
            console.log(error)
          })
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

