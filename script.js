// Toggle between login and signup forms
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');
    
    // Reset forms when switching
    document.getElementById('login-form').reset();
    document.getElementById('signup-form').reset();
}

// Login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    
    // Validation
    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters long', 'error');
        return;
    }
    
    // Here you would send the login request to your backend
    console.log('Login attempt:', { email, password, rememberMe });
    
    // Demo success message
    showMessage('Login successful! Redirecting...', 'success');
    
    // Store credentials if remember me is checked
    if (rememberMe) {
        localStorage.setItem('cloudnow_remember_email', email);
    } else {
        localStorage.removeItem('cloudnow_remember_email');
    }
    
    // Simulate redirect after 2 seconds
    setTimeout(() => {
        // Replace with your actual dashboard URL
        // window.location.href = '/dashboard';
        console.log('Would redirect to dashboard');
    }, 2000);
});

// Signup form submission
document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const termsAccepted = document.getElementById('terms').checked;
    
    // Validation
    if (name.trim().length < 2) {
        showMessage('Please enter your full name', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    if (password.length < 8) {
        showMessage('Password must be at least 8 characters long', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }
    
    if (!termsAccepted) {
        showMessage('Please accept the terms and conditions', 'error');
        return;
    }
    
    // Check password strength
    const strength = checkPasswordStrength(password);
    if (strength < 2) {
        showMessage('Password is too weak. Use uppercase, lowercase, numbers, and symbols', 'error');
        return;
    }
    
    // Here you would send the signup request to your backend
    console.log('Signup attempt:', { name, email, password });
    
    // Demo success message
    showMessage('Account created successfully! Logging you in...', 'success');
    
    // Simulate redirect after 2 seconds
    setTimeout(() => {
        // Replace with your actual dashboard URL
        // window.location.href = '/dashboard';
        console.log('Would redirect to dashboard');
    }, 2000);
});

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Password strength checker
function checkPasswordStrength(password) {
    let strength = 0;
    
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    return strength;
}

// Update password strength bar
document.getElementById('signup-password')?.addEventListener('input', function() {
    const strength = checkPasswordStrength(this.value);
    const strengthBar = document.querySelector('.strength-bar');
    const percentage = (strength / 6) * 100;
    
    strengthBar.style.width = percentage + '%';
    
    // Color based on strength
    if (percentage <= 30) {
        strengthBar.style.background = '#f44336'; // Red
    } else if (percentage <= 60) {
        strengthBar.style.background = '#ff9800'; // Orange
    } else {
        strengthBar.style.background = '#4caf50'; // Green
    }
});

// Show message notification
function showMessage(message, type) {
    // Create a temporary notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-size: 14px;
        font-weight: 500;
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    if (type === 'error') {
        notification.style.background = '#f44336';
    } else if (type === 'success') {
        notification.style.background = '#4caf50';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Load remembered email on page load
window.addEventListener('load', function() {
    const rememberedEmail = localStorage.getItem('cloudnow_remember_email');
    if (rememberedEmail) {
        document.getElementById('login-email').value = rememberedEmail;
        document.getElementById('remember-me').checked = true;
    }
});