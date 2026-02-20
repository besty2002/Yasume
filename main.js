document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');
  const htmlElement = document.documentElement;

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  });

  function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  }

  // Active navigation handling
  const navButtons = document.querySelectorAll('.nav button');
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      navButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update dashboard title based on button text
      const pageTitle = button.querySelector('span').textContent;
      document.querySelector('.topbar h2').textContent = pageTitle;

      // Update description text based on page
      const description = document.querySelector('.topbar p');
      if (pageTitle === '대시보드') {
        description.textContent = '잔여 연차 확인, 휴가 신청 및 승인 상태를 관리하세요.';
      } else if (pageTitle === '휴가 신청') {
        description.textContent = '원하는 날짜를 선택하여 휴가를 신청하세요.';
      } else if (pageTitle === '팀 캘린더') {
        description.textContent = '동료들의 휴가 일정을 확인하세요.';
      } else if (pageTitle === '승인 관리') {
        description.textContent = '팀원들의 휴가 신청을 검토하고 승인하세요.';
      } else if (pageTitle === '설정') {
        description.textContent = '개인 정보 및 알림 설정을 변경하세요.';
      }
    });
  });
});
