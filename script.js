document.addEventListener("DOMContentLoaded", function() {
    // Função para envio de e-mail
    const contactForm = document.getElementById('contactForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
  
      const templateParams = {
        from_name: name,
        to_email: 'feedbackchurrasmarituba@gmail.com', // Coloque o endereço de e-mail de destino correto aqui
        phone_number: phone,
        message_html: message
      };
  
      emailjs.send('service_koojnr3', 'template_qfuc3ca', templateParams, 'user_youruserid')
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          contactForm.reset();
          confirmationMessage.style.display = 'block';
          setTimeout(function() {
            confirmationMessage.style.display = 'none'; // Esconder a mensagem após alguns segundos
          }, 5000); // Tempo em milissegundos, aqui configurado para 5 segundos
        })
        .catch(function(error) {
          console.log('FAILED...', error);
          alert('Falha ao enviar a mensagem. Por favor, tente novamente.');
        });
    });

    // Inicialização do EmailJS
    emailjs.init("user_youruserid"); // Substitua 'user_youruserid' pelo seu ID de usuário do EmailJS
});


  
    // Rolamento suave para a seção "Informações"
    const infoLink = document.querySelector('a[href="#info"]');
    if (infoLink) {
      infoLink.addEventListener('click', function(event) {
        event.preventDefault();
        const targetElement = document.getElementById('info');
        const offset = 100; // Ajuste opcional para a posição da rolagem
        const targetPosition = targetElement.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    }
  
    // Rolamento suave para a seção "Sobre nós"
    const sobreNosLink = document.querySelector('a[href="#Sobrenos"]');
    if (sobreNosLink) {
      sobreNosLink.addEventListener('click', function(event) {
        event.preventDefault();
        const targetElement = document.querySelector('.Sobrenos-section');
        const offset = 100; // Ajuste opcional para a posição da rolagem
        const targetPosition = targetElement.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    }
 
