$(document).ready(function() {
    $('#submit-email').on('click', function(e) {
        if (!$('#email').hasClass('invalid')) {
            var email = $('#email').val();
            var sheets_URL = "https://sheets.googleapis.com/v4/spreadsheets/1wPQTB04hNo4LjG-Hb8LySAX1RSmhJtO55gvv3Murum4/values/A1:append?valueInputOption=USER_ENTERED"

            $.post(sheets_URL, {
                'values': [
                    [email]
                ]
            }, function(r) {
                console.log('success!');
                console.log(r);
            }, 'json');
        }
    });
});
