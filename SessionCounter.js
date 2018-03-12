
$(document).ready(function () {
    const WARNING = 840000;
    const GETSESSION = 900000;
    
    timeoutHandlePopup = setTimeout(function () { showTimeoutPopup(); }, WARNING);
    timeoutHandleActiveSession = setTimeout(function () { getActiveSession(); }, GETSESSION);

    function setCustomTimeout() {
        clearTimeout(timeoutHandlePopup);
        clearTimeout(timeoutHandleActiveSession);

        timeoutHandlePopup = setTimeout(function () { showTimeoutPopup(); }, WARNING);
        timeoutHandleActiveSession = setTimeout(function () { getActiveSession(); }, GETSESSION);

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
