1. API dành cho admin

\*Upload:

- Upload video phim : post --> http://localhost:5000/api/uploadVideoFilm
- Xóa video phim trên cloud : post --> http://localhost:5000/api/destroyVideoFilm

2. API dành cho khách hàng

\*Upload:

- Upload ảnh người dùng : post --> http://localhost:5000/api/uploadImageUser
- Xóa ảnh người dùng trên cloud : post --> http://localhost:5000/api/destroyImageUser

\*Customer:

- Đăng ký tài khoản khách hàng: post --> http://localhost:5000/api/auth/customer/register
- Đăng nhập tài khoản khách hàng : post --> http://localhost:5000/api/auth/customer/login
- Đăng xuất tài khoản: get --> http://localhost:5000/api/auth/customer/logout
- Xem profile của khách hàng: get --> http://localhost:5000/api/auth/customer/profile
- Chỉnh sửa profile khách hàng: patch --> http://localhost:5000/api/auth/customer/profile/update
- Refresh token : get --> http://localhost:5000/api/auth/customer/refresh_token
- Thay đổi mật khẩu : patch --> http://localhost:5000/api/auth/customer/changePassword
- Quên mật khẩu tài khoản khách hàng: post --> http://localhost:5000/api/auth/customer/forget
- Link reset mật khẩu khi quên: put --> http://localhost:5000/api/auth/customer/password/reset/:token

3. API dùng chung (không cần đăng nhập)