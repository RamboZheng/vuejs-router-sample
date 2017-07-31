<template>
    <div class="root">
        <div class="title">今日头条</div>
        <div class="list"><ul>
            <li v-for="title in list">
                <router-link class="name" :to="{path:'/detail/'+title}">
                    {{title}}
                </router-link>
            </li>
        </ul></div>
        <div><input type="text" value="Hello World"/></div>
    </div>
</template>

<script>
import bus from '../common/eventbus.js'
import log from '../common/log.js'
import store from '../store/store.js'

export default {
    props: ['id'],
    data () {
        return {
            name: '庆祝建军90周年阅兵',
            list: [
                "两架美军轰炸机飞过朝鲜半岛 回应朝试射导弹",
                "美政府又现重要人事变动：凯利出任白宫幕僚长",
                "意大利首都罗马遭遇60年不遇旱灾 民众用水犯愁",
                "北京地铁苹果园站年底封站改造 预计封站至2020年",
                "甘肃陇南奇婚异俗男嫁女娶 随女方改名换姓",
                "多地明确“租房可落户” 你还会抢着买房吗？",
                "两架美军轰炸机飞过朝鲜半岛 回应朝试射导弹",
                "美政府又现重要人事变动：凯利出任白宫幕僚长",
                "意大利首都罗马遭遇60年不遇旱灾 民众用水犯愁",
                "北京地铁苹果园站年底封站改造 预计封站至2020年",
                "甘肃陇南奇婚异俗男嫁女娶 随女方改名换姓",
                "多地明确“租房可落户” 你还会抢着买房吗？",
                "两架美军轰炸机飞过朝鲜半岛 回应朝试射导弹",
                "两架美军轰炸机飞过朝鲜半岛 回应朝试射导弹",
                "美政府又现重要人事变动：凯利出任白宫幕僚长",
                "意大利首都罗马遭遇60年不遇旱灾 民众用水犯愁",
                "北京地铁苹果园站年底封站改造 预计封站至2020年",
                "甘肃陇南奇婚异俗男嫁女娶 随女方改名换姓",
                "多地明确“租房可落户” 你还会抢着买房吗？",
                "两架美军轰炸机飞过朝鲜半岛 回应朝试射导弹"
            ]
        }
    },
    mounted() {
        log.d("newlist count="+this.$store.state.count);
        bus.on('event-back', function(msg) {
            log.d(msg);
        })
    }
}
</script>

<style scoped>
    .root {
        height: 100%;
        background-color: #262927;
        box-sizing: border-box;
        overflow: scroll;
    }

    .title {
        font-size: 50px;
        font-weight: bold;
        text-align: center;
        padding: 25px;
        background-color: #09af3e;
    }

    .list {
        margin-top: 40px;
    }
    
    li {
        margin-top: 40px;
    }

    .name {
        font-size: 30px;
        font-weight: bold;
        color: white;
    }
</style>
