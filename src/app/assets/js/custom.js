
$( document ).ready(function() {
    $(function () {
        $('#tab1 a').click(function (e) {
            e.preventDefault();
            $('a[href="' + $(this).attr('href') + '"]').tab('show');
        })
    });
});
