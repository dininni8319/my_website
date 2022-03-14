<x-layout>
    {{-- @dd(session('messageSent')) --}}
    @if (session('message'))
        <x-messageAlert />
    @endif
    <x-personal-detail />

    <x-skills />

    <x-timeline />
    
    {{-- <x-projects /> --}}

    <x-projects-mobile />

    <div class="game-room-games"> 

        <x-dancefloor></x-dancefloor>
        <x-game />

    </div>
    <x-scrollButton />

</x-layout>