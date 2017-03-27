/*Session warning*/
$(document).ready(function () {

    var warningTime = 0;
    //Intervalo para incrementacion
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //metodo de verificar sesion
    function timerIncrement() {
        warningTime++;

        if (warningTime > 14) { getActiveSession(); }

        if (warningTime > 13) { // 13 = 14 minutes

            setTimeout(function () {
                $('#timeout-warning').modal('show');
            });
            //set warning time to  0 when hidden to prevent modal again
            $('#timeout-warning').on('hidden.bs.modal', function () {
                warningTime = 0;
            })

            $('#isActiveSession').click(function () {
                getActiveSession();
            });
        }
    }

    function getActiveSession() {
        var url = '/Home/isActiveSession/';
        $.get(url)
               .error(function () {//on expired session
                   location.reload();
               })
               .success(function () {
                   warningTime = 0;
                   return true //session isActive
               })
        $('#timeout-warning').modal('hide');
        warningTime = 0;
        return false;
    }

});
