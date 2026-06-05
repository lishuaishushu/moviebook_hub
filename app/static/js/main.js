// ==================== 全局脚本 ====================

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('MovieBook Hub 已加载');
    
    // 初始化 Bootstrap 提示框
    initializeTooltips();
    
    // 表单验证
    setupFormValidation();
});

/**
 * 初始化 Bootstrap 提示框
 */
function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

/**
 * 设置表单验证
 */
function setupFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}

/**
 * 显示提示信息
 * @param {string} message - 消息内容
 * @param {string} type - 消息类型 (success, danger, info, warning)
 */
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.setAttribute('role', 'alert');
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.querySelector('.container');
    if (container) {
        container.insertBefore(alertDiv, container.firstChild);
    }
}

/**
 * 显示加载动画
 * @param {string} selector - CSS 选择器
 */
function showSpinner(selector = 'body') {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML += `
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">加载中...</span>
            </div>
        `;
    }
}

/**
 * 隐藏加载动画
 * @param {string} selector - CSS 选择器
 */
function hideSpinner(selector = 'body') {
    const spinner = document.querySelector(`${selector} .spinner-border`);
    if (spinner) {
        spinner.remove();
    }
}
