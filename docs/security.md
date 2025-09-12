# Security Requirements

## Authentication & Authorization
- Use bcrypt for password hashing.
- Implement JWT tokens for session management.
- Role-based access control (RBAC): student, staff, guest, admin.

## Data Protection
- All communication must use HTTPS.
- Sensitive data (passwords, tokens) never stored in plain text.
- Logs must be tamper-proof.

## Compliance & Logging
- All login attempts logged (success & failure).
- Device registration attempts logged.
- Policy changes logged with admin ID.

## Risk Mitigation
- Provide fallback authentication in case of system failure.
- Regular security code reviews.
- Pilot rollout before full deployment.
