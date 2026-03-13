document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('copyEmailBtn');
    var msg = document.getElementById('copyEmailMsg');
    if (!btn) return;
    btn.addEventListener('click', function() {
        var raw = document.getElementById('hiddenEmail').innerHTML;
        var email = raw.replace(/<!--.*?-->/g, '');
        if (navigator.clipboard) {
            navigator.clipboard.writeText(email).then(function() {
                msg.style.display = 'inline';
                setTimeout(function(){ msg.style.display = 'none'; }, 2000);
            });
        } else {
            // fallback per browser vecchi
            var temp = document.createElement('textarea');
            temp.value = email;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand('copy');
            document.body.removeChild(temp);
            msg.style.display = 'inline';
            setTimeout(function(){ msg.style.display = 'none'; }, 2000);
        }
    });
});
