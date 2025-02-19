</main>

<?php do_action('tailpress_content_end'); ?>

</div>

<?php do_action('tailpress_content_after'); ?>

<footer class="bg-black md:pt-40 pt-10 pb-10 md:px-0 px-5">
    <div class="max-w-6xl mx-auto md:flex justify-between border-b border-b-gray-400 pb-10">
        <div class="md:w-1/2 w-full flex items-start flex-col md:mb-0 mb-5">
            <img src="<?php echo get_theme_image('florenca-logo.png') ?>" class="mb-3">
            <p class="font-rubik font-normal text-sm custom-gray">CNPJ: 77.968.980/0016-21<br>Endereço Matriz: Av. Mal.
                Floriano Peixoto, 3501<br>Parolin, Curitiba - PR</p>
        </div>
        <div class="md:w-1/2 w-full md:flex md:justify-end">
            <img src="<?php echo get_theme_image('ram-footer.png') ?>" class="md:w-3xs w-48 object-contain">
        </div>
    </div>
    <div class="w-full flex justify-between max-w-6xl mx-auto items-center pt-8">
        <p class="font-rubik text-white font-normal text-base">© Copyright 2025 Grupo Florença - Todos os direitos
            reservados</p>
        <p class="text-white text-sm font-normal font-montserrat">Criado por <a href="https://www.wave.pro.br"
                class="hover:text-wave transition-all duration-300" target="_blank">wave</a></p>
    </div>
    <div class="fixed bottom-5 right-5 z-50">
        <!-- Botão principal -->
        <button id="toggle-buttons" class="red-ram text-white p-0 rounded-full shadow-lg cursor-pointer">
            <img src="<?php echo get_theme_image( 'etc.png') ?>" class="w-10">
        </button>

        <!-- Botões secundários -->
        <div id="floating-buttons" class="hidden flex flex-col gap-2 mt-2">
            <button type="button"
                class="red-ram text-white p-0 rounded-full shadow-lg justify-center py-1.5 pl-0.5 cursor-pointer hidden">
                <img src="<?php echo get_theme_image('whatsapp.png') ?>" class="w-7">
            </button>
            <button type="button" id="openModal"
                class="red-ram text-white p-0 rounded-full shadow-lg flex justify-center py-1.5 cursor-pointer">
                <img src="<?php echo get_theme_image( 'envelope.png') ?>" class="w-7">
            </button>
        </div>
    </div>

    <div id="customModal"
        class="fixed inset-0 flex items-center justify-center h-screen w-full z-50 black-opacity-0.5 hidden md:px-0 px-5">
        <div class="bg-gradient-to-r from-black to-gray-800 p-6 rounded-lg shadow-lg w-lg relative">
            <button id="closeModal" class="absolute top-2 right-2 text-white hover:text-white">&times;</button>
            <h2 class="text-2xl font-semibold font-montserrat text-white mb-5">Eu quero ser exclusivo.</h2>
            <p class="text-sm font-rubik text-white"></p>
            <form class="max-w-md mx-auto">
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_name" id="floating_name"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="floating_name"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nome
                        completo</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_cpf" id="floating_cpf"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="floating_cpf"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">CPF</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="floating_email"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                <div class="relative z-0 w-full mb-10 group">
                    <input type="tel" name="floating_telefone" id="floating_telefone"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label for="floating_telefone"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Telefone</label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                    <select name="floating_model" id="floating_model"
                        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                        <option class="text-black" value="" disabled selected hidden>Selecione um modelo</option>
                        <option class="text-black" value="rampage">Rampage</option>
                        <option class="text-black" value="ram1500">Ram 1500</option>
                        <option class="text-black" value="ram2500">Ram 2500</option>
                        <option class="text-black" value="ram3500">Ram 3500</option>
                    </select>
                    <label for="floating_model"
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Modelo</label>
                </div>
                <button type="button" id="registerLead"
                    class="text-white customgradient focus:ring-4 focus:outline-none w-full font-medium rounded-lg text-sm md:w-28 cursor-pointer px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:customgradient dark:focus:ring-blue-800">Enviar</button>
            </form>
        </div>
    </div>

</footer>

</div>

<?php wp_footer(); ?>

</body>

</html>