// es6 polyfill
import 'core-js/fn/array/find-index';

import iAffix from './components/affix';
import iAlert from './components/alert';
import iBackTop from './components/back-top';
import iBadge from './components/badge';
import iBreadcrumb from './components/breadcrumb';
import iButton from './components/button';
import iCard from './components/card';
import iCarousel from './components/carousel';
import iCascader from './components/cascader';
import iCheckbox from './components/checkbox';
import iCircle from './components/circle';
import iCollapse from './components/collapse';
import iDatePicker from './components/date-picker';
import { iDropdown, fDropdown } from './components/dropdown';
import iForm from './components/form';
import { iRow, iCol } from './components/grid';
import { iIcon, fIcon } from './components/icon';
import iInput from './components/input';
import iInputNumber from './components/input-number';
import iLoadingBar from './components/loading-bar';
import { iMenu, fMenu } from './components/menu';
import iMessage from './components/message';
import { iModal, fModal } from './components/modal';
import iNotice from './components/notice';
import iPage from './components/page';
import iPoptip from './components/poptip';
import iProgress from './components/progress';
import iRadio from './components/radio';
import iRate from './components/rate';
import { iSelect, iOption, iOptionGroup, fSelect, fOption, fOptionGroup } from './components/select';
import iSlider from './components/slider';
import iSpin from './components/spin';
import iSteps from './components/steps';
import iSwitch from './components/switch';
import { iTable, fTable, fTreeTable } from './components/table';
import iTabs from './components/tabs';
import iTag from './components/tag';
import iTimeline from './components/timeline';
import iTimePicker from './components/time-picker';
import iTooltip from './components/tooltip';
import iTransfer from './components/transfer';
import iTree from './components/tree';
import iUpload from './components/upload';
import locale from './locale';

const fview = {
    iAffix,
    iAlert,
    iBackTop,
    iBadge,
    iBreadcrumb, iBreadcrumbItem: iBreadcrumb.Item,
    iButton, iButtonGroup: iButton.Group,
    iCard,
    iCarousel, iCarouselItem: iCarousel.Item,
    iCascader,
    iCheckbox, iCheckboxGroup: iCheckbox.Group,
    iCircle,
    iCollapse, iPanel: iCollapse.Panel,
    iDatePicker,
    // dropdown-start
    iDropdown, iDropdownItem: iDropdown.Item, iDropdownMenu: iDropdown.Menu,
    fDropdown,
    // dropdown-end
    iForm, iFormItem: iForm.Item,
    iRow, iCol,
    // icon-start
    iIcon,
    fIcon,
    // icon-end
    iInput,
    iInputNumber,
    iLoadingBar,
    // menu-start
    iMenu, iMenuGroup: iMenu.Group, iMenuItem: iMenu.Item, iSubmenu: iMenu.Sub,
    fMenu, fMenuGroup: fMenu.Group, fMenuItem: fMenu.Item, fSubmenu: fMenu.Sub,
    // menu-end
    iMessage,
    // modal-start
    iModal,
    fModal, 
    // modal-end
    iNotice,
    iPage,
    iPoptip,
    iProgress,
    iRadio, iRadioGroup: iRadio.Group,
    iRate,
    // select-start
    iSelect, iOption, iOptionGroup,
    fSelect, fOption, fOptionGroup,
    // select-end
    iSlider,
    iSpin,
    iSteps, iStep: iSteps.Step,
    iSwitch,
    // table-start
    iTable,
    fTable, fOperationItem: fTable.Item,
    fTreeTable,
    // table-end
    iTabs, iTabPane: iTabs.Pane,
    iTag,
    iTimeline, iTimelineItem: iTimeline.Item,
    iTimePicker,
    iTooltip,
    iTransfer,
    iTree,
    iUpload
};

const install = function (Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    Object.keys(fview).forEach((key) => {
        Vue.component(key, fview[key]);
    });

    Vue.prototype.$Loading = iLoadingBar;
    Vue.prototype.$Message = iMessage;
    Vue.prototype.$Modal = iModal;
    Vue.prototype.$Notice = iNotice;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = Object.assign(fview, {install});   // eslint-disable-line no-undef
