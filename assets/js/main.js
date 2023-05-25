// Lấy các phần tử DOM cần thiết
const dayElements = document.querySelectorAll('.time-day');
const hoursElements = document.querySelectorAll('.time-hours');
const minutesElements = document.querySelectorAll('.time-minutes');
const secondsElements = document.querySelectorAll('.time-seconds');

// Tính toán thời gian kết thúc
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 3); // Cộng 3 ngày
countdownDate.setHours(countdownDate.getHours() + 16); // Cộng 16 giờ
countdownDate.setMinutes(countdownDate.getMinutes() + 59); // Cộng 59 phút
countdownDate.setSeconds(countdownDate.getSeconds()); // Cộng 3 giây

// Cập nhật thời gian đếm ngược mỗi giây
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = countdownDate - currentDate;

  // Tính toán số ngày, giờ, phút, giây còn lại
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Cập nhật giá trị trong các phần tử DOM
  dayElements[0].textContent = Math.floor(days / 10); // Chữ số hàng chục của số ngày
  dayElements[1].textContent = days % 10; // Chữ số hàng đơn vị của số ngày

  hoursElements[0].textContent = Math.floor(hours / 10); // Chữ số hàng chục của số giờ
  hoursElements[1].textContent = hours % 10; // Chữ số hàng đơn vị của số giờ

  minutesElements[0].textContent = Math.floor(minutes / 10); // Chữ số hàng chục của số phút
  minutesElements[1].textContent = minutes % 10; // Chữ số hàng đơn vị của số phút

  secondsElements[0].textContent = Math.floor(seconds / 10); // Chữ số hàng chục của số giây
  secondsElements[1].textContent = seconds % 10; // Chữ số hàng đơn vị của số giây
}
