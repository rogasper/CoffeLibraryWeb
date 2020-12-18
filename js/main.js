$('.reviews .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        560: {
            items: 2
        }
    }
})


AOS.init();


$('.suggest-book .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        560: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})
$(document).ready(function() {
    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    let nav_offset_top = $('.header-penanda').height();

    function navbarFixed() {
        if ($('.header-penanda').length) {
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.navbar').addClass('fixed-top');
                } else {
                    $('.navbar').removeClass('fixed-top');
                }
            })
        }
    }

    navbarFixed();
})

const triggerLangganan = document.querySelectorAll(".genre-card .card-deck .membership")
triggerLangganan.forEach((el, idx) => {
    el.addEventListener('click', () => {
        Swal.fire({
            icon: 'warning',
            title: 'Anda Tidak Bisa Akses',
            text: 'anda harus berlangganan terlebih dahulu',
            showCancelButton: true,
            confirmButtonText: '<a href="../langganan.html" class="text-decoration-none text-white text-center btn" style="margin: 0px -10px;">Berlangganan</a>',
            cancelButtonText: 'Kembali'
        })
    })
})

const btnLove = document.querySelector('.btns i');

btnLove.addEventListener('click', (e) => {
    const ganti = e.target
    const love = document.createElement('i')
    love.innerHTML = `<i class="fas fa-heart"></i>`
    if (btnLove.hasChildNodes()) {
        btnLove.removeChild(btnLove.childNodes[0])
    } else {
        ganti.appendChild(love)
    }
})

const btnPinjam = document.querySelector('.details-book .btn-pinjam');
btnPinjam.addEventListener('click', () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger mr-3'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Yakin Ingin Meminjam Ini?',
        text: "Anda bisa membaca online di website COLAB dan membaca secara langsung di perpustakaan kami. Tunjukkan saja koleksi kalian maka petugas akan mencarikan bukunya",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, Saya Pinjam!',
        cancelButtonText: 'Batal',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: 'Sudah Tersimpan!',
                icon: 'success',
                confirmButtonText: '<a href="../index.html" class="btn btn-success text-decoration-none">Menuju Koleksi</a>'
            })
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Dibatalkan',
                'Ok, tidak masalah',
                'error'
            )
        }
    })
});


const btnPreview = document.querySelector('.details-book .btn-preview')
btnPreview.addEventListener('click', () => {
    Swal.fire({
        imageUrl: '../img/details/preview.jpg',
        imageWidth: `100%`,
        imageHeight: `100%`,
        imageAlt: 'Custom image',
        width: `90%`,
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: 'Kembali'
    })
})