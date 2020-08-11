function writeText(id) {
  const elem = document.querySelector(id);  

  function pulsar (text, time) {
    setTimeout(
      function () {
        elem.innerHTML = text;     
      }, time);  
  }

  pulsar('_', 10); 
  pulsar('d_', 400); 
  pulsar('di_', 500); 
  pulsar('dig_', 600); 
  pulsar('digi_', 700); 
  pulsar('digit_', 800); 
  pulsar('digita_', 900); 
  pulsar('digital_', 1000); 
  pulsar('digital _', 1100); 
  pulsar('digital c_', 1200); 
  pulsar('digital cl_', 1300); 
  pulsar('digital clo_', 1400); 
  pulsar('digital clou_', 1500); 
  pulsar('digital cloud_', 1600); 
  pulsar('digital cloud', 1700); 
  pulsar('digital cloud_', 1800); 
  pulsar('digital cloud', 1900); 
  pulsar('digital cloud_', 2000);  
  pulsar('digital cloud', 2100); 
  pulsar('digital cloud_', 2200); 
  pulsar('digital cloud', 2300); 
  pulsar('digital cloud_', 2400); 
};

document.addEventListener('DOMContentLoaded', writeText('.header__logo'));
