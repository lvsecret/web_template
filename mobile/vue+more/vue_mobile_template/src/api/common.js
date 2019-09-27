/**
 * 请求统一管理
 */
import Request from '../common/request';
import axios from 'axios';

/* Common */
export const rankGender = data => Request.get('/homepage/banners', data);

export default {
    login(data) {
        return Request.post('/members/login', data);
    },

    logOut() {
        // 当我们退出登录的时候 取消全局注册的钩子(注入与依赖)
        axios.interceptors.reject.eject(axiosIns)
    },

    // 首页banner
    getBanner(data) {
        return Request.post('/homepage/banners', data);
    },
}