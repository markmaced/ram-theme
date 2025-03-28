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
                setTimeout(() => {
                    activeCard();
                }, 100);

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
        $('#wppLead').css('display', 'none')
        $("#lpRam").css("display", "block");
        $('#formName').val('LP Ofertas Ram');
    });

    $(document).on('click', '.openWpp', function () {
        $("#customModal").fadeIn(300).css("display", "flex");
        $('#lpRam').css('display', 'none')
        $("#wppLead").css("display", "block");
        $('#formName').val('Whatsapp Lead');
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
    $("#wpp_telefone").mask("(00) 00000-0000");

    $(document).on("click", "#registerLead", function (event) {
        event.preventDefault(); // Evita comportamento padrão do botão

        // Lista de campos obrigatórios e seus nomes corretos para o backend
        let campos = [
            { id: "floating_name", name: "nome", mensagem: "O campo Nome é obrigatório." },
            { id: "floating_cpf", name: "cpf", mensagem: "O campo CPF é obrigatório." },
            { id: "floating_email", name: "email", mensagem: "O campo Email é obrigatório." },
            { id: "floating_telefone", name: "telefone", mensagem: "O campo Telefone é obrigatório." },
            { id: "floating_model", name: "modelo", mensagem: "O campo Modelo é obrigatório." },
            { id: "formName", name: "form_name", mensagem: "O campo Hidden é obrigatório." }
        ];

        // Verifica se algum campo está vazio
        for (let campo of campos) {
            if (!$(`#${campo.id}`).val().trim()) {
                Swal.close()
                return Swal.fire("Erro!", campo.mensagem, "error");
            }
        }

        Swal.fire({
            title: "Aguarde...",
            text: "Estamos processando seu cadastro.",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

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
                Swal.close()
                Swal.fire("Sucesso!", response.message || "Cadastro realizado com sucesso!", "success");
                campos.forEach(campo => $(`#${campo.id}`).val(""));
            },
            error: function () {
                Swal.fire("Erro!", "Ocorreu um erro ao enviar os dados. Tente novamente.", "error");
            }
        });
    });
    $(document).on("click", "#registerLeadWpp", function (event) {
        event.preventDefault(); // Evita comportamento padrão do botão

        // Lista de campos obrigatórios e seus nomes corretos para o backend
        let campos = [
            { id: "wpp_name", name: "nome", mensagem: "O campo Nome é obrigatório." },
            { id: "wpp_email", name: "email", mensagem: "O campo Email é obrigatório." },
            { id: "wpp_telefone", name: "telefone", mensagem: "O campo Telefone é obrigatório." },
            { id: "formName", name: "form_name", mensagem: "O campo Hidden é obrigatório." }
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

        // Exibe o loading antes da requisição
        Swal.fire({
            title: "Aguarde...",
            text: "Estamos processando seu cadastro.",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        // Envia os dados via AJAX
        $.ajax({
            url: "https://crm.wave.pro.br/wp-json/crm-wave/v1/create-lead/lp-ram",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function (response) {
                Swal.fire({
                    title: "Sucesso!",
                    text: response.message || "Cadastro realizado com sucesso!",
                    icon: "success",
                    confirmButtonText: "OK"
                }).then((result) => {
                    if (result.isConfirmed) {
                        campos.forEach(campo => $(`#${campo.id}`).val(""));

                        let linkWpp = `https://wa.me/5541992580720`;
                        window.location.href = linkWpp;
                    }
                });
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

        Swal.fire({
            title: "Aguarde...",
            text: "Estamos processando seu cadastro.",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

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
                Swal.close()
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

    var $cards = $(".ram-card");

    function activeCard() {
        var $cards = $(".ram-card"); // Atualiza os cards
        var $defaultActive = null;

        // Percorre os cards para encontrar aquele que contém um filho com .active-ram
        $cards.each(function () {
            if ($(this).find(".active-ram").length) {
                $defaultActive = $(this);
                return false;
            }
        });

        console.log($defaultActive)

        setActiveCard($defaultActive);

        $cards.hover(
            function () {
                setActiveCard($(this));
            },
            function () {
                setActiveCard($defaultActive);
            }
        );
    }

    function setActiveCard($card) {
        $(".ram-card .bg-black").css("opacity", "0.6"); // Escurece todos
        $(".overlay-infos").removeClass('bg-black-70')
        if ($card) {
            $card.find(".bg-black").css("opacity", "0");
            $card.find(".infos-content .overlay-infos").addClass("bg-black-70");
        }
    }

    activeCard()

});