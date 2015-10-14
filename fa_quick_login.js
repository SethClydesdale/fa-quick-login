// quick login for the toolbar
(function() {
  document.write('<style type="text/css">#fa_quick_login{color:#333;font-size:13px;font-family:Arial,Verdana,Sans-serif;background:#FFF;border:1px solid #DDD;border-radius:3px;box-shadow:0 6px 12px rgba(0,0,0,.175);margin-top:20px;position:fixed;z-index:40000}#fa_quick_login:before{content:url(http://i21.servimg.com/u/f21/18/21/41/30/arrow10.gif);position:absolute;right:15px;top:-9px}#fa_right a.rightHeaderLink.fa_login_actif{color:#FFF!important;background-color:#39C!important}#fa_quick_login a.gensmall{color:#39C}#fa_quick_login a.gensmall:hover{color:#333}#fa_quick_login input{color:#333;background:#FFF;border:1px solid #CCC;border-radius:3px;padding:3px;margin:2px;cursor:text}#fa_quick_login input:hover{border-color:#39C}#fa_quick_login input:focus{border-color:#333;outline:0}#fa_quick_login input.mainoption{color:#39C;border:1px solid #39C;font-weight:700;display:block;width:100%;padding:6px 3px;margin-top:10px;cursor:pointer;transition:300ms}#fa_quick_login input.mainoption:hover{color:#FFF;background:#39C}#fa_quick_login input.mainoption:focus{color:#FFF;background:#8B5;border-color:#8B5}#fa_quick_login table.forumline,#fa_quick_login td,#fa_quick_login th,#fa_quick_login tr{border:none!important;background:0 0!important;border-radius:0!important}#fa_quick_login table.forumline{margin:-1px}#fa_quick_login .thHead{color:#FFF;font-size:13px;font-family:"Trebuchet MS",Arial,Verdana,Sans-serif;background:#39C!important;border-radius:3px 3px 0 0!important;padding:3px 6px}#fa_quick_login td{font-size:13px;padding:3px}#fa_quick_login>form>table:first-child{display:none}</style>');
  
  $(function() {
    if (!_userdata.session_logged_in) {
      var container = document.createElement('DIV'), storage = window.localStorage;
      container.id = 'fa_quick_login';
      container.style.display = 'none';

      if (storage && storage.faLoginData && storage.faLoginDataExp > +new Date - 1*60*60*1000) {
        container.innerHTML = storage.faLoginData;
        document.body.appendChild(container);
      }
      else $.get('/login?change_version=subsilver', function(d) {
        var login = $('form[name="form_login"]', d)[0]; // phpbb2 login form

        if (login) {
          login.password.value = '';
          container.appendChild(login);
          
          // remove version change
          for (var a = container.getElementsByTagName('A'), i = 0, j = a.length; i < j; i++) {
            a[i].href = a[i].href.replace(/change_version=subsilver/, '');
          }

          if (storage) {
            storage.faLoginData = container.innerHTML;
            storage.faLoginDataExp = +new Date;
          }
          
          document.body.appendChild(container);
        }
      });

      $(function() {
        var right = document.getElementById('fa_right');
  
        if (right) {
          right.firstChild.onclick = function() {
            var login = document.getElementById('fa_quick_login'), offset = this.getBoundingClientRect();

            if (login) {
              
              if (/none/.test(login.style.display)) {
                login.style.display = '';
                login.style.top = offset.top + 30 + 'px';
                login.style.left = offset.left - (login.getBoundingClientRect().width - offset.width) + 'px';
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
