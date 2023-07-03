const inputImg = document.querySelector('#up-file')
var error = document.querySelector('.error')
const preview = document.querySelector('.preview')

//đọc file ảnh
// inputImg.addEventListener('change', (e) => {
//     console.log(e.target.files[0])
//     let file = e.target.files[0]

//     if(!file) return

//     if(file.size / (1024 * 1024) > 3 && !file.name.endsWith('.jpg')) {
//         error.innerHTML = 'Hinh anh phai thuoc dinh dang png va Chi duoc upload anh duoi 3MB'
//         return
//     } else {
//         error.innerHTML = ''
//     }

//     if(!file.name.endsWith('.jpg')) {
//         console.log('Hinh anh phai thuoc dinh dang png')
//         error.innerHTML = 'Hinh anh phai thuoc dinh dang png'
//         return
//     } else {
//         error.innerHTML = ''
//     }

//     if(file.size / (1024 * 1024) > 3) {
//         console.log('Chi duoc upload anh duoi 5MB')
//         error.innerHTML = 'Chi duoc upload anh duoi 5MB'
//         return
//     } else {
//         error.innerHTML = ''
//     }

    

//     let img = document.createElement('img')
//     img.src = URL.createObjectURL(file)
//     // img.onload = () => {
//     //     URL.revokeObjectURL(img.src);
//     // };

//     document.querySelector('.preview').appendChild(img)
// })


//đoc ảnh bằng mã base 64
inputImg.addEventListener('change', (e) => {
    let file = e.target.files[0]
    console.log(file)

    if(!file) return

    if(file.size / (1024 * 1024) > 3 && !file.name.endsWith('.jpg')) {
        error.innerHTML = 'Hinh anh phai thuoc dinh dang png va Chi duoc upload anh duoi 5MB'
        return
    } else {
        error.innerHTML = ''
    }

    if(!file.name.endsWith('.jpg')) {
        console.log('Hinh anh phai thuoc dinh dang png')
        error.innerHTML = 'Hinh anh phai thuoc dinh dang png'
        return
    } else {
        error.innerHTML = ''
    }

    if(file.size / (1024 * 1024) > 3) {
        console.log('Chi duoc upload anh duoi 3MB')
        error.innerHTML = 'Chi duoc upload anh duoi 5MB'
        return
    } else {
        error.innerHTML = ''
    }

    let img = document.createElement('img')
    let fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onloadend = function(e) {
        console.log(e)
        img.src = e.target.result
    }

    preview.appendChild(img)
})



