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

// 1.endpoint "/tabung" dg method POST
app.post("/tabung", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversikan menjadi tipe numerik
    let jari = Number(req.body.jari) //mengambil nilai jarijari dari body
    let tinggi = Number(req.body.tinggi) //mengambil nilai tinggi dari body
    // hitung volume dan luas
    let volume = 3.14 * (jari ** 2) * tinggi
    let luasPermukaan = 2 * 3.14 * (jari ** 2)

    //membuat objek yang berisi data yg akan dijadikan response
    let response = {
        jari : jari,
        tinggi : tinggi,
        volume : volume,
        luasPermukaan : luasPermukaan
    }
    // memberikan response dg forma JSON yg berisi objek diatas
    res.json(response)
})

// 2.endpoint "/balok" dg method POST
app.post("/balok", (req,res) => {
    //menampung data yg dikirimkan dan mengkonversikan menjadi tipe numerik
    let panjang = Number(req.body.panjang) //mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) //mengambil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) //mengambil nilai tinggi dari body
    // hitung volume dan luas
    let volume = panjang * lebar * tinggi 
    let luasPermukaan = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi)

    //membuat objek yang berisi data yang akan dijadikan responce
    let response = {
        panjang : panjang,
        lebar : lebar,
        tinggi : tinggi,
        volume : volume,
        luasPermukaan : luasPermukaan
    }
    // memberikan response dg format JSON yg berisi objek diatas
    res.json(response)
})

// 3.endpoint "/kubus" dg method POST
app.post("/kubus", (req,res) => {
    //menampung data yg dikirimkan dan mengkonversikan menjadi tipe numerik
    let sisi = Number(req.body.sisi) //mengambil nilai sisi dari body
    //hitung volume dan luasPermukaan
    let volume = sisi * sisi * sisi
    let luasPermukaan = 6 * (sisi ** 2)

    //membuat objek yang berisi data yg akan dijadikan response
    let response = {
        sisi : sisi,
        volume : volume,
        luasPermukaan : luasPermukaan
    }
    //memberikan response dg format JSON yg berisi objek diatas
    res.json(response)
})

// 4.endpoint "/kerucut" dg method POST
app.post("/kerucut", (req,res) => {
    //menampung data yg dikirimkan dan mengkonversikan menjadi tipe numerik
    let jari = Number(req.body.jari) //mengambil nilai jari dari body
    let tinggi = Number(req.body.tinggi) //mengambil nilai tinggi dari body
    let s = Number(req.body.s) //mengambil nilai garis pelukis dai body
    //hitung volume dan luasPermukaan
    let volume = 1/3 * 3.14 * (jari ** 2) * tinggi
    let luasPermukaan = 3.14 * jari * (jari + s)

    //membuat objek yg berisi data yg akan dikirimkan response
    let response = {
        jari : jari,
        tinggi : tinggi,
        garisPelukis : s,
        volume : volume,
        luasPermukaan : luasPermukaan
    }
    //memberikan response dg format JSON yg berisi objek diatas
    res.json(response)
})

//menjalankan server pada port 8000
app.listen(8000, () => {
    console.log('Server run on port 8000');
  });