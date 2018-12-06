new WOW().init();

$('#contact').click(function(e) {
    e.preventDefault();
    Swal({
        type: 'success',
        title: 'Success',
        text: 'Your message has been sent!'
    })
})

$('#cancel').click(function(e) {
    e.preventDefault();
    location.href = '/'
})