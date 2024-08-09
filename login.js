// fungsi login
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Mengambil nilai dari input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mengecek username dan password
    if (username === 'admin' && password === '9') {
        // Jika benar, arahkan ke halaman main-dashboard/main.js
        window.location.href = '../main-menu/main.html';
    } else {
        // Jika salah, tampilkan alert dan reload halaman
        alert('Username atau password salah!');
        window.location.href = '/index.html';
        // location.reload();
    }
// fungsi login end
});

//hapus
// document.getElementById("hapus").addEventListener("click", function(event) {
//     event.preventDefault(); // Mencegah aksi default tombol
//     const h1Elements = document.querySelectorAll(".data h1");
//     h1Elements.forEach(function(h1) {
//         h1.innerHTML = ""; // Mengosongkan teks di dalam setiap elemen <h1>
//     });
// });
//hapus end

//tambah
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Mengambil nilai dari input form
    const nama = document.getElementById("nama").value;
    const harga = document.getElementById("harga").value;

    // Menyimpan nilai ke localStorage
    localStorage.setItem("nama", nama);
    localStorage.setItem("harga", harga);

    // Redirect ke halaman data.html
    window.location.href = "data.html";
});
