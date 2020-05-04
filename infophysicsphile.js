var username = 'admin';
var password = 'a$z5w3';
username=prompt('This is password protected page, please enter username to continue.','');
password=prompt('This is password protected page, please enter password to continue.','');
if (username != 'admin' || password != 'a$z5w3') {
location.href='https://physics-phile.blogspot.com';
}
