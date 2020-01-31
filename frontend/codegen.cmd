java -jar swagger-codegen-cli-2.3.1.jar generate -i http://localhost:8080/v2/api-docs -l typescript-angular -o src/remote --config config.json -D supportsES6=true
REM --additional-properties npmName=@techschard/language-api,snapshot=true,ngVersion=7.2.0
