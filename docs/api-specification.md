# API Specification

## Authentication
### POST /auth/login
- Request: { username, password }
- Response: { token, user_info }

### POST /auth/logout
- Request: { token }
- Response: { success: true }

## Devices
### POST /devices/register
- Request: { mac_address }
- Response: { status: "pending" | "approved" }

### GET /devices
- Admin only.
- Response: list of registered devices.

## Logs
### GET /logs
- Admin only.
- Returns system logs (user, action, timestamp).

## Policies (future)
### POST /policies
- Create new access control policies.
