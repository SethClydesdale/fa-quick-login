// quick login for the toolbar
(function() {
  var lang = {
    title : 'Please enter your username and password to log in.',
    username : 'Username : ',
    password : 'Password : ',
    automatic : 'Log in automatically : ',
    login : 'Log in',
    register : 'Register',
    forgot : 'I forgot my password',
    
    redirect : window.location.href // page the user is redirected to upon login
  };
  
  // quick login theme
  document.write('<style type="text/css">#fa_quick_login{color:#333;font-size:13px;font-family:Arial,Verdana,Sans-serif;background:#FFF;border:1px solid #CCC;border-radius:3px;box-shadow:0 6px 12px rgba(0,0,0,.175);margin-top:20px;position:fixed;z-index:40000;width:400px}#fa_quick_login:before{content:url(http://i21.servimg.com/u/f21/18/21/41/30/arr10.gif);position:absolute;right:15px;top:-10px}#fa_right a.rightHeaderLink[href$="/login"]{padding:0 6px}#fa_right a.rightHeaderLink.fa_login_actif{color:#333!important;background-color:#FFF!important}#fa_quick_login a.gensmall{color:#069}#fa_quick_login a.gensmall:hover{color:#333}#fa_quick_login input{color:#333;background:#FFF;border:1px solid #CCC;border-radius:3px;padding:3px;margin:2px;cursor:text}#fa_quick_login input:hover{border-color:#39C}#fa_quick_login input:focus{border-color:#333;outline:0}#fa_quick_login input.mainoption{color:#39C;border:1px solid #39C;background:0 0;font-weight:700;display:block;width:100%;padding:6px 3px;margin-top:10px;cursor:pointer;transition:300ms}#fa_quick_login input.mainoption:hover{color:#FFF;background:#39C}#fa_quick_login input.mainoption:focus{color:#FFF;background:#8B5;border-color:#8B5}#fa_quick_login table.forumline,#fa_quick_login td,#fa_quick_login th,#fa_quick_login tr{border:none!important;background:0 0!important;border-radius:0!important;white-space:normal}#fa_quick_login .thHead{color:#333;font-size:13px;font-family:"Trebuchet MS",Arial,Verdana,Sans-serif}#fa_quick_login td{font-size:13px;padding:3px}</style>');

  $(function() {
    if (!_userdata.session_logged_in && _userdata.activate_toolbar) {
      var container = document.createElement('DIV');
      container.id = 'fa_quick_login';
      container.style.display = 'none';
      container.innerHTML = '<form action="/login" method="post" name="form_login"><table class="forumline" width="100%" border="0" cellspacing="0" cellpadding="4" align="center"><tbody><tr><th colspan="3" class="thHead" nowrap="nowrap" height="25">' + lang.title + '</th></tr><tr><td width="100%" align="center" class="row1"><table cellpadding="0" cellspacing="0" border="0"><tbody><tr><td class="row1 align_gauche"><table width="100%" border="0" cellspacing="1" cellpadding="0"><tbody><tr><td class="align_droite" width="50%"><span class="gen">' + lang.username + '</span></td><td width="50%"><input type="text" name="username" value="" size="25" maxlength="40"></td></tr><tr><td class="align_droite"><span class="gen">' + lang.password + '</span></td><td><input type="password" name="password" size="25" maxlength="32"></td></tr><tr align="center"><td colspan="2"><span class="gen">' + lang.automatic + '<input type="checkbox" name="autologin" checked="checked"></span></td></tr><tr align="center"><td colspan="2"><input type="hidden" name="redirect" value="' + lang.redirect + '"><input type="hidden" name="query" value=""><input type="hidden" name="tt" value="1"><input class="mainoption" type="submit" name="login" value="' + lang.login + '"></td></tr><tr align="center"><td colspan="2"><br><span class="gensmall"><a class="gensmall" href="/register">' + lang.register + '</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="gensmall" href="/profile?mode=sendpassword">' + lang.forgot + '</a></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></form>';
      document.body.appendChild(container);

      $(function() {
        var right = document.getElementById('fa_right');
  
        if (right) {
          right.firstChild.onclick = function() {
            var login = document.getElementById('fa_quick_login'), offset = this.getBoundingClientRect(), loffset;

            if (login) {
              if (/none/.test(login.style.display)) {
                login.style.display = '';
                
                loffset = login.getBoundingClientRect();
                login.style.top = offset.top + 30 + 'px';
                login.style.left = offset.left - ((loffset.right - loffset.left) - (offset.right - offset.left)) + 'px';
                
                login.getElementsByTagName('FORM')[0].username.focus();
                this.className += ' fa_login_actif';
              } else {
                login.style.display = 'none';
                this.className = this.className.replace(/fa_login_actif/, '');
              }
            }
            
            return false;
          };
        }
      });
    }
  });
}());
