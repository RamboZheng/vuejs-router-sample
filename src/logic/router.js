import VueRouter from 'vue-router';
import NewList from '../component/NewList.vue';
import NewDetail from '../component/NewDetail.vue';

const router = new VueRouter({
    routes: [
        { path: '/new', component: NewList },
        { path: '/detail/:title', component: NewDetail }
    ]
})

module.exports = router;