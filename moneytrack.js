// ...existing code...
document.addEventListener('DOMContentLoaded', function () {
    const loginBtn = document.getElementById('login-btn');
    const signinBtn = document.getElementById('signin-btn');
    const modal = document.getElementById('authModal');
    const modalContent = modal.querySelector('.modal-content');
    const closeBtn = document.getElementById('close-modal-btn');
    const signinFields = document.querySelector('.signin-fields');
    const modalTitle = document.getElementById('modalTitle');
    const authForm = document.getElementById('authForm');
    const authSubmitBtn = document.getElementById('auth-submit-btn');
    const switchToLogin = document.getElementById('switch-to-login');
    const switchToSignin = document.getElementById('switch-to-signin');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const usernameSignin = document.getElementById('username-signin');
    const authMessage = document.getElementById('authMessage');

    let mode = 'login'; // 'login' or 'signin'

    function openModal(m) {
        mode = m;
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        if (m === 'signin') {
            signinFields.classList.remove('hidden-field');
            modalTitle.textContent = 'Cadastrar-se';
            authSubmitBtn.textContent = 'Cadastrar';
        } else {
            signinFields.classList.add('hidden-field');
            modalTitle.textContent = 'Login';
            authSubmitBtn.textContent = 'Entrar';
        }
        authMessage.textContent = '';
        setTimeout(() => {
            (m === 'signin' ? usernameSignin : email).focus();
        }, 50);
    }

    function closeModal() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    }

    loginBtn && loginBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal('login');
    });

    signinBtn && signinBtn.addEventListener('click', function (e) {
        e.preventDefault();
        openModal('signin');
    });

    closeBtn && closeBtn.addEventListener('click', function () {
        closeModal();
    });

    // Close when clicking outside modal content
    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeModal();
    });

    // Switch links inside modal
    switchToLogin && switchToLogin.addEventListener('click', function (e) {
        e.preventDefault();
        openModal('login');
    });
    switchToSignin && switchToSignin.addEventListener('click', function (e) {
        e.preventDefault();
        openModal('signin');
    });

    // Basic form handling (replace with real auth calls)
    authForm && authForm.addEventListener('submit', function (e) {
        e.preventDefault();
        authMessage.textContent = '';
        if (mode === 'signin') {
            if (password.value.trim() === '' || confirmPassword.value.trim() === '') {
                authMessage.textContent = 'Preencha a senha e confirmação.';
                return;
            }
            if (password.value !== confirmPassword.value) {
                authMessage.textContent = 'As senhas não coincidem.';
                return;
            }
            // Simula cadastro
            authMessage.textContent = 'Cadastro realizado com sucesso!';
            setTimeout(closeModal, 1000);
            return;
        }

        // login
        if (email.value.trim() === '' || password.value.trim() === '') {
            authMessage.textContent = 'Informe e-mail e senha.';
            return;
        }
        authMessage.textContent = 'Login realizado com sucesso!';
        setTimeout(closeModal, 800);
    });

    // Atualiza ano do rodapé
    const currentYear = document.getElementById('currentYear');
    if (currentYear) currentYear.textContent = new Date().getFullYear();
});
// ...existing code...