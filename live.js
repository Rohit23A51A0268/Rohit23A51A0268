document.addEventListener('DOMContentLoaded', function() {
  // Login modal elements
  const loginMenu = document.getElementById('login-menu');
  const loginBox = document.getElementById('login-box');
  const closeBtn = document.getElementById('close');

  // Register modal elements
  const regMenu = document.getElementById('reg-menu');
  const regBox = document.getElementById('reg-box');
  const clsBtn = document.getElementById('cls');
  
  // Admin modal elements
  const adminL = document.getElementById('adminLogin');
  const adminR = document.getElementById('adminRegister');

  // Register anchor 
  const clickMe = document.getElementById('click');

  // Function to hide all modals
  function hideAllModals() {
    loginBox.style.display = 'none';
    regBox.style.display = 'none';
  }

  // Show register modal for Register Anchor
  clickMe.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllModals();
    regBox.style.display = 'block';
  });

  // Show login modal for Admin
  adminL.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllModals();
    loginBox.style.display = 'block';
  });
  
  // Show register modal for Admin
  adminR.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllModals();
    regBox.style.display = 'block';
  });

  // Show login modal for User
  loginMenu.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllModals();
    loginBox.style.display = 'block';
  });

  // Hide login modal User
  closeBtn.addEventListener('click', function() {
    loginBox.style.display = 'none';
  });

  // Show register modal User
  regMenu.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllModals();
    regBox.style.display = 'block';
  });

  // Hide register modal User
  clsBtn.addEventListener('click', function() {
    regBox.style.display = 'none';
  });

  // Create Location details modal elements
  const evDetails = document.getElementById('ev-bunk');
  const evBtn = document.getElementById('create');
  const paragraph = document.getElementById('pgraph');
  const ulid = document.getElementById('ul');
  const subb = document.getElementsByClassName('sub')[0];
  const test = document.getElementsByClassName('tested')[0];
  const cool = document.getElementsByClassName('done')[0];
  
  // Show Create Location details modal 
  evBtn.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllModals();
    evDetails.style.display = 'block';
    paragraph.style.display = 'none';
    ulid.style.display = 'none';
  });

  

  // Show submitted modal
  subb.addEventListener('click', function() {
    test.style.display = 'block';
    evDetails.style.display = 'none';
    paragraph.style.display = 'none';
    ulid.style.display = 'none';
  });

  // Hide submitted modal
  cool.addEventListener('click', function() {
    test.style.display = 'none';
    evDetails.style.display = 'none';
    paragraph.style.display = 'block';
    ulid.style.display = 'flex';
  });

  // Create EV bunk details modal
  const manageBnk = document.getElementById('managebunk');
  const manageModal = document.getElementsByClassName('manage')[0];
  
  // Show EV bunk details modal
  manageBnk.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllModals();
    manageModal.style.display = 'block';
    paragraph.style.display = 'none';
    ulid.style.display = 'none';
  });

  // Create Recharge slots modal
  const rechargeSlots = document.getElementById('recharge');
  const Charge = document.getElementsByClassName('slot')[0];
  
  // Show Recharge slots modal
  rechargeSlots.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllModals();
    Charge.style.display = 'block';
    paragraph.style.display = 'none';
    ulid.style.display = 'none';
  });

  // Create Search bunks modal
  const Search = document.getElementById('nearby');
  const information = document.getElementsByClassName('present')[0];
  const heading = document.getElementsByClassName('availability')[0];
  const non = document.getElementsByClassName('nope')[0];
  
  // Show Search bunks modal
  Search.addEventListener('click', function(event) {
    event.preventDefault();
    hideAllModals();
    information.style.display = 'block';
    heading.style.display = 'flex';
    paragraph.style.display = 'none';
    ulid.style.display = 'none';
  });

  // Hide Search bunks modal
  non.addEventListener('click', function() {
    information.style.display = 'none';
    heading.style.display = 'none';
    paragraph.style.display = 'block';
    ulid.style.display = 'flex';
  });

  // submitted msgs for other menu bars
  const gotit = document.getElementsByClassName('ok')[0];
  const fine = document.getElementsByClassName('okk')[0];
 
  // Show submitted modal
  gotit.addEventListener('click', function() {
    test.style.display = 'block';
    manageModal.style.display = 'none';
    paragraph.style.display = 'none';
    ulid.style.display = 'none';
  });

  // Hide submitted modal
  cool.addEventListener('click', function() {
    test.style.display = 'none';
    manageModal.style.display = 'none';
    paragraph.style.display = 'block';
    ulid.style.display = 'flex';
  });

  // Show submitted modal
  fine.addEventListener('click', function() {
    test.style.display = 'block';
    Charge.style.display = 'none';
    paragraph.style.display = 'none';
    ulid.style.display = 'none';
  });

  // Hide submitted modal
  cool.addEventListener('click', function() {
    test.style.display = 'none';
    Charge.style.display = 'none';
    paragraph.style.display = 'block';
    ulid.style.display = 'flex';
  });

  // Hide modals when clicking outside of them for User
  const outSide = document.getElementById('content');
  window.addEventListener('click', function(event) {
    if (event.target === outSide) {
      loginBox.style.display = 'none';
    }
    if (event.target === outSide) {
      regBox.style.display = 'none';
    }
  });

  // About Page elements
  const aboutPage = document.getElementsByClassName('about')[0];
  const closeAbout = document.getElementsByClassName('clsAbt')[0];
  const Abt = document.getElementById('abtBtn');
  
  // Show About Page 
  Abt.addEventListener('click', function() {
    aboutPage.style.display = 'block';
    paragraph.style.display = 'none';
    ulid.style.display = 'none';
  });

  // Hide About Page modal
  closeAbout.addEventListener('click', function() {
    aboutPage.style.display = 'none';
    paragraph.style.display = 'block';
    ulid.style.display = 'flex';
  });

  // Function to load data from localStorage
  function loadData() {
    for (let i = 1; i <= 7; i++) {
      const inputText = localStorage.getItem(`input${i}`);
      if (inputText) {
        document.getElementById(`list${i}`).innerText = inputText;
      }
      
    }

    for (let i = 1; i <= 3; i++) {
      const inputmsgs = localStorage.getItem(`copy${i}`);
      if (inputmsgs) {
        document.getElementById(`paste${i}`).innerText = inputmsgs;
      }   
    }

    for (let i = 1; i <= 4; i++) {
      const inputform = localStorage.getItem(`grab${i}`);
      if (inputform) {
        document.getElementById(`drop${i}`).innerText = inputform;
      }
    }

}

  
  Search.addEventListener('click', function(event) {
    event.preventDefault();
    for (let i = 1; i <= 7; i++) {
      const inputText = document.getElementById(`input${i}`).value;
      localStorage.setItem(`input${i}`, inputText);
    }

    for (let i = 1; i <= 3; i++) {
      const inputmsgs = document.getElementById(`copy${i}`).value;
      localStorage.setItem(`copy${i}`, inputmsgs);
    }

    for (let i = 1; i <= 4; i++) {
      const inputform = document.getElementById(`grab${i}`).value;
      localStorage.setItem(`grab${i}`, inputform);
    }
  });

  // Event listener for search button to populate EV List
  Search.addEventListener('click', function(event) {
    event.preventDefault();
    populateEVList();
  });

  // Function to populate EV List
  function populateEVList() {
    for (let i = 1; i <= 7; i++) {
      const inputText = localStorage.getItem(`input${i}`);
      if (inputText) {
        document.getElementById(`list${i}`).innerText = inputText;
      }
    }

    for (let i = 1; i <= 3; i++) {
      const inputmsgs = localStorage.getItem(`copy${i}`);
      if (inputmsgs) {
        document.getElementById(`paste${i}`).innerText = inputmsgs;
      }
    }

    for (let i = 1; i <= 4; i++) {
      const inputform = localStorage.getItem(`grab${i}`);
      if (inputform) {
        document.getElementById(`drop${i}`).innerText = inputform;
      }
    }
  }

  // Initial load
  loadData();
});