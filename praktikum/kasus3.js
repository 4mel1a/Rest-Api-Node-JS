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

// endpoint "/convert/:jenis/:number" dg method GET
app.get("/convert/:jenis/:number", (req, res) => {
        let jenis = req.params.jenis
        let number = req.params.number
        //hitung convert
        let conver = (n, f, t) => {
            return parseInt(n, f).toString(t)
        }
        let resul = (j, n) => {
            if (j == "desimal") {
                let r = {
                    "biner": conver(n, 10, 2),
                    "oktal": conver(n, 10, 8),
                    "hexadesimal": conver(n, 10, 16)
                }
                return r
            } else if (j == "biner") {
                let r = {
                    "desimal": conver(n, 2, 10),
                    "oktal": conver(conver(n, 2, 10), 10, 8),
                    "hexadesimal": conver(n, 2, 16)
                }
                return r
            } else if (j == "oktal") {
                let r = {
                    "desimal": conver(n, 8, 10),
                    "biner": conver(conver(n, 8, 10), 10, 2),
                    "hexadesimal": conver(conver(n, 8, 10), 10, 16)
                }
                return r
            } else if (j == "hexadesimal") {
                let r = {
                    "desimal": conver(n, 16, 10),
                    "biner": conver(n, 16, 2),
                    "oktal": conver(n, 16, 8)
                }
                return r
            }
        }
        // membuat objek yg berisi data yg akan dijadikan response
        let response = {
            jenis: jenis,
            nilai: number,
            result: resul(jenis, number)
        }
        //memberikan response dg format JSON yg berisi objek diatas
        res.json(response)
    })
    
    //menjalankan server pada port 8000
  app.listen(8000, () => {
    console.log('Server run on port 8000');
  })