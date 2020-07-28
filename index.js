const express = require('express'); // memanggil express js
const bodyParser = require('body-parser'); // memanggil library body-parser
const cors = require('cors'); // memanggil library cors
const app = express();

//penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json());

//penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({ extended: true }));

//penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors());

// 1. endpoint "/test" dengan method GET
app.get('/test', (req, res) => {
  // req merupakan variabel yg berisi data request
  // res merupakan variabel yg berisi data response dari end-point
  // membuat objek yang berisi data yg akan dijadikan response
  let response = {
    message: 'Ini end-point pertama ku',
    method: req.method,
    code: res.statusCode,
  };

  // memberikan responce dengan format JSON yg berisi objek diatas
  res.json(response);
});

// 2. endpoint "/test/nama/umur" dg method GET
app.get('/test/:name/:age', (req, res) => {
  // req merupakan variabel yg berisi data request
  // res merupakan variabel yg berisi data response dari end-point
  // membuat objek yang berisi data yg akan dijadikan response
  let name = req.params.name;
  let age = req.params.age;
  let response = {
    message: 'Success',
    name: name,
    age: age,
  };

  // memberikan responce dengan format JSON yg berisi objek diatas
  res.json(response);
});

//menjalankan server pada port 8000
app.listen(8000, () => {
  console.log('Server run on port 8000');
});

// 3. endpoint "/bujur_sangkar" dg method POST
app.post("/bujur_sangkar", (req,res) => {
  //menampung data yang di kirimkan dan mengkonversi menjadi tipe numerik
  let panjang = Number(req.body.panjang) //mengambil nilai panjang dari body
  let lebar = Number(req.body.lebar) // mengambil nilai lebar dari body
  let luas = panjang * lebar
  let keliling = 2 * (panjang + lebar)

  //membuat objek yang berisi data yang akan dijadikan response
  let response = {
    panjang : panjang,
    lebar : lebar,
    luas : luas,
    keliling : keliling
  }

  //memberikan response dengan format JSON yang berisi objek di atas
  res.json(response)
})