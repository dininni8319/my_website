
     <div class="container">
         <button id="nav-li-icon"><i class="fas fa-plus icon-color fa-2x"></i></button>
            {{-- <x-animatedMenu /> --}}
              <div>
                  <a href="{{route("homepage")}}">
                    <img src="/logo.png" alt="logo" class="logo">
                  </a>
              </div>
             <ul class="active row"> 
                 <li class="nav-link"><a href="{{route("homepage")}}">Home</a></li>
                 <li class="nav-link"><a href="#">Experiences</a></li>
                 <li class="nav-link"><a href="#">Projects</a></li>
                 <li class="nav-link"><a href="#">Game Room</a></li>
                 <li class="nav-link"><a href="#">Contact</a></li>
            </ul>
         </div>
     </div>
</div>