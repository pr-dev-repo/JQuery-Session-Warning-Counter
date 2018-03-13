
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

        $.ajax({
            type: "GET",
            url: urlGetActiveSession,
            data: {},
            async: false,
            error: function () { location.reload(true); }, // on expired
            success: function () {
                setCustomTimeout();
            }
        });

        $('#timeout-warning').modal('hide');
    }

});
