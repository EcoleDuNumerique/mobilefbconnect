document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  var app = new App();
    facebookConnectPlugin.login(
        [], 
        function(success){
            console.log( success );
            statusChangeCallback( success );
        }, 
        function(error){
            console.log( error );
        }
    )
    facebookConnectPlugin.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
    
      function statusChangeCallback( response ){
        console.log(response);
        if(response.status == "connected"){
    
          var access_token = response.authResponse.accessToken;
          $.ajax({
            url : "http://192.168.1.137/__Ecole%20numerique__/Mobile/API/" + access_token,
            method : "get",
            success: function( data ){
              if(data.error){
                console.log( data.error );
              }
              else {
                var user = new User( data.id, data.name, access_token );
                app.user = user;
                app.getDetails();
                console.log(app.user);
              }
            },
            error: function( error ){
              console.log(error);
            }
          });
    
        }
    
      }

}