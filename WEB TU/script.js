// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true
});

// Fitur A: Buku Tamu
function openGuestBook() {
    Swal.fire({
        title: '<h2 class="text-2xl font-bold text-gray-800">Buku Tamu</h2>',
        html: `
            <div class="text-left space-y-4 px-2">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                    <input id="swal-nama" class="swal2-input w-full mx-0 border-gray-300 rounded-lg shadow-sm focus:ring-yellow-400 focus:border-yellow-400" placeholder="Masukkan nama anda">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Asal Instansi</label>
                    <input id="swal-instansi" class="swal2-input w-full mx-0 border-gray-300 rounded-lg shadow-sm focus:ring-yellow-400 focus:border-yellow-400" placeholder="Instansi / Umum">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Keperluan</label>
                    <textarea id="swal-keperluan" class="swal2-textarea w-full mx-0 border-gray-300 rounded-lg shadow-sm focus:ring-yellow-400 focus:border-yellow-400 h-24" placeholder="Tujuan kedatangan..."></textarea>
                </div>
            </div>
        `,
        showCancelButton: true,
        confirmButtonText: 'Simpan',
        confirmButtonColor: '#EBEF23',
        cancelButtonText: 'Batal',
        cancelButtonColor: '#d33',
        customClass: {
            confirmButton: 'text-black font-bold px-6 py-2',
            popup: 'rounded-2xl'
        },
        preConfirm: () => {
            const nama = document.getElementById('swal-nama').value;
            const instansi = document.getElementById('swal-instansi').value;
            const keperluan = document.getElementById('swal-keperluan').value;

            if (!nama || !instansi || !keperluan) {
                Swal.showValidationMessage('Mohon lengkapi semua data!');
                return false;
            }
            return { nama, instansi, keperluan };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Terima Kasih!',
                text: 'Data kunjungan Anda telah tersimpan.',
                confirmButtonColor: '#EBEF23',
                confirmButtonText: 'Tutup',
                customClass: {
                    confirmButton: 'text-black font-bold'
                }
            });
        }
    });
}

// Fitur B: Indeks Kepuasan
function openSurvey() {
    Swal.fire({
        title: '<h2 class="text-xl font-bold text-gray-800 mb-4">Bagaimana pelayanan kami?</h2>',
        html: `
            <div class="grid grid-cols-2 gap-4 my-6">
                <button onclick="submitSurvey('Sangat Puas')" class="flex flex-col items-center justify-center p-4 bg-green-50 rounded-xl border-2 border-green-200 hover:bg-green-100 hover:scale-105 transition-all group">
                    <span class="text-4xl mb-2 group-hover:scale-125 transition-transform">😍</span>
                    <span class="text-sm font-bold text-green-700">Sangat Puas</span>
                </button>
                <button onclick="submitSurvey('Puas')" class="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-xl border-2 border-blue-200 hover:bg-blue-100 hover:scale-105 transition-all group">
                    <span class="text-4xl mb-2 group-hover:scale-125 transition-transform">🙂</span>
                    <span class="text-sm font-bold text-blue-700">Puas</span>
                </button>
                <button onclick="submitSurvey('Cukup')" class="flex flex-col items-center justify-center p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200 hover:bg-yellow-100 hover:scale-105 transition-all group">
                    <span class="text-4xl mb-2 group-hover:scale-125 transition-transform">😐</span>
                    <span class="text-sm font-bold text-yellow-700">Cukup</span>
                </button>
                <button onclick="submitSurvey('Kurang')" class="flex flex-col items-center justify-center p-4 bg-red-50 rounded-xl border-2 border-red-200 hover:bg-red-100 hover:scale-105 transition-all group">
                    <span class="text-4xl mb-2 group-hover:scale-125 transition-transform">🙁</span>
                    <span class="text-sm font-bold text-red-700">Kurang</span>
                </button>
            </div>
        `,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'Tutup',
        customClass: {
            popup: 'rounded-2xl'
        }
    });
}

function submitSurvey(rating) {
    Swal.fire({
        icon: 'success',
        title: 'Terima Kasih!',
        text: `Anda memilih: ${rating}`,
        timer: 2000,
        showConfirmButton: false
    });
}

// Fitur C: Google View (Virtual Tour)
function openMap() {
    Swal.fire({
        title: '<strong class="text-lg">Lokasi MAN 2 Pamekasan</strong>',
        html: `
            <div class="relative w-full h-[400px] rounded-xl overflow-hidden shadow-inner bg-gray-100 border border-gray-200">
                <!-- Google Maps Embed for MAN 2 Pamekasan -->
               <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8236171887085!2d113.48398187453472!3d-7.146524370165787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd77f95029e248f%3A0xc375c304d9c02562!2sMAN%202%20Pamekasan!5e0!3m2!1sen!2sid!4v1709743000000!5m2!1sen!2sid" 
                    width="100%" 
                    height="100%" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <p class="mt-4 text-sm text-gray-500">Jl. KH. Wahid Hasyim No.28, Gn. Sekar, Kec. Sampang, Kabupaten Sampang (Lokasi Contoh)</p>
        `,
        width: 800,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
            popup: 'rounded-2xl'
        }
    });
}
