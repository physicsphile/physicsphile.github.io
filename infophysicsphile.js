var username = 'admin';
var password = 'admin';
username=prompt('This is password protected page, please enter username to continue.','');
password=prompt('This is password protected page, please enter password to continue.','');
if (username != 'admin' || password != 'admin') {
location.href='https://physics-phile.blogspot.com';
}
