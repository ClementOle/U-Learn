set modelsDir=%cd%\src\remote\model\

java -jar swagger-codegen-cli-2.3.1.jar generate -i http://localhost:8080/v2/api-docs -l typescript-angular -o src/remote --config config.json -D supportsES6=true --additional-properties ngVersion=8.1.0

