import iPicker from '../picker.vue';
import iTimePanel from '../panel/time.vue';
import iTimeRangePanel from '../panel/time-range.vue';
import Options from '../time-mixins';

const getPanel = function (type) {
    if (type === 'timerange') {
        return iTimeRangePanel;
    }
    return iTimePanel;
};

import { oneOf } from '../../../utils/assist';

export default {
    mixins: [iPicker, Options],
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['time', 'timerange']);
            },
            default: 'time'
        },
        value: {}
    },
    created () {
        if (!this.currentValue) {
            if (this.type === 'timerange') {
                this.currentValue = ['',''];
            } else {
                this.currentValue = '';
            }
        }
        this.panel = getPanel(this.type);
    }
};