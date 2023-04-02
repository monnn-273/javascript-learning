let konfirmasi = true;
let counter = 0;

do {
  konfirmasi = confirm("Apakah anda mau mengulang?");
  if (konfirmasi == true) {
    counter++;
  } else {
    document.write(`Perulangan sudah dilakukan sebanyak: ${counter} kali.`);
  }
} while (konfirmasi == true);
