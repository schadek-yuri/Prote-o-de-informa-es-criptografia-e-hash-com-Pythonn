const senhaInput = document.getElementById("senha");
const contador = document.getElementById("contador");

const generateButton =
    document.getElementById("generateButton");

const result =
    document.getElementById("result");

const passwordResult =
    document.getElementById("passwordResult");

const copyButton =
    document.getElementById("copyButton");

const togglePassword =
    document.getElementById("togglePassword");


// Atualiza o contador de caracteres
senhaInput.addEventListener("input", () => {

    // Permite somente números
    senhaInput.value =
        senhaInput.value.replace(/\D/g, "");

    contador.textContent =
        `${senhaInput.value.length} / 20`;
});


// Mostrar ou esconder a senha
togglePassword.addEventListener("click", () => {

    if (senhaInput.type === "password") {

        senhaInput.type = "text";
        togglePassword.textContent = "🙈";

    } else {

        senhaInput.type = "password";
        togglePassword.textContent = "👁";
    }
});


// Gera a senha
generateButton.addEventListener("click", () => {

    const senhaOriginal =
        senhaInput.value;

    if (senhaOriginal.length === 0) {

        alert("Digite uma senha numérica.");

        senhaInput.focus();

        return;
    }

    const novaSenha =
        gerarSenhaSegura(senhaOriginal);

    passwordResult.textContent =
        novaSenha;

    result.classList.add("show");
});


// Geração da senha
function gerarSenhaSegura(senhaOriginal) {

    const maiusculas =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const minusculas =
        "abcdefghijklmnopqrstuvwxyz";

    const numeros =
        "0123456789";

    const simbolos =
        "!@#$%&*+-_=.?";

    const caracteres =
        maiusculas +
        minusculas +
        numeros +
        simbolos;

    let novaSenha = "";

    /*
     * Utiliza os números da senha original
     * para selecionar alguns caracteres.
     */
    for (const numero of senhaOriginal) {

        const indice =
            Number(numero) % caracteres.length;

        novaSenha +=
            caracteres[indice];
    }


    /*
     * Completa a senha até 20 caracteres
     * utilizando valores aleatórios.
     */
    while (novaSenha.length < 20) {

        novaSenha +=
            caractereAleatorio(caracteres);
    }


    /*
     * Embaralha todos os caracteres.
     */
    return embaralhar(novaSenha);
}


// Obtém um caractere aleatório
function caractereAleatorio(caracteres) {

    const valores =
        new Uint32Array(1);

    crypto.getRandomValues(valores);

    const indice =
        valores[0] % caracteres.length;

    return caracteres[indice];
}


// Embaralha a senha
function embaralhar(texto) {

    const caracteres =
        texto.split("");

    for (
        let i = caracteres.length - 1;
        i > 0;
        i--
    ) {

        const valores =
            new Uint32Array(1);

        crypto.getRandomValues(valores);

        const j =
            valores[0] % (i + 1);

        [
            caracteres[i],
            caracteres[j]
        ] = [
            caracteres[j],
            caracteres[i]
        ];
    }

    return caracteres.join("");
}


// Copiar senha
copyButton.addEventListener("click", async () => {

    const senha =
        passwordResult.textContent;

    if (!senha) {
        return;
    }

    try {

        await navigator.clipboard.writeText(senha);

        copyButton.textContent =
            "✅ Copiado!";

        setTimeout(() => {

            copyButton.textContent =
                "📋 Copiar";

        }, 2000);

    } catch {

        alert(
            "Não foi possível copiar automaticamente."
        );
    }
});
