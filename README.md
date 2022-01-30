1. API dành cho admin

\*Admin:

- Đăng ký tài khoản admin: post --> http://localhost:5000/api/auth/admin/register
- Đăng nhập tài khoản admin: post --> http://localhost:5000/api/auth/admin/login
- Đăng xuất tài khoản: get --> http://localhost:5000/api/auth/admin/logout
- Xem profile: get --> http://localhost:5000/api/auth/admin/profile
- Chỉnh sửa profile: patch --> http://localhost:5000/api/auth/admin/profile/update
- Refresh token : get --> http://localhost:5000/api/auth/admin/refresh_token
- Thay đổi mật khẩu : patch --> http://localhost:5000/api/auth/admin/changePassword
- Quên mật khẩu tài khoản admin: post --> http://localhost:5000/api/auth/admin/forget
- Link reset mật khẩu khi quên: put --> http://localhost:5000/api/auth/admin/password/reset/:token
- Đăng nhập google tài khoản admin: post --> http://localhost:5000/api/auth/admin/loginGoogle

\*Upload:

- Upload ảnh người dùng : post --> http://localhost:5000/api/uploadImageUser
- Xóa ảnh người dùng trên cloud : post --> http://localhost:5000/api/destroyImageUser
- Upload video phim : post --> http://localhost:5000/api/uploadVideoFilm
- Xóa video phim trên cloud : post --> http://localhost:5000/api/destroyVideoFilm
- Upload ảnh đạo diễn : post --> http://localhost:5000/api/uploadImageDirector
- Xóa ảnh đạo diễn trên cloud : post --> http://localhost:5000/api/destroyImageDirector

\*Director:

- Xem thông tin tất cả đạo diễn: get --> http://localhost:5000/api/director/all
- Xem thông tin chi tiết đạo diễn: get --> http://localhost:5000/api/director/:id
- Thêm mới thông tin đạo diễn : post --> http://localhost:5000/api/director/add
- Chỉnh sửa thông tin đạo diễn : patch --> http://localhost:5000/api/director/update/:id
- Xóa thông tin đạo diễn : patch --> http://localhost:5000/api/director/delete/:id

\*Category

- Xem tất cả thể loại phim : get --> http://localhost:5000/api/category/all
- Tạo thêm 1 thể loại phim: post --> http://localhost:5000/api/category/add
- Cập nhập thể loại phim: put --> http://localhost:5000/api/category/update/:id
- Xóa thể loại phim: delete --> http://localhost:5000/api/category/delete/:id

\*Series Film

- Xem tất cả tập phim: get --> http://localhost:5000/api/seriesFilm/all
- Tạo thêm 1 tập phim: post --> http://localhost:5000/api/seriesFilm/add
- Cập nhập 1 tập phim: put --> http://localhost:5000/api/seriesFilm/update/:id
- Xóa 1 tập phim: delete --> http://localhost:5000/api/seriesFilm/delete/:id

2. API dành cho khách hàng

\*Upload:

- Upload ảnh người dùng : post --> http://localhost:5000/api/uploadImageUser
- Xóa ảnh người dùng trên cloud : post --> http://localhost:5000/api/destroyImageUser

\*Customer:

- Đăng ký tài khoản khách hàng: post --> http://localhost:5000/api/auth/customer/register
- Đăng nhập tài khoản khách hàng : post --> http://localhost:5000/api/auth/customer/login
- Đăng xuất tài khoản: get --> http://localhost:5000/api/auth/customer/logout
- Xem profile: get --> http://localhost:5000/api/auth/customer/profile
- Chỉnh sửa profile: patch --> http://localhost:5000/api/auth/customer/profile/update
- Refresh token : get --> http://localhost:5000/api/auth/customer/refresh_token
- Thay đổi mật khẩu : patch --> http://localhost:5000/api/auth/customer/changePassword
- Quên mật khẩu tài khoản khách hàng: post --> http://localhost:5000/api/auth/customer/forget
- Link reset mật khẩu khi quên: put --> http://localhost:5000/api/auth/customer/password/reset/:token
- Đăng nhập google tài khoản khách hàng: post --> http://localhost:5000/api/auth/customer/loginGoogle

\*Director:

- Xem thông tin tất cả đạo diễn: get -->http://localhost:5000/api/director/all
- Xem thông tin chi tiết đạo diễn: get --> http://localhost:5000/api/director/:id

\*Category

- Xem tất cả thể loại phim : get --> http://localhost:5000/api/category/all

\*Series Film

- Xem tất cả tập phim: get --> http://localhost:5000/api/seriesFilm/all
