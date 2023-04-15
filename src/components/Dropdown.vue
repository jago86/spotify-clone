<template>
    <div class="w-64 flex flex-col p-1 text-sm bg-dark-light rounded shadow">
        <button class="p-3 text-left hover:bg-dark-lighter rounded">
            Seguir
        </button>

        <button class="p-3 text-left hover:bg-dark-lighter rounded">
            Ir a radio del artista
        </button>

        <button class="flex justify-between items-center p-3 text-left hover:bg-dark-lighter rounded">
            <div>Denunciar</div>
            <div>
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            </div>
        </button>

        <button class="flex justify-between items-center p-3 text-left hover:bg-dark-lighter rounded">
            <div>Compartir</div>
            <div>
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </div>
        </button>

        <button class="p-3 text-left hover:bg-dark-lighter rounded">
            Abrir en la aplicación del ordenador
        </button>

    </div>
</template>
