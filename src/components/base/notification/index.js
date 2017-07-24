import iNotification from './notification.vue';
import Vue from 'vue';
import { camelcaseToHyphen } from '../../../utils/assist';

iNotification.newInstance = properties => {
    const _props = properties || {};

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    const div = document.createElement('div');
    div.innerHTML = `<i-notification${props}></i-notification>`;
    document.body.appendChild(div);

    const notification = new Vue({
        el: div,
        data: _props,
        components: { iNotification }
    }).$children[0];

    return {
        notice (noticeProps) {
            notification.add(noticeProps);
        },
        remove (name) {
            notification.close(name);
        },
        component: notification,
        destroy () {
            document.body.removeChild(div);
        }
    };
};

export default iNotification;
