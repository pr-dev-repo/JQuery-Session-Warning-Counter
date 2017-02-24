# JQuery-Session-Warning-Counter
Custom counter for monitoring session warnings before timeout.
#Important Notes:
In Identity Framework, if session expired, it will not enter the method, thus returning an error causing page to reload[HTTP GET or POST] and return to the Identity Session Handler.Therefore this is optional and never invoked
on any server side activity, which is why I call the method, it will reset the Session variable on the server side due to the activity, thus this methods are purely for the <b>FRONT END</b>
