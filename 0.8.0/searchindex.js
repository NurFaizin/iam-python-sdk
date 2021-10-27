Search.setIndex({docnames:["authors","changelog","contributing","iam_python_sdk","index","installation","modules","readme","usage"],envversion:51,filenames:["authors.rst","changelog.rst","contributing.rst","iam_python_sdk.rst","index.rst","installation.rst","modules.rst","readme.rst","usage.rst"],objects:{"":{iam_python_sdk:[3,0,0,"-"]},"iam_python_sdk.bloom":{BloomFilter:[3,1,1,""]},"iam_python_sdk.bloom.BloomFilter":{contain:[3,2,1,""],insert:[3,2,1,""]},"iam_python_sdk.cache":{Cache:[3,1,1,""]},"iam_python_sdk.cache.Cache":{get:[3,2,1,""],is_expired:[3,2,1,""],set:[3,2,1,""]},"iam_python_sdk.client":{DefaultClient:[3,1,1,""],HttpClient:[3,1,1,""],NewDefaultClient:[3,1,1,""],backoff_giveup_handler:[3,3,1,""]},"iam_python_sdk.client.DefaultClient":{ClientToken:[3,2,1,""],ClientTokenGrant:[3,2,1,""],GetClientInformation:[3,2,1,""],GetRolePermissions:[3,2,1,""],HasBan:[3,2,1,""],HealthCheck:[3,2,1,""],StartLocalValidation:[3,2,1,""],UserAnonymousStatus:[3,2,1,""],UserEmailVerificationStatus:[3,2,1,""],UserPhoneVerificationStatus:[3,2,1,""],ValidateAccessToken:[3,2,1,""],ValidateAndParseClaims:[3,2,1,""],ValidateAudience:[3,2,1,""],ValidatePermission:[3,2,1,""],ValidateRole:[3,2,1,""],ValidateScope:[3,2,1,""]},"iam_python_sdk.client.HttpClient":{get:[3,2,1,""],post:[3,2,1,""],request:[3,2,1,""]},"iam_python_sdk.config":{Config:[3,1,1,""]},"iam_python_sdk.errors":{ClientTokenGrantError:[3,4,1,""],EmptyTokenError:[3,4,1,""],Error:[3,4,1,""],ForbiddenError:[3,4,1,""],GetClientInformationError:[3,4,1,""],GetJWKSError:[3,4,1,""],GetRevocationListError:[3,4,1,""],GetRolePermissionError:[3,4,1,""],HTTPClientError:[3,4,1,""],InvalidAudError:[3,4,1,""],InvalidScopeError:[3,4,1,""],InvalidTokenSignatureKeyError:[3,4,1,""],NilClaimError:[3,4,1,""],NoLocalValidationError:[3,4,1,""],RefreshAccessTokenError:[3,4,1,""],RoleNotFoundError:[3,4,1,""],StartLocalValidationError:[3,4,1,""],TokenRevokedError:[3,4,1,""],UnauthorizedError:[3,4,1,""],UserRevokedError:[3,4,1,""],ValidateAccessTokenError:[3,4,1,""],ValidateAndParseClaimsError:[3,4,1,""],ValidateAudienceError:[3,4,1,""],ValidateJWTError:[3,4,1,""],ValidatePermissionError:[3,4,1,""],ValidateScopeError:[3,4,1,""]},"iam_python_sdk.errors.EmptyTokenError":{message:[3,5,1,""]},"iam_python_sdk.errors.ForbiddenError":{message:[3,5,1,""]},"iam_python_sdk.errors.InvalidAudError":{message:[3,5,1,""]},"iam_python_sdk.errors.InvalidScopeError":{message:[3,5,1,""]},"iam_python_sdk.errors.InvalidTokenSignatureKeyError":{message:[3,5,1,""]},"iam_python_sdk.errors.NilClaimError":{message:[3,5,1,""]},"iam_python_sdk.errors.NoLocalValidationError":{message:[3,5,1,""]},"iam_python_sdk.errors.RoleNotFoundError":{message:[3,5,1,""]},"iam_python_sdk.errors.TokenRevokedError":{message:[3,5,1,""]},"iam_python_sdk.errors.UnauthorizedError":{message:[3,5,1,""]},"iam_python_sdk.errors.UserRevokedError":{message:[3,5,1,""]},"iam_python_sdk.models":{ClientInformation:[3,1,1,""],JWTBan:[3,1,1,""],JWTClaims:[3,1,1,""],Model:[3,1,1,""],NamespaceRole:[3,1,1,""],Permission:[3,1,1,""],RevocationList:[3,1,1,""],Role:[3,1,1,""],TokenResponse:[3,1,1,""],UserRevocationListRecord:[3,1,1,""]},"iam_python_sdk.models.ClientInformation":{Baseuri:[3,5,1,""],Clientname:[3,5,1,""],Namespace:[3,5,1,""],Redirecturi:[3,5,1,""]},"iam_python_sdk.models.JWTBan":{Ban:[3,5,1,""],Enddate:[3,5,1,""]},"iam_python_sdk.models.JWTClaims":{AcceptedPolicyVersion:[3,5,1,""],Aud:[3,5,1,""],Bans:[3,5,1,""],ClientId:[3,5,1,""],Country:[3,5,1,""],DisplayName:[3,5,1,""],Exp:[3,5,1,""],Iat:[3,5,1,""],IsComply:[3,5,1,""],Jflgs:[3,5,1,""],Namespace:[3,5,1,""],NamespaceRoles:[3,5,1,""],Permissions:[3,5,1,""],Roles:[3,5,1,""],Scope:[3,5,1,""],Sub:[3,5,1,""]},"iam_python_sdk.models.Model":{loads:[3,6,1,""]},"iam_python_sdk.models.NamespaceRole":{Namespace:[3,5,1,""],Roleid:[3,5,1,""]},"iam_python_sdk.models.Permission":{Action:[3,5,1,""],Resource:[3,5,1,""],Schedaction:[3,5,1,""],Schedcron:[3,5,1,""],Schedrange:[3,5,1,""],is_in_range:[3,2,1,""],is_recurring:[3,2,1,""],is_scheduled:[3,2,1,""]},"iam_python_sdk.models.RevocationList":{RevokedTokens:[3,5,1,""],RevokedUsers:[3,5,1,""]},"iam_python_sdk.models.Role":{Permissions:[3,5,1,""],Roleid:[3,5,1,""],Rolename:[3,5,1,""]},"iam_python_sdk.models.TokenResponse":{AcceptedPolicyVersion:[3,5,1,""],AccessToken:[3,5,1,""],Bans:[3,5,1,""],DisplayName:[3,5,1,""],ExpiresIn:[3,5,1,""],IsComply:[3,5,1,""],Jflgs:[3,5,1,""],Namespace:[3,5,1,""],NamespaceRoles:[3,5,1,""],Permissions:[3,5,1,""],PlatformId:[3,5,1,""],PlatformUserId:[3,5,1,""],RefreshToken:[3,5,1,""],Roles:[3,5,1,""],TokenType:[3,5,1,""],UserId:[3,5,1,""]},"iam_python_sdk.models.UserRevocationListRecord":{Id:[3,5,1,""],RevokedAt:[3,5,1,""]},"iam_python_sdk.utils":{decode_model:[3,3,1,""],parse_nanotimestamp:[3,3,1,""]},iam_python_sdk:{Config:[3,1,1,""],NewDefaultClient:[3,1,1,""],bloom:[3,0,0,"-"],cache:[3,0,0,"-"],cli:[3,0,0,"-"],client:[3,0,0,"-"],config:[3,0,0,"-"],errors:[3,0,0,"-"],log:[3,0,0,"-"],models:[3,0,0,"-"],utils:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:exception","5":"py:attribute","6":"py:classmethod"},terms:{"class":3,"default":3,"float":3,"function":[2,8],"import":8,"int":3,"new":2,"public":5,"return":3,"try":8,For:8,The:[0,2,5],Then:[2,8],There:8,Used:3,Using:8,about:[2,3],accelbyt:[0,2,3,5,7,8],acceptedpolicyvers:3,access:[1,3,4,7],access_token:8,accesstoken:3,account:7,action:[3,8],activ:3,add:[1,2],added:3,addit:3,admin:8,all:[0,2],allow:8,alwai:[2,5],analyt:0,ani:[2,3],anonym:3,anystr:3,anyth:2,apach:7,api:4,app:7,appreci:2,arg:3,articl:2,assum:[2,8],aud:3,audienc:[1,3,4,7],audreyr:0,backoff:3,backoff_giveup_handl:3,ban:[1,3,4,7],ban_statu:8,bantyp:3,base:[3,8],baseuri:3,baseurl:[3,8],bearer:3,been:[3,5,8],befor:[2,5,8],best:2,bit:2,blog:2,bloom:6,bloomfilt:3,bool:3,branch:2,bugfix:2,build:7,bump2vers:2,cach:6,call:[3,8],caller:3,can:[0,2,3,5,8],cant:8,certain:3,chang:2,changelog:[2,4],check:[2,3,4],checkout:2,claim:[1,3,8],classmethod:3,cli:6,client:[1,4,6,7],clientid:[3,8],clientinfocach:3,clientinform:3,clientnam:3,clientsecret:[3,8],clienttoken:[3,8],clienttokengr:[3,8],clienttokengranterror:[3,8],clone:[2,5],collect:3,com:[0,2,5],command:5,commit:2,config:[6,8],consol:3,contain:3,content:[4,6],contribut:4,contributor:4,cookiecutt:0,copi:[2,5],could:2,countri:3,creat:2,cred:3,credeti:8,credit:[2,4],curl:5,data:3,datetim:3,debug:3,decod:3,decode_model:3,defaultcli:3,deni:3,deploi:4,descript:2,detail:2,develop:[2,7],dict:3,displaynam:3,doc:2,docstr:2,document:[7,8],doesn:3,don:5,done:2,download:5,driven:2,easier:2,either:5,email:[1,3,7],email_verifi:8,empti:3,emptytokenerror:3,enabl:[3,8],enddat:3,enhanc:2,entri:[2,3],environ:5,error:[6,8],even:2,everi:2,exampl:[3,8],except:[3,8],exist:3,exp:3,expir:3,expiresin:3,explain:2,fail:3,fals:3,featur:[3,4],feel:0,fetch:3,field:3,file:2,filer:3,filter:3,first:[3,8],flag:3,flake8:2,flow:8,forbidden:3,forbiddenerror:3,fork:2,format:3,found:[3,8],free:[0,7],from:[3,4,8],gener:4,get:[1,3,4,7,8],getclientinform:3,getclientinformationerror:3,getjwkserror:3,getrevocationlisterror:3,getrolepermiss:3,getrolepermissionerror:3,git:[2,5],github:[0,2,5,7],given:2,grant:[1,3,4,7],graph:0,greatli:2,guid:5,guidelin:4,has:[1,3],hasban:[3,8],have:[2,3,5,8],health:3,healthcheck:3,help:[2,7],here:2,hold:3,how:2,html:8,http:[0,2,3,5,7,8],httpclient:3,httpclienterror:3,httpx:3,iam:[0,2,3,5],iam_python_sdk:[2,4,6,8],iat:3,ietf:8,implement:[3,8],includ:2,index:4,info:[3,4],inform:[1,3],init:4,initi:8,insert:3,instal:[2,4],instanc:3,insuffici:3,invalid:[3,8],invalidauderror:3,invalidscopeerror:3,invalidtokensignaturekeyerror:3,is_expir:3,is_in_rang:3,is_recur:3,is_schedul:3,is_token_valid:8,iscompli:3,issu:2,item:3,jflg:3,json:3,just:2,justic:[0,3],jwk:[3,7,8],jwksrefreshinterv:3,jwt:[3,8],jwtban:3,jwtclaim:3,keep:2,kei:3,kit:7,know:3,kwarg:3,let:3,licens:7,list:[0,2,3,8],littl:2,live:[3,7,8],load:[3,8],local:[1,2,3,7,8],locali:8,log:6,look:[2,3],maintain:[2,4],major:2,make:[2,3,5,7],manag:7,mani:[0,2,8],master:5,match:3,meet:2,messag:3,method:[3,5,8],might:2,minor:2,mkvirtualenv:2,model:6,modul:[4,6],more:[2,8],most:5,name:2,namespac:[3,8],namespacerol:3,nanosecond:3,narrow:2,need:[3,8],net:0,newdefaultcli:[3,8],nil:3,nilclaimerror:3,nolocalvalidationerror:[3,8],none:3,nonetyp:3,now:2,oauth:8,object:3,offici:2,ojl:5,onc:[5,8],open:2,oper:2,option:3,order:3,ordereddict:3,org:8,origin:2,other:[2,8],output:8,own:7,owner:8,packag:[0,4,6],page:[0,4],pars:[1,3,8],parse_nanotimestamp:3,part:2,pass:[2,8],patch:2,perform:3,period:3,permiss:[1,3,4,7],permission_resourc:8,permissionresourc:3,permssion:3,phone:[1,3,7],phone_verifi:8,pip:[2,5],placehold:3,platformid:3,platformuserid:3,pleas:[2,5,8],portal:8,possibl:2,post:[2,3],prefer:5,prerequisit:4,process:5,project:[0,2,8],properti:8,propos:2,pull:4,pull_request:2,push:2,put:2,pypackag:0,pypi:2,pytest:2,python:[0,2,3,5,8],rais:3,reach:0,read:8,readi:2,readm:2,recent:5,record:3,redirecturi:3,refresh:3,refreshaccesstokenerror:3,refreshtoken:3,releas:4,rememb:[2,3],remind:2,replac:3,repo:[2,5],repositori:5,reproduc:2,reqscop:3,request:[3,4],requir:[3,4,8],required_permiss:8,required_role_id:8,required_scop:8,requiredpermiss:3,requiredroleid:3,resourc:[3,8],respons:3,revoc:[3,8],revocationlist:3,revocationlistrefreshinterv:3,revok:3,revokedat:3,revokedtoken:3,revokedus:3,rfc7519:8,right:3,role:[1,3,4,7],roleid:3,rolenam:3,rolenotfounderror:3,rolepermissioncach:3,rolescacheexpirationtim:3,rst:2,run:[2,5],safe:3,sampl:8,sample_role_id_12345:8,sample_scop:8,schedact:3,schedcron:3,schedrang:3,scope:[1,2,3,4,7],script:3,sdk:[0,2,3,5,8],search:4,second:[3,8],secret:8,section:8,seen:0,send:2,servic:[3,7,8],set:[2,3,8],setup:[2,5],should:2,signatur:3,softwar:7,sourc:[3,4],specif:[3,8],stabl:4,start:[1,3,4],startlocalvalid:[3,8],startlocalvalidationerror:[3,8],statu:[1,3,7],step:2,store:[3,8],str:3,string:[3,8],sub:3,subclass:3,submodul:6,subset:2,success:[3,8],suffici:3,support:2,sure:[2,3,5],system:2,tag:2,tarbal:5,team:0,templat:0,termin:5,test:[2,5],test_iam_python_sdk:2,thank:0,thei:2,them:2,thi:[0,2,3,5,8],thread:3,through:[2,5],time:3,tip:4,token:[1,3,4,7],tokenrespons:3,tokenrevokederror:3,tokentyp:3,tool:8,tox:2,travi:2,troubleshoot:2,ttl:3,two:8,type:[3,4,8],unauthor:3,unauthorizederror:3,union:3,updat:[2,8],uri:3,url:8,usag:4,use:[2,7,8],user:[3,4,7],user_anonym:8,useranonymousstatu:[3,8],useremailverificationstatu:[3,8],userid:[3,8],userphoneverificationstatu:[3,8],userrevocationlistrecord:3,userrevokederror:3,using:[3,7,8],util:6,valid:[1,3,4,7],valid_permiss:8,valid_rol:8,validateaccesstoken:[3,8],validateaccesstokenerror:[3,8],validateandparseclaim:[3,8],validateandparseclaimserror:[3,8],validateaudi:[3,8],validateaudienceerror:[3,8],validatejwterror:3,validatepermiss:[3,8],validatepermissionerror:[3,8],validaterol:[3,8],validatescop:[3,8],validatescopeerror:[3,8],valu:[3,8],valueerror:3,verif:[1,3,8],verifi:[4,7],version:2,virtualenv:2,virtualenvwrapp:2,volunt:2,wai:2,want:2,web:2,websit:2,welcom:2,were:3,when:[2,3],whether:2,whoever:2,work:2,would:2,you:[2,3,5,8],your:[2,5,8],your_name_her:2},titles:["Credits","Changelog","Contributing","iam_python_sdk package","IAM Python SDK documentation","Installation","API Documentation","IAM Python SDK","Usage"],titleterms:{access:8,anonym:8,api:6,audienc:8,ban:8,bloom:3,bug:2,cach:3,changelog:1,check:8,cli:3,client:[3,8],config:3,content:3,contribut:2,contributor:0,credit:0,deploi:2,document:[2,4,6],email:8,error:3,featur:[2,7],feedback:2,fix:2,from:5,gener:0,get:2,grant:8,guidelin:2,iam:[4,7,8],iam_python_sdk:3,implement:2,indic:4,info:8,init:8,instal:5,log:3,maintain:0,model:3,modul:3,packag:3,permiss:8,phone:8,prerequisit:8,pull:2,python:[4,7],releas:5,report:2,request:2,requir:5,role:8,scope:8,sdk:[4,7],sourc:5,stabl:5,start:2,statu:8,submit:2,submodul:3,tabl:4,tip:2,token:8,type:2,usag:8,user:8,util:3,valid:8,verifi:8,write:2}})