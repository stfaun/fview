import iPicker from '../picker.vue';
import iDatePanel from '../panel/date.vue';
import iDateRangePanel from '../panel/date-range.vue';

const getPanel = function (type) {
    if (type === 'daterange' || type === 'datetimerange') {
        return iDateRangePanel;
    }
    return iDatePanel;
};

import { oneOf } from '../../../utils/assist';

export default {
    mixins: [iPicker],
    props: {
        type: {
            validator (value) {
                return oneOf(value, ['year', 'month', 'date', 'daterange', 'datetime', 'datetimerange']);
            },
            default: 'date'
        },
        value: {}
    },
    created () {
        if (!this.currentValue) {
            if (this.type === 'daterange' || this.type === 'datetimerange') {
                this.currentValue = ['',''];
            } else {
                this.currentValue = '';
            }
        }

        this.panel = getPanel(this.type);
    }
};
