/**
 * Created by r.pek on 4/9/2018.
 */
var middleware={
        requireAuthentication: function(req, res, next){
            console.log('Private route hit!');
            next();
        },
        logger:function(req, res, next){
            console.log(req.method+' '+ req.originalUrl+' '+ new Date().toString());
            next();
        }
    };

module.exports=middleware;
