const {MongoClient} = require('mongodb');

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 
async function main() {
    const uri = "mongodb+srv://MariamBatool:mary5376854@cluster0.3mc9aw2.mongodb.net/authDB?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        await client.connect();
    
        await listDatabases(client);
     
    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }      
}
main().catch(console.error);
