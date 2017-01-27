module.exports = {

    loggedIn : function() {
        return !!localStorage.getItem('pala_token');
    },

    logout : function() {
        localStorage.removeItem('pala_token');
    },

    postCall:function(url, data) {
        event.preventDefault();
        var result = $.ajax({
            type: "POST",
            url: url,
            data: JSON.stringify(data),
            contentType: "application/json",
            dataType: "json",
        });
        return result
    }

}

