# lambda_park

Questo è un progetto per giocare con le lambda e testarle in locale

1. dal terminale di code
	- npm install --location=global servless
	- serverless create --template aws-nodejs --path . 
2. attenzione a creare le credenziali (id e secret nel file ~/.aws/credentials, poi per eseguire 
	- serverless invoke local --stage dev --aws-profile aws-alex -f firstLambda
3. il deploy su AWS si fa con 
	- serverless deploy --stage dev --aws-profile aws-alex.   (qui deploya tutto)
	- fatto questo, mi ritrovo una function il cui nome è costruito con nome progetto-ambiente-nome del file di function JS 
4. ora posso invocarla dal terminale usando
	- serverless invoke --stage dev --aws-profile aws-alex -f firstLambda
5. se ho fatto una modifica ad una function e voglio deployare solo quella
   	- serverless deploy --stage dev --aws-profile aws-alex -f firstLambda

Buon divertimento !!!!
