import iLoadingBar from './loading-bar.vue';
import Vue from 'vue';
import { camelcaseToHyphen } from '../../utils/assist';

iLoadingBar.newInstance = properties => {
    const _props = properties || {};

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    const div = document.createElement('div');
    div.innerHTML = `<i-loading-bar${props}></i-loading-bar>`;
    document.body.appendChild(div);

    const loading_bar = new Vue({
        el: div,
        data: _props,
        components: { iLoadingBar }
    }).$children[0];

    return {
        update (options) {
            if ('percent' in options) {
                loading_bar.percent = options.percent;
            }
            if (options.status) {
                loading_bar.status = options.status;
            }
            if ('show' in options) {
                loading_bar.show = options.show;
            }
        },
        component: loading_bar,
        destroy () {
            document.body.removeChild(div);
        }
    };
};

export default iLoadingBar;
