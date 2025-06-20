window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".pad");
  const bigCircle = document.querySelector(".big-circle");

  const circleRadius = 294 / 2;      // 147px
  const buttonRadius = 70 / 2;       // 35px
  const spacing = 82;                // 원 중심에서 버튼 중심까지 거리

  const angles = [45, 135, 225, 315]; // 각 버튼 위치 (사분면 중심 각도)

  buttons.forEach((button, index) => {
    const angle = angles[index] * Math.PI / 180;
    const x = circleRadius + spacing * Math.cos(angle) - buttonRadius;
    const y = circleRadius + spacing * Math.sin(angle) - buttonRadius;

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  });

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const sound = button.dataset.sound;
      const audio = new Audio(`sound/${sound}.wav`);
      audio.play();

      
    // ⭐ 반짝이 효과 추가
    button.classList.add("active");
    setTimeout(() => button.classList.remove("active"), 150);
    });
  });
});
