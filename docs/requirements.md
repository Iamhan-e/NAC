# Functional & Non-Functional Requirements

## Functional Requirements
1. **User Authentication**
   - Users must log in before accessing the network.
   - Support for roles: student, staff, guest, admin.
   - Password reset functionality.

2. **Device Registration**
   - Each user can register their devices by MAC address.
   - Limit the number of devices per user.
   - Admins can approve or deny device registrations.

3. **Access Control**
   - Only authenticated + registered devices are allowed access.
   - Guest users may have temporary access.
   - Admins can define access policies.

4. **Admin Features**
   - Add/remove users.
   - View logs of login attempts and network activity.
   - Manage policies and device approvals.

5. **Logging & Monitoring**
   - Store all login attempts.
   - Log device registration/denial.
   - Record policy violations.

---

## Non-Functional Requirements
1. **Security**
   - Passwords must be hashed using bcrypt.
   - All traffic between client and server must use HTTPS.
   - Audit logs must be immutable.

2. **Performance**
   - Authentication response should be < 2 seconds.
   - Support at least 100 concurrent users.

3. **Scalability**
   - System should scale to support larger user bases in the future.

4. **Reliability**
   - Database should not lose logs even if restarted.
   - Backup procedures must be in place.
