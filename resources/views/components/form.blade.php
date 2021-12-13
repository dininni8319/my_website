
        {{-- <form action="" method="post" action="{{ route('contact.store') }}"> --}}
        <form class="form" method="POST" action="{{route('contact.submit')}}">
            <!-- CROSS Site Request Forgery Protection -->
            @csrf
            <div>
   
                <h3 class="h3-timeline">I could be a great asset to your organization! Feel free to contact me!</h3>
            </div>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-inputs" name="name" value="{{old('name')}}">
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-inputs" name="email" value="{{old('email')}}">
            </div>

             <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-inputs" name="phone" value="{{old('phone')}}">
            </div>

            <div class="form-group">
                <label>Subject</label>
                <input type="text" class="form-inputs" name="subject" value="{{old('subject')}}">
            </div>

            <div class="form-group">
                <label>Message</label>
                <textarea class="form-inputs" name="message" rows="4" >{{old('message')}}</textarea>
            </div>
            <div class="form-group">
                <input type="submit" class="form-inputs btn-contact">
            </div>

        </form>