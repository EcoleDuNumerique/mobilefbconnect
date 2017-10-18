"use strict";
class App {
    
        constructor(){
            this.user = null;
        }
    
        getDetails(){
            
            if(!this.user.token){
                return;
            }

            $.ajax({
                url: "http://192.168.1.137/__Ecole%20numerique__/Mobile/API/user/" + this.user.token,
                data: {
                    id: this.user.id
                },
                method: "get",
                success : function( data ){
                    console.log(data);
                },
                error : function( error ){
                    console.log(error);
                }
            })
    
        }
    
    }