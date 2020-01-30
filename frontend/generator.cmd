REM java -jar C:%HOMEPATH%\.m2\repository\io\swagger\swagger-codegen\2.4.12\swagger-codegen-2.4.12.jar generate -i api-docs.json -l typescript-angular -o remote --additional-properties npmName=@techschard/language-api,snapshot=true,ngVersion=7.2.0

java -jar swagger-codegen-cli-2.3.1.jar generate -i http://localhost:8080/v2/api-docs -l typescript-angular -o src/remote
REM --additional-properties npmName=@techschard/language-api,snapshot=true,ngVersion=7.2.0
