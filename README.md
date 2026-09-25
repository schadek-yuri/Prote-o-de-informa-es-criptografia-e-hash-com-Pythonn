🔐 SecureKey

Um gerador de senhas desenvolvido com HTML, CSS e JavaScript, criado para demonstrar conceitos de segurança, aleatoriedade e geração de senhas.

O usuário informa uma senha numérica de até 20 caracteres e o sistema gera uma nova senha com letras maiúsculas, letras minúsculas, números e símbolos.

✨ Funcionalidades

🔢 Aceita senhas numéricas de até 20 caracteres.

🎲 Adiciona caracteres aleatórios.

🔤 Utiliza letras maiúsculas e minúsculas.

🔢 Utiliza números.

🔣 Utiliza símbolos.

🔀 Embaralha os caracteres.

🔒 Utiliza crypto.getRandomValues().

📋 Possui botão para copiar a senha.

👁 Permite mostrar e esconder a senha de entrada.

📊 Exibe um indicador de segurança.

📱 Interface responsiva para celular e computador.

⚡ Funciona diretamente no navegador.

🌐 Não necessita de servidor ou banco de dados.

🖥️ Interface

O projeto possui uma interface moderna com:

Tema escuro;

Gradientes;

Efeitos de transparência;

Animações;

Cards informativos;

Layout responsivo.

🚀 Como executar

Não é necessário instalar nenhuma biblioteca.

Basta baixar ou clonar o projeto:

git clone https://github.com/SEU-USUARIO/securekey.git


Entre na pasta:

cd securekey


Depois abra:

index.html


no navegador.

🔐 Como funciona

O usuário informa uma sequência de números:

123456789


O programa utiliza esses números como parte do processo de geração.

Depois são adicionados caracteres de diferentes grupos:

ABCDEFGHIJKLMNOPQRSTUVWXYZ
abcdefghijklmnopqrstuvwxyz
0123456789
!@#$%&*+-_=.


O resultado é uma senha de até 20 caracteres.

Exemplo:

a7#Kp2!xM9@qL4$zT8&


O resultado é diferente a cada geração devido à utilização de valores aleatórios.

🛡️ Aleatoriedade

O projeto utiliza:

crypto.getRandomValues()


Essa API fornece valores aleatórios apropriados para aplicações que precisam de aleatoriedade mais forte do que o Math.random() tradicional.

🔒 Privacidade

Todo o processamento acontece localmente no navegador.

A senha digitada não é enviada para um servidor, API ou banco de dados.

⚠️ Importante

Este projeto é educacional.

Transformar uma senha existente em outra senha não é necessariamente a melhor forma de proteger uma conta real. Para uso real, é recomendado utilizar senhas longas, únicas e geradas aleatoriamente, preferencialmente armazenadas em um gerenciador de senhas.

Nunca reutilize a mesma senha em vários serviços.

📁 Estrutura
securekey/
│
├── LICENSE
├── README.md
├── index.html
└── script.js

🛠️ Tecnologias

HTML5

CSS3

JavaScript

Web Crypto API

📚 Objetivo educacional

O projeto foi desenvolvido para praticar:

Manipulação do DOM;

Eventos JavaScript;

Validação de entrada;

Geração de valores aleatórios;

Manipulação de strings;

Arrays;

Funções;

Interface responsiva;

Conceitos básicos de segurança da informação.

📄 Licença

Este projeto está disponível sob a licença MIT.
