# JQuery-Session-Warning-Counter
Custom counter for monitoring session warnings before timeout.
#Important Notes:
In Identity Framework, if session expired, it will not enter the method, thus returning is optional and never invoked
On any server side activity, which is why I call the method, it will reset the Session variable on the server side, thus this methods are purely for the <b>FRONT END</b>
