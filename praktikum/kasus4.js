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

// endpoint "/bmi" dg method POST
app.post("/bmi", (req,res) => {
    //menampung data yg dikirimkan dan menkonversikan menjadi numerik
    let tinggi = Number(req.body.tinggi) //mengambil nilai tinggi dari body
    let berat = Number(req.body.berat) //mengambil nilai berat dari body
    //hitung bmi dan status
    let bmi = berat / (tinggi ** 2)
    let status = () => {
    if(bmi < 18.5){
        return "Kekurangan berat badan"
    }else if(bmi >= 18.5 && bmi <= 24.9){
        return "Normal (ideal)"
    }else if(bmi >= 25.0 && bmi <= 29.9){
        return "Kelebihan berat badan"
    }else{
        return "kegemukan (obesitas)"
    }
}

    //membuat objek yg berisi data yg akan dikirimkan
    let response = {
        tinggi : tinggi,
        berat : berat,
        bmi : bmi,
        status : status()
    }
    //memberikan response dg format JSON yg berisi objek diatas
    res.json(response)
})

//menjalankan server pada port 8000
app.listen(8000, () => {
    console.log('Server run on port 8000');
  });