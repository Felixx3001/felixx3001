// 初始化粒子效果
if (window.particlesJS) {
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ['#e60073', '#23a6d5', '#23d5ab', '#ee7752']
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        }
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
}

// 鼠标点击波纹效果
document.addEventListener('click', function(e) {
  const ripple = document.createElement('div');
  ripple.className = 'ripple';
  ripple.style.left = e.clientX - 10 + 'px';
  ripple.style.top = e.clientY - 10 + 'px';
  document.body.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 1000);
});

// 鼠标轨迹粒子
document.addEventListener('mousemove', function(e) {
  if (Math.random() > 0.9) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.width = '5px';
    particle.style.height = '5px';
    particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '9999';
    particle.style.animation = 'fadeOut 1s forwards';
    document.body.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
});

// 添加淡出动画
if (!document.querySelector('#fadeOutStyle')) {
  const style = document.createElement('style');
  style.id = 'fadeOutStyle';
  style.textContent = `
    @keyframes fadeOut {
      to {
        opacity: 0;
        transform: translateY(-50px) scale(0);
      }
    }
  `;
  document.head.appendChild(style);
}

// 滚动动画
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideInUp 0.8s ease-out';
    }
  });
}, { threshold: 0.1 });

// 添加滑入动画样式
const slideStyle = document.createElement('style');
slideStyle.textContent = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(slideStyle);

// 观察所有段落、标题和图片
document.querySelectorAll('p, h1, h2, h3, h4, img, table, pre').forEach(el => {
  observer.observe(el);
});

// 给标题添加彩色阴影
document.querySelectorAll('h1, h2').forEach(heading => {
  heading.style.background = 'linear-gradient(45deg, #e60073, #23a6d5, #23d5ab)';
  heading.style.webkitBackgroundClip = 'text';
  heading.style.webkitTextFillColor = 'transparent';
  heading.style.backgroundClip = 'text';
  heading.style.fontWeight = 'bold';
});

// 代码块复制按钮
document.querySelectorAll('pre').forEach(pre => {
  const button = document.createElement('button');
  button.textContent = '📋 Copy';
  button.style.cssText = `
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 5px 10px;
    background: linear-gradient(45deg, #e60073, #23a6d5);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.3s;
  `;
  
  pre.style.position = 'relative';
  pre.appendChild(button);
  
  pre.addEventListener('mouseenter', () => {
    button.style.opacity = '1';
  });
  
  pre.addEventListener('mouseleave', () => {
    button.style.opacity = '0';
  });
  
  button.addEventListener('click', () => {
    const code = pre.querySelector('code') || pre;
    navigator.clipboard.writeText(code.textContent);
    button.textContent = '✅ Copied!';
    setTimeout(() => {
      button.textContent = '📋 Copy';
    }, 2000);
  });
});

// 添加加载动画
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = '1';
  }, 100);
});

// 彩虹文字效果（针对特定类）
function rainbowText(element) {
  const text = element.textContent;
  element.textContent = '';
  
  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.color = `hsl(${(i * 360) / text.length}, 100%, 50%)`;
    span.style.transition = 'color 0.3s';
    element.appendChild(span);
  });
}

// 平滑滚动到顶部按钮
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '⬆️';
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #e60073, #23a6d5);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 24px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  z-index: 1000;
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.opacity = '1';
  } else {
    scrollTopBtn.style.opacity = '0';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

scrollTopBtn.addEventListener('mouseenter', () => {
  scrollTopBtn.style.transform = 'scale(1.2) rotate(360deg)';
});

scrollTopBtn.addEventListener('mouseleave', () => {
  scrollTopBtn.style.transform = 'scale(1) rotate(0deg)';
});

console.log('🎨 酷炫特效已加载！Enjoy your awesome GitHub Page! 🚀');
