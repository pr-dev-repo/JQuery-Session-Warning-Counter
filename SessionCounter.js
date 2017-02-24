/*Session warning*/
$(document).ready(function () {

    var warningTime = 0;
    //Increment Interval
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Verify session method
    function timerIncrement() {
        warningTime++;

        if (warningTime > 13) { // 13 = 14 minutes in a 15 minute timeout expiration
            setTimeout(function () {
                $('#timeout-warning').modal('show');
            }); 
            //set warning time to 0 when hidden to prevent modal again
            $('#timeout-warning').on('hidden.bs.modal', function () {
                warningTime = 0;
            })

            $('#isActiveSession').click(function () {
                debugger;
                var url = '/Home/isActiveSession/'; //controller NET CORE(Identity Framework)
                $.get(url)
                       .error(function () { location.reload(); }) //on expired session
                       .success(function () {
                           warningTime = 0;
                           return true // session isActive
                       })
                $('#timeout-warning').modal('hide');
                warningTime = 0;
                return false;
            });
        }
    }

});
