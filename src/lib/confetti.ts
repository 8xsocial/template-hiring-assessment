// Simple confetti effect for celebration moments
export default function confetti() {
  const colors = ["#10b981", "#3b82f6", "#8b5cf6", "#f59e0b", "#ef4444"]
  const confettiCount = 100

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement("div")
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      top: -10px;
      opacity: ${Math.random() + 0.5};
      border-radius: ${Math.random() > 0.5 ? "50%" : "0"};
      transform: rotate(${Math.random() * 360}deg);
      pointer-events: none;
      z-index: 9999;
    `

    document.body.appendChild(confetti)

    const animation = confetti.animate(
      [
        { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
        {
          transform: `translateY(100vh) rotate(${Math.random() * 720}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: Math.random() * 2000 + 2000,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }
    )

    animation.onfinish = () => confetti.remove()
  }
}
