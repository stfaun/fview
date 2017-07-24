import iModal from './confirm';
import fModal from './fmodal';

let modalInstance;

function getModalInstance () {
    modalInstance = modalInstance || iModal.newInstance({
        closable: false,
        maskClosable: false,
        footerHide: true
    });

    return modalInstance;
}

function confirm (options) {
    let instance  = getModalInstance();

    options.onRemove = function () {
        modalInstance = null;
    };

    instance.show(options);
}

iModal.info = function (props = {}) {
    props.icon = 'info';
    props.showCancel = false;
    return confirm(props);
};

iModal.success = function (props = {}) {
    props.icon = 'success';
    props.showCancel = false;
    return confirm(props);
};

iModal.warning = function (props = {}) {
    props.icon = 'warning';
    props.showCancel = false;
    return confirm(props);
};

iModal.error = function (props = {}) {
    props.icon = 'error';
    props.showCancel = false;
    return confirm(props);
};

iModal.confirm = function (props = {}) {
    props.icon = 'confirm';
    props.showCancel = true;
    return confirm(props);
};

iModal.remove = function () {
    if (!modalInstance) {   // at loading status, remove after Cancel
        return false;
    }

    const instance = getModalInstance();

    instance.remove();
};

export { iModal, fModal }