/**
 * WATERNET — Frontend API Client
 * Drop this file next to index.html as: js/api.js
 * Then include in index.html: <script src="js/api.js"></script>
 *
 * Usage:
 *   const { token, client } = await WaternetAPI.login('client@google.com', 'pass');
 *   const machines = await WaternetAPI.getMachines();
 *   const analytics = await WaternetAPI.getAnalytics(7);
 */

const WaternetAPI = (() => {
    // ── Change this to your actual cPanel domain ──────────────────────
    const BASE_URL = 'https://yourdomain.com/api';

    let _token = localStorage.getItem('wn_token') || null;
    let _user  = JSON.parse(localStorage.getItem('wn_user') || 'null');

    function setSession(token, user) {
        _token = token;
        _user  = user;
        localStorage.setItem('wn_token', token);
        localStorage.setItem('wn_user', JSON.stringify(user));
    }

    function clearSession() {
        _token = null;
        _user  = null;
        localStorage.removeItem('wn_token');
        localStorage.removeItem('wn_user');
    }

    async function request(path, options = {}) {
        const url = `${BASE_URL}${path}`;
        const headers = { 'Content-Type': 'application/json' };
        if (_token) headers['Authorization'] = `Bearer ${_token}`;

        const res = await fetch(url, {
            ...options,
            headers: { ...headers, ...(options.headers || {}) },
        });

        const json = await res.json();

        if (!res.ok || !json.success) {
            if (res.status === 401) {
                clearSession();
                window.dispatchEvent(new Event('wn:session-expired'));
            }
            throw new Error(json.error || `HTTP ${res.status}`);
        }

        return json.data;
    }

    return {
        // ── AUTH ──────────────────────────────────────────────────────
        async login(email, password) {
            const data = await request('/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
            });
            setSession(data.token, data.user);
            return data;
        },

        logout() {
            clearSession();
        },

        isLoggedIn() {
            return !!_token;
        },

        getUser() {
            return _user;
        },

        // ── MACHINES ──────────────────────────────────────────────────
        async getMachines(machineId = null) {
            const q = machineId ? `?id=${encodeURIComponent(machineId)}` : '';
            return request(`/machines/index${q}`);
        },

        async registerMachine(payload) {
            return request('/machines/index', {
                method: 'POST',
                body: JSON.stringify(payload),
            });
        },

        // ── ANALYTICS ─────────────────────────────────────────────────
        async getAnalytics(rangeDays = 7, machineId = null) {
            let q = `?range=${rangeDays}`;
            if (machineId) q += `&machine=${encodeURIComponent(machineId)}`;
            return request(`/analytics/index${q}`);
        },

        // ── ALERTS ────────────────────────────────────────────────────
        async getAlerts(includeResolved = false) {
            return request(`/alerts/index${includeResolved ? '?all=1' : ''}`);
        },

        async resolveAlert(alertId) {
            return request(`/alerts/index?id=${alertId}`, { method: 'PUT' });
        },
    };
})();

// ── Integration hook: replace doLogin() in index.html ────────────────────
// When connecting the real backend, swap the demo doLogin() for:
//
// async function doLogin() {
//   const email = document.getElementById('loginEmail').value.trim();
//   const pass  = document.getElementById('loginPass').value;
//   try {
//     const { user, client } = await WaternetAPI.login(email, pass);
//     currentClient = client?.id?.toString() || 'google';
//     if (user.role === 'admin') {
//       showPage('page-admin'); renderAdmin('admin-overview');
//     } else {
//       // Update sidebar with real client name/initials
//       document.getElementById('client-name-sb').textContent = client.name;
//       showPage('page-client'); renderClientDash('client-dashboard'); startLive();
//     }
//   } catch(e) {
//     alert('Login failed: ' + e.message);
//   }
// }
