# System Architecture

## Components
1. **Wi-Fi Network**
   - Users connect to Wi-Fi.
   - Redirects unauthenticated users to captive portal.

2. **Captive Portal (Frontend UI)**
   - Web page prompting login.
   - Shows terms of service, guest registration, etc.

3. **Backend API (Server)**
   - Handles login, device registration, and policy enforcement.
   - Issues JWT tokens after authentication.
   - Provides admin endpoints for logs, users, and policies.

4. **Database**
   - Stores users, devices, logs, and policies.
   - Ensures data integrity and persistence.

5. **Admin Dashboard**
   - Web interface for administrators.
   - Device management, log viewing, policy configuration.

## High-Level Flow
1. User connects to Wi-Fi.
2. If unauthenticated, redirected to captive portal.
3. User logs in → backend verifies credentials.
4. Backend checks device registration.
5. If valid → access granted; if not → blocked/redirected.
