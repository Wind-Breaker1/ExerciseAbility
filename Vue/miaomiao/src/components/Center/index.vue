<template>
    <div>
        <div>个人中心</div>
        <div>当前用户：{{ $store.state.User.name }}<a href="javascript:;" @click="handleOut">
            退出</a>
        </div>
        <div v-if="$store.state.User.isAdmin">用户身份：管理员<a href="/admin" target="_blank">进入管理后台</a></div>
        <div v-else>用户身份：普通用户</div>
        <div>
            <input type="file" name="file" value="上传头像">
            <img class="userHead" :src="$store.state.User.userHead" alt="" @touchstart="handleToUpload">
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import {messageBox} from '@/components/JS';
export default {
    methods: {
        // 退出
        handleOut(){
            this.axios.get('/api2/users/logout').then(res => {
                var status = res.data.status;
                if(status == 0){
                    localStorage.removeItem('name');
                    localStorage.removeItem('isAdmin');
                    this.$store.commit('user/USER_NAME',{name: '', isAdmin: false});
                    this.$router.push('/mine/login');
                }
            })
        },
        handleToUpload(ev){
            var file = ev.target.files[0];
            // 将传入的文件存储起来传给后端
            var param = new FormData();
            // 参数： key值，类型，名字
            param.append('file', file, file.name);
            var config = {
                Headers:{
                    'Content-Type': 'multipart/form-data'
                }
            };

            this.axios.post('/api2/user/uploadUserHead', param, config).then(res => {
                var status = res.data.status;
                var This = this;
                if(status == 0){
                    messageBox({
                        title: '上传成功',
                        content: '上传头像成功',
                        ok: '确定',
                        handleOk(){
                            This.$store.commit('User/USER_NAME',{
                                name: This.$store.state.username,
                                isAdmin: This.$store.state.isAdmin,
                                 userHead: res.data.data.userHead + '?' + Math.random()
                            });
                        }
                    })
                }else{
                    messageBox({
                        title: '上传失败',
                        content: '上传头像失败',
                        ok: '确定'
                    })
                }
            })
        }
    },
    beforeRouteEnter(to, from, next){
        axios.get('/api2/users/getUser').then(res => {
            var status = res.data.status;
            if(status == 0){
                next(vm => {
                    localStorage.setItem('name',res.data.data.username);
                    localStorage.setItem('isAdmin',res.data.data.isAdmin);
                    vm.$store.commit('User/USER_NAME',{
                        name: res.data.data.username, 
                        isAdmin: res.data.data.isAdmin,
                        userHead: res.data.data.userHead
                    });
                });
            }else{
                next('/mine/login');
            }
        });
    }
}
</script>
<style scoped>
.userHead{
    width: 50px;height: 50px;border-radius: 50%;overflow: hidden;
}
</style>