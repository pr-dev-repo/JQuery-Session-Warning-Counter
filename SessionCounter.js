
$(document).ready(function () {
    timeoutHandlePopup = setTimeout(function () { showTimeoutPopup(); }, 840000);
    timeoutHandleActiveSession = setTimeout(function () { getActiveSession(); }, 900000);


    function setCustomTimeout() {
        clearTimeout(timeoutHandlePopup);
        clearTimeout(timeoutHandleActiveSession);

        timeoutHandlePopup = setTimeout(function () { showTimeoutPopup(); }, 840000);
        timeoutHandleActiveSession = setTimeout(function () { getActiveSession(); }, 900000);

    }

    function showTimeoutPopup() {
        setTimeout(function () {
            $('#timeout-warning').modal('show');

        });


        $('#isActiveSession').click(function () {
            getActiveSession();

        });
    }

    function getActiveSession() {
        var url = '/Home/IsActiveSession/';
        $.get(url)
            .error(function () {//on expired session
                location.reload(true);

            })
            .success(function () {
                setCustomTimeout();
                return true

            })

        $('#timeout-warning').modal('hide');

        return false;
    }

});
