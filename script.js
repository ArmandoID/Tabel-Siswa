const murid = [
    { no: 1, nama: "Armando", jenisKelamin: "Laki-laki", tanggalLahir: "27 Juni 2009", alamat: "Jayapura" },
    { no: 2, nama: "Simson", jenisKelamin: "Laki-laki", tanggalLahir: "22 Maret 2011", alamat: "Jayapura" },
    { no: 3, nama: "Valentino", jenisKelamin: "Laki-laki", tanggalLahir: "25 Februari 2009", alamat: "Jayapura" },
    { no: 4, nama: "Beverly", jenisKelamin: "Perempuan", tanggalLahir: "21 Juli 2009", alamat: "Jayapura" },
    { no: 5, nama: "Handison", jenisKelamin: "Laki-laki", tanggalLahir: "5 Februari 2009", alamat: "Jayapura" },
    { no: 6, nama: "Fajar", jenisKelamin: "Laki-laki", tanggalLahir: "15 Maret 2007", alamat: "Jayapura" },
    { no: 7, nama: "Abraham", jenisKelamin: "Laki-laki", tanggalLahir: "13 November 2007", alamat: "Jayapura" },
    { no: 8, nama: "Kindy", jenisKelamin: "Perempuan", tanggalLahir: "23 Agustus 2008", alamat: "Jayapura" },
    { no: 9, nama: "Mitha", jenisKelamin: "Perempuan", tanggalLahir: "4 November 2007", alamat: "Jayapura" },
    { no: 10, nama: "Kristian", jenisKelamin: "Laki-laki", tanggalLahir: "23 Februari 2008", alamat: "Jayapura" }
];

const table = document.querySelector("#tabelSiswa");

murid.forEach(siswa => {
    const tr = document.createElement("tr");

    const tdNo = document.createElement("td");
    tdNo.textContent = siswa.no;
    tr.appendChild(tdNo);

    const tdNama = document.createElement("td");
    tdNama.textContent = siswa.nama;
    tr.appendChild(tdNama);
    
    const tdJK = document.createElement("td");
    tdJK.textContent = siswa.jenisKelamin;
    tr.appendChild(tdJK);

    const tdTL = document.createElement("td");
    tdTL.textContent = siswa.tanggalLahir;
    tr.appendChild(tdTL);

    const tdAl = document.createElement("td");
    tdAl.textContent = siswa.alamat;
    tr.appendChild(tdAl);
    
    table.appendChild(tr);
});