<template>
    <div class="city_body">
            <div class="city_list" > 
                <Loading v-if="isLoading"></Loading>
                <Scroller v-else ref="city">
                    <div >
                        <div class="city_hot">
                            <h2>热门城市</h2>
                            <ul class="clearfix">
                                <li v-for="item in hotCity" :key="item.id" @click="handleToCity(item.nm, item.id)">{{item.nm}}</li>
                            </ul>
                        </div>
                        <div class="city_sort" ref="city_sort">
                            <div v-for="item in cityList" :key="item.index">
                                <h2>{{item.index}}</h2>
                                <ul>
                                    <li v-for="temp in item.list" :key="temp.id" @click="handleToCity(temp.nm, temp.id)">{{temp.nm}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Scroller>
            </div>
            <div class="city_index">
                <ul>
                    <li v-for="(item, index) in cityList" :key="item.index" @touchstart="handleToGo(index)">{{item.index}} </li>
                </ul>
                
            </div>
        </div>
</template>

<script>
export default {
    data() {
        return {
            cityList: [],
            hotCity: [],
            isLoading: true
        }
    },
    mounted() {
        var cityList = window.localStorage.getItem('cityList');
        var hotCity = window.localStorage.getItem('hotList');
     
        if(cityList && hotCity){
            this.cityList = JSON.parse(cityList);
            this.hotCity = JSON.parse(hotCity);
            this.isLoading = false;
        }else{
            this.axios.get('/sources/City.json').then(res => {
                
               
                    // setTimeout(() => {
                        var cities = res.data.cts;
                        console.log(cities)
                        this.formatCityList(cities);
                        this.isLoading = false;
                        
                    // },1000)
                    
              
            })
        }
    },
    methods: {
        handleToGo(index){
            var h2 = this.$refs.city_sort.getElementsByTagName('h2');
            // this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop;
            
            // console.log(this.$refs.city)
            // 拿到scroller对象自然能调用其方法
            this.$refs.city.toScrollTop(-h2[index].offsetTop);
        },
        formatCityList(cities){
            // var cityList = [];
            // 筛选热门城市
            cities.forEach(element => {
                if(element.id < 50){
                    this.hotCity.push({nm: element.nm, id: element.id});
                }
            });
            // 为城市分组
            cities.forEach(element => {
                // 截取城市拼音首字母
                var firstLetter = element.py.substring(0, 1).toUpperCase();
                if(this.toCom(firstLetter)){//周字母第一次出现
                    this.cityList.push({index: firstLetter, list: [{nm: element.nm, id: element.id}]})
                }else{
                    this.cityList.forEach(item => {
                        if(item.index == firstLetter)
                            item.list.push({nm: element.nm, id: element.id})
                    });
                }
            });
            this.cityList.sort((n1, n2) => {
                if(n1.index > n2.index){
                    return 1;
                }else if(n1.index < n2.index){
                    return -1;
                }else{
                    return 0;
                }
            })
            // 存入本地，避免刷新老是加载
            window.localStorage.setItem('cityList', JSON.stringify(this.cityList));
            window.localStorage.setItem('hotList', JSON.stringify(this.hotCity));
            // console.log(this.cityList);
        },
        toCom(firstLetter){//判断城市拼音首字母是否是第一次出现
            for(var i = 0; i < this.cityList.length; i++){
                if(this.cityList[i].index == firstLetter){
                    return false;
                }
            }
            return true;
        },
        handleToCity(nm, id){
            this.$store.commit('City/CITY_INFO', {nm, id});
            console.log(this.$store.state.City.id)
            window.localStorage.setItem('nowNm', nm);
            window.localStorage.setItem('nowId', id);
            this.$router.push('/movie/nowPlaying');
        }
    }
    
}

</script>
<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_hot{ margin-top: 20px;}
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
.city_body .city_sort div{ margin-top: 20px;}
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>