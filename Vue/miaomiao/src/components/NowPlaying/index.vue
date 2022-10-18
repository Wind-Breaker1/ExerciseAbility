<template>
    <div class="movie_body" ref="movie_body">
        <Loading v-if="isLoading"></Loading>
        <Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
        <ul >
            <li class="pullDown">{{pullDownMsg}}</li>
            <li v-for="item in moveData" :key="item.id">
                <div class="pic_show" @click="handleToDetail(item.id)"><img :src="item.img"></div>
                <div class="info_list">
                    <h2 @click="handleToDetail(item.id)">{{item.nm}}<img v-if="item.version" src="@/assets/maxs.png"></h2>
                    <p v-if="item.sc">观众评 <span class="grade">{{item.sc}}</span></p>
                    <p v-else>暂无评分</p>
                    <p>主演：{{item.star}}</p>
                    <p>{{item.showInfo}}</p>
                </div>
                <div class="btn_mall">
                    购票
                </div>
            </li>
        </ul>
        </Scroller>
    </div> 
    
</template>
<script>
import Bscroll from 'better-scroll'

export default {
    data() {
        return {
            moveData: [],
            pullDownMsg: '',
            isLoading: true,
            prevCityId: -1
        }
    },
    activated() {
        var cityId = this.$store.state.City.id;
        if(this.prevCityId == cityId){return}
        this.isLoading = true;
        this.axios.get('/my//api/mmdb/movie/v3/list/hot.json?ci='+ cityId).then(res => {
            this.moveData = res.data.data.hot;
            this.isLoading = false;
            this.prevCityId = cityId;
            console.log(res.data)
            // this.$nextTick(() => {
            //     var scroll = new Bscroll(this.$refs.movie_body,{
            //         tap: true,
            //         probeType: 1,
            //         // 让click事件生效
            //         click: true
            //     });
            //     // console.log(scroll)
            //     // 滑动事件，pos是顶部位置信息
            //     scroll.on('scroll',pos => {
            //         // 如果下拉距离大于30
            //         if(pos.y > 30){
            //             this.pullDownMsg = '正在更新····'
            //         }
            //     });

            //     scroll.on('touchEnd', pos => {
            //         if(pos.y > 30){
            //             this.pullDownMsg = '更新成功',
            //             setTimeout(() => {
            //                 this.pullDownMsg = '';
            //             }, 1000)
            //         }
            //     })
            // })
        }).catch(err => {
            console.log(err)
        })
    },
    methods: {
        handleToDetail(movieId){
            // console.log(movieId)
            this.$router.push('/movie/detail/1/' + movieId);
        },
        handleToScroll(pos){
            if(pos.y > 30){
                this.pullDownMsg = '正在更新···';
            }
        },
        handleToTouchEnd(pos){
            if(pos.y > 30){
                this.pullDownMsg = '更新成功';
                setTimeout(() => {
                    this.pullDownMsg = '';
                }, 1000)
            }
        }
    }
}
</script>
<style scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .pullDown{ margin:0; padding:0; border:none;}
</style>