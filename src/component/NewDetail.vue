<template>
    <div class="root">
        <div class="name">{{name}}</div>
        <div class="desc">{{desc}}</div>
        <img class="back" @click="back" src="res/back.png"/>
    </div>
</template>

<script>
import bus from '../common/eventbus.js'

export default {
    props: ['id'],
    data () {
        return {
            name: this.$route.params.title,
            desc: '新华社北京7月28日电（记者吴晶、胡浩）热血和奉献谱写壮丽史诗，忠诚和信仰铸就光辉征程。庆祝中国人民解放军建军90周年文艺晚会《在党的旗帜下》28日晚在北京人民大会堂举行，中共中央总书记、国家主席、中央军委主席习近平和李克强、张德江、俞正声、刘云山、王岐山、张高丽等党和国家领导人与首都3000多名各界群众一起观看演出。人民大会堂万人大礼堂庄严辉煌，二楼眺台悬挂着横幅：“紧密团结在以习近平同志为核心的党中央周围，不忘初心、继续前进，为实现党在新形势下的强军目标、把人民军队建设成为世界一流军队，为实现两个一百年奋斗目标、实现中华民族伟大复兴的中国梦而努力奋斗！”舞台中央，绚烂的霞光映照着雄伟的长城，战士们高擎旗帜、奋力前行的群像栩栩如生。舞台两侧，挺拔的柱石托举起熠熠闪光的八一勋章，1927－2017的红色字样寓意着中国人民解放军90年栉风沐雨的历程'
        }
    },
    methods: {
        back: function() {
            this.$router.push("/new");
            bus.emit('event-back', 'Hello Vue0');
            this.$store.commit('back', 'Hello Vue1');
        }
    }
}
</script>

<style scoped>
    .root {
        box-sizing: border-box;
        text-align: center;
    }

    .name {
        font-size: 16px;
        font-weight: bold;
        color: yellow;
        background-color: #09af3e;
        padding: 25px;
    }

    .desc {
        font-size: 15px;
        text-align: left;
        color: black;
        line-height: 200%;
        padding: 20px;
        height: 100%;
    }

    .back {
        position: absolute;
        top: 26px;
        left: 5px;
        height: 20px;
    }

</style>
