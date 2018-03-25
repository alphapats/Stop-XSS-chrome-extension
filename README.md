# Stop-XSS-chrome-extension
Create a Google Chrome extension to detect and block XSS whole script injection in given input form. 
Can check GET or POST requests.
Sample inputs which should be detected: 
<script> alert(); </script>
<  scRipT type="text/javascript">;</scriPt  >
