import Vue from 'vue';
import VueRouter from 'vue-router';
import NewList from '../component/NewList.vue';
import NewDetail from '../component/NewDetail.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { 
            name: 'new',
            path: '/new', 
            component: NewList,
            meta: {
                keepAlive: true
            }
        },
        { 
            name: 'detail',
            path: '/detail/:title', 
            component: NewDetail 
        }
    ]
});

router.beforeEach((to, from, next) => {
    next();
})

module.exports = router;