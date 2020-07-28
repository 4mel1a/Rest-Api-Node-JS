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

// endpoint "/convert/jenis/nilai" dg method GET
app.get("/convert/:jenis/:nilai", (req,res) => {
    let jenis = req.params.jenis;
    let nilai = req.params.nilai;
    //hitung convert
    let resul = (j, n) => {
        if (j == "celsius") {
            let r = {
                "reamur": 4 / 5 * n,
                "fahrenheit": (9 / 5 * n) + 32,
                "kelvin": (5 / 5 * n) + 273
            }
            return r
        } else if (j == "reamur") {
            let r = {
                "celsius": 5 / 4 * n,
                "fahrenheit": (9 / 4 * n) + 32,
                "kelvin": (5 / 4 * n) + 273
            }
            return r
        } else if (j == "fahrenheit") {
            let r = {
                "celsius": 5 / 9 * (n - 32),
                "reamur": 4 / 9 * (n - 32),
                "kelvin": 5 / 9 * (n - 32) + 273
            }
            return r
        } else if (j == "kelvin") {
            let r = {
                "celsius": 5 /5 * (n - 273),
                "fahrenheit": 9 / 5 * (n - 273) + 32,
                "reamur": 4 / 5 * (n - 273)
            }
            return r
        }
    }

    //membuat objek yg berisi data yg akan dijadikan response
    let response = {
        jenis : jenis,
        nilai : nilai,
        result : resul(jenis,nilai)
    }
    //memberikan response dg format JSON yg berisi objek diatas
    res.json(response);
})

  //menjalankan server pada port 8000
  app.listen(8000, () => {
    console.log('Server run on port 8000');
  })