document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("paymentForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const amount = parseInt(document.getElementById("amount").value);

    if (!name || isNaN(amount) || amount < 1000) {
      alert("Mohon isi data dengan benar!");
      return;
    }

    alert(`✅ Pembayaran berhasil!\nNama: ${name}\nJumlah: Rp${amount.toLocaleString("id-ID")}`);
    form.reset();
  });
});