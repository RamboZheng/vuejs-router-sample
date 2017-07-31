import Vue from 'vue';
import VueRouter from 'vue-router';
import NewList from '../component/NewList.vue';
import NewDetail from '../component/NewDetail.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { 
            path: '/new', 
            component: NewList,
            meta: {
                keepAlive: true
            }
        },
        { 
            path: '/detail/:title', 
            component: NewDetail 
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log("beforeEach");
    next();
})

module.exports = router;