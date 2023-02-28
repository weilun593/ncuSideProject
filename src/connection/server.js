const { MongoClient } = require('mongodb');

// 設置MongoDB URI，包含數據庫名稱、用戶名和密碼
const uri = 'mongodb+srv://weilun:asd19951117@cluster0.vqvf0mb.mongodb.net/?retryWrites=true&w=majority';

// 創建MongoClient對象
const client = new MongoClient(uri);

// 定義異步函數以連接MongoDB
async function connect() {
  try {
    // 嘗試連接MongoDB
    await client.connect();

    console.log("成功連接到MongoDB！");
    
    // 獲取對應的數據庫和集合
    const database = client.db('myFirstDatabase');
    const collection = database.collection('user');

    // 在集合中查詢文檔
    const result = await collection.findOne({ name: 'admin' });
    console.log(result);
  } catch (err) {
    console.error(err);
  } finally {
    // 斷開與MongoDB的連接
    await client.close();
  }
}
// 呼叫連接函數
connect();
