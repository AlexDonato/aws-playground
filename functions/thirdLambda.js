const csvtojson = require('csvtojson');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();
  
exports.handler = async (event, context) => {
  
    //const bucket = event.Records[0].s3.bucket.name;
    //const key = event.Records[0].s3.object.key;

    // Nome del file CSV nell'archivio S3
    const csvFileName = 'pippo.csv';

    // Nome del file JSON da generare
    const jsonFileName = 'output.json';

    try {
        // Scaricamento del file CSV dall'archivio S3
        const params = {
            Bucket: 'photo-test-alex-nov-2023',
            Key: csvFileName
        };
        const { Body } = await s3.getObject(params).promise();
        const csvContent = Body.toString('utf-8');

        // Conversione del CSV in JSON
        const jsonData = await csvToJSON(csvContent);

        console.log ('Contenuto del json:\n\n' + JSON.stringify(jsonData));
        
        // Caricamento del file JSON nell'archivio S3
        /*
        await s3.putObject({
            Body: JSON.stringify(jsonData, null, 2),
            Bucket: 'nome-del-tuo-bucket',
            Key: jsonFileName
        }).promise();
        */
        return {
            statusCode: 200,
            body: JSON.stringify('Conversione completata con successo!')
        };
    } catch (error) {
        console.error('Errore:', error);
        return {
            statusCode: 500,
            body: JSON.stringify('Si è verificato un errore durante la conversione.')
        };
    }
};

async function csvToJSON(csvContent) {
    // Utilizzo di csvtojson per la conversione
    return csvtojson().fromString(csvContent);
}
