jQuery(document).ready(function ($) {
    function initSwipers() {
        var swiperThumbs = new Swiper(".mySwiper", {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
            breakpoints: {
                0: { slidesPerView: 2 }, // Mobile: 2 slides
                768: { slidesPerView: 4 } // Desktop/tablet: 4 slides
            }
        });

        var swiperMain = new Swiper(".mySwiper2", {
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiperThumbs,
            },
        });
    }

    // Inicializa os Swipers na primeira carga
    initSwipers();

    $("#toggle-buttons").on("click", function () {
        $("#floating-buttons").toggleClass("hidden");
        $(this).toggleClass('btn-active')
        $('#quoteBubble').addClass('hidden')
    });

    $(document).on("click", ".ram-card", function () {
        let model = $(this).data("model");

        // Exibe o loading
        Swal.fire({
            title: "Carregando...",
            text: "Aguarde enquanto carregamos o modelo.",
            allowOutsideClick: false,
            showConfirmButton: false,
            customClass: {
                popup: 'custom-swal',
                confirmButton: 'custom-button'
            },
            didOpen: () => {
                Swal.showLoading();
            }
        });

        // Atualiza a URL sem recarregar a página
        let newUrl = window.location.origin + window.location.pathname + "?model=" + model;
        window.history.pushState({ path: newUrl }, "", newUrl);

        // Faz a requisição AJAX para carregar o modelo
        $.ajax({
            url: newUrl,
            method: "GET",
            success: function (response) {
                $("#ram-content").html($(response).find("#ram-content").html());

                setTimeout(() => {
                    $(".swiper").each(function () {
                        this.swiper?.destroy(true, true);
                    });
                    initSwipers();
                }, 100);

                getParameterByName();

                // Fecha o loading e rola para o topo
                Swal.close();
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }, 300); // Pequeno delay para garantir que o Swal fechou antes da rolagem
            },
            error: function () {
                Swal.fire({
                    icon: "error",
                    title: "Erro!",
                    text: "Erro ao carregar o modelo da RAM."
                });
            }
        });
    });

    $(document).on('click', '.openModal', function () {
        $("#customModal").fadeIn(300).css("display", "flex");
    });

    $("#closeModal, #customModal").click(function (e) {
        if (e.target.id === "customModal" || e.target.id === "closeModal") {
            $("#customModal").fadeOut(300);
        }
    });

    function getParameterByName() {
        const urlParams = new URLSearchParams(window.location.search);
        let model = urlParams.get('model') || "rampage";

        let validModels = ["rampage", "1500", "2500", "3500"];

        if (!validModels.includes(model)) {
            model = "rampage";
        }

        $("#floating_model").val(model);
    }

    getParameterByName()

    $("#floating_cpf").mask("000.000.000-00");
    $("#floating_telefone").mask("(00) 00000-0000");

    $(document).on("click", "#registerLead", function (event) {
        event.preventDefault(); // Evita comportamento padrão do botão

        // Lista de campos obrigatórios e seus nomes corretos para o backend
        let campos = [
            { id: "floating_name", name: "nome", mensagem: "O campo Nome é obrigatório." },
            { id: "floating_cpf", name: "cpf", mensagem: "O campo CPF é obrigatório." },
            { id: "floating_email", name: "email", mensagem: "O campo Email é obrigatório." },
            { id: "floating_telefone", name: "telefone", mensagem: "O campo Telefone é obrigatório." },
            { id: "floating_model", name: "modelo", mensagem: "O campo Modelo é obrigatório." }
        ];

        // Verifica se algum campo está vazio
        for (let campo of campos) {
            if (!$(`#${campo.id}`).val().trim()) {
                return Swal.fire("Erro!", campo.mensagem, "error");
            }
        }

        // Monta os dados do formulário com os names corretos para o backend
        let formData = campos.reduce((dados, campo) => {
            dados[campo.name] = $(`#${campo.id}`).val().trim();
            return dados;
        }, {});

        // Envia os dados via AJAX
        $.ajax({
            url: "https://crm.wave.pro.br/wp-json/crm-wave/v1/create-lead/lp-ram",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function (response) {
                Swal.fire("Sucesso!", response.message || "Cadastro realizado com sucesso!", "success");
                campos.forEach(campo => $(`#${campo.id}`).val(""));
            },
            error: function () {
                Swal.fire("Erro!", "Ocorreu um erro ao enviar os dados. Tente novamente.", "error");
            }
        });
    });
    $(document).on("click", ".newsletter-btn", function (event) {
        event.preventDefault(); // Evita comportamento padrão do botão

        // Lista de campos obrigatórios e seus nomes corretos para o backend
        let campos = [
            { id: "newsletter_email", name: "email", mensagem: "O campo Email é obrigatório." },
        ];

        // Verifica se algum campo está vazio
        for (let campo of campos) {
            if (!$(`input[name="${campo.id}"]`).val().trim()) {
                return Swal.fire("Erro!", campo.mensagem, "error");
            }
        }

        // Monta os dados do formulário com os names corretos para o backend
        let formData = campos.reduce((dados, campo) => {
            dados[campo.name] = $(`input[name="${campo.id}"]`).val().trim();
            return dados;
        }, {});

        // Envia os dados via AJAX
        $.ajax({
            url: "https://crm.wave.pro.br/wp-json/crm-wave/v1/create-lead/lp-ram-newsletter",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function (response) {
                Swal.fire("Sucesso!", response.message || "Cadastro realizado com sucesso!", "success");
                campos.forEach(campo => $(`input[name="${campo.id}"]`).val(""));
            },
            error: function () {
                Swal.fire("Erro!", "Ocorreu um erro ao enviar os dados. Tente novamente.", "error");
            }
        });
    });
    setTimeout(function () {
        $('#quoteBubble').removeClass('-right-60')
        $('#quoteBubble').removeClass('opacity-0')
        $('#quoteBubble').addClass('right-12')
        $('#quoteBubble').addClass('opacity-100')
    }, 3000);

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        var target = $($.attr(this, 'href'));

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800); // Tempo da animação em milissegundos
        }
    });
    var $toggleButton = $('#toggle-buttons');
    var $quoteBubble = $('#quoteBubble');
    var $window = $(window);

    function checkScroll() {
        var scrollTop = $window.scrollTop();
        var windowHeight = $window.height();
        var documentHeight = $(document).height();

        // Verifica se chegou ao final da página
        if (scrollTop + windowHeight >= documentHeight - 10) {
            // Se o bubble estiver visível, oculta-o junto com o botão
            if ($quoteBubble.is(':visible')) {
                $quoteBubble.fadeOut(500);
            }
            $toggleButton.fadeOut(500);
        } else {
            // Se o botão e o bubble estiverem visíveis, deve apenas aparecer se o bubble estiver visível
            if ($quoteBubble.is(':visible')) {
                $quoteBubble.fadeIn(500);
            }
            $toggleButton.fadeIn(500);
        }
    }

    // Verifica o scroll ao rolar a página
    $window.on('scroll', checkScroll);

    // Oculta o bubble se o botão for clicado
    $toggleButton.on('click', function () {
        $quoteBubble.fadeOut(500);
    });

    function gradientCard() {
        var $cards = $(document).find(".ram-card");
        var $defaultActive = $cards.first();
    
        // Adiciona a estrutura do degradê a todos os cards, mas deixa invisível
        function setActiveCard($card) {
          $cards.removeClass("before:opacity-100").addClass("before:opacity-0"); // Esconde o degradê dos outros
          $card.addClass("before:opacity-100"); // Mostra no ativo
        }
    
        // Define o primeiro card como ativo inicialmente
        setActiveCard($defaultActive);
        $cards.hover(function () {
          setActiveCard($(this));
        }, function () {
          setActiveCard($defaultActive);
        });
      }
    
      // Chama a função para ativar o efeito
      gradientCard();
});